// Efectos mientras el jugador está dentro (o cerca) de una estructura
const EFE_TAG = 'uc_efecto_zona'
const EFE_SEGUNDOS = 4   // duración por defecto de cada aplicación; se renueva cada segundo

// estructura -> margen para rellenar huecos, efectos de la zona y (opcional) luz
// Cada efecto puede llevar 'segundos' (otra duración) y, dentro de 'luz',
// 'esperar: true' para entrar 'retrasoTicks' después de ponerse la luz (20 ticks = 1 s)
const EFE_ZONAS = [
    {
        estructura: 'cataclysm:sunken_city',
        margen: 48,
        efectos: [
            { efecto: 'minecraft:water_breathing', amplificador: 0 }
        ]
    },
    {
        estructura: 'betteroceanmonuments:ocean_monument',
        margen: 24,
        efectos: [
            { efecto: 'minecraft:water_breathing', amplificador: 0 }
        ]
    },
    {
        estructura: 'minecraft:ancient_city',
        margen: 12,
        // Sin luz: ceguera
        efectos: [
            { efecto: 'minecraft:blindness', amplificador: 0 }
        ],
        // Con luz en la mano: la ceguera se desvanece y se aplican estos
        luz: {
            items: ['minecraft:torch', 'minecraft:soul_torch', 'minecraft:lantern', 'minecraft:soul_lantern', 'minecraft:lava_bucket', 'minecraft:glow_ink_sac', 'minecraft:glowstone', 'minecraft:glowstone_dust', 'minecraft:shroomlight', 'minecraft:glow_berries'],
            mantenerEfectos: false,
            retrasoTicks: 50,   // 2.5 s hasta que entran los efectos marcados con 'esperar'
            efectos: [
                { efecto: 'minecraft:darkness',     amplificador: 0 },
                { efecto: 'minecraft:night_vision', amplificador: 0, segundos: 15, esperar: true }
            ]
        }
    }
]

function predicadoEfecto(estructura) {
    return 'undercraft:efecto/' + String(estructura).replace(/[:#\/]/g, '_')
}

function llevaLuz(jug, items) {
    let manoPrincipal = String(jug.mainHandItem.id)
    let manoSecundaria = String(jug.offHandItem.id)
    return items.indexOf(manoPrincipal) >= 0 || items.indexOf(manoSecundaria) >= 0
}

function darEfecto(srv, uuidJug, cfg, segundosForzados) {
    let duracion = segundosForzados != undefined ? segundosForzados : (cfg.segundos != undefined ? cfg.segundos : EFE_SEGUNDOS)
    srv.runCommandSilent('effect give ' + uuidJug + ' ' + cfg.efecto + ' ' + duracion + ' ' + cfg.amplificador + ' true')
}

function quitarEfecto(srv, uuidJug, cfg) {
    srv.runCommandSilent('effect clear ' + uuidJug + ' ' + cfg.efecto)
}

// Estado de la luz por zona (en el NBT del jugador): 0 = sin luz, 1 = en transición, 2 = luz completa
PlayerEvents.tick(event => {
    let jug = event.player
    let nbt = jug.persistentData
    let srv = event.server
    let uuidJug = String(jug.uuid)

    // 1) Temporizador de los efectos retrasados: se cuenta cada tick
    let espera = nbt.getInt('uc_luz_espera')
    if (espera <= 0) {
        // Sin efectos pendientes
    } else {
        espera = espera - 1
        nbt.putInt('uc_luz_espera', espera)
        if (espera > 0) {
            // Aún no toca
        } else {
            let zonaPend = EFE_ZONAS[nbt.getInt('uc_luz_zona')]
            if (zonaPend == undefined || zonaPend.luz == undefined) {
                // La zona pendiente ya no existe
            } else {
                let clavePend = 'uc_luz_' + zonaPend.estructura
                if (nbt.getInt(clavePend) != 1 || !llevaLuz(jug, zonaPend.luz.items)) {
                    // Ya no está en transición o soltó la luz: no se aplica nada
                } else {
                    nbt.putInt(clavePend, 2)
                    zonaPend.luz.efectos.forEach(cfg => {
                        if (cfg.esperar) {
                            darEfecto(srv, uuidJug, cfg)
                        } else {
                            // Este efecto ya se aplicó antes
                        }
                    })
                }
            }
        }
    }

    // 2) Ciclo de comprobación de zonas: cada 20 ticks (1 s)
    let cuenta = nbt.getInt('uc_efe_tick') + 1
    if (cuenta < 20) {
        // Todavía no toca comprobar: solo contamos
        nbt.putInt('uc_efe_tick', cuenta)
    } else {
        nbt.putInt('uc_efe_tick', 0)
        if (jug.spectator) {
            // En espectador no se aplican efectos
        } else {
            EFE_ZONAS.forEach((zona, indice) => {
                let r = zona.margen
                let claveLuz = 'uc_luz_' + zona.estructura
                let puntos = [
                    [0, 0, 0],
                    [r, 0, 0], [-r, 0, 0], [0, 0, r], [0, 0, -r],
                    [0, r, 0], [0, -r, 0],
                    [r, 0, r], [r, 0, -r], [-r, 0, r], [-r, 0, -r]
                ]
                srv.runCommandSilent('tag ' + uuidJug + ' remove ' + EFE_TAG)
                puntos.forEach(p => {
                    if (jug.tags.contains(EFE_TAG)) {
                        // Ya detectado en un punto anterior: no hace falta seguir
                    } else {
                        srv.runCommandSilent('execute as ' + uuidJug + ' at @s positioned ~' + p[0] + ' ~' + p[1] + ' ~' + p[2] + ' if predicate ' + predicadoEfecto(zona.estructura) + ' run tag @s add ' + EFE_TAG)
                    }
                })

                if (!jug.tags.contains(EFE_TAG)) {
                    // No está dentro ni cerca de esta estructura
                    nbt.putInt(claveLuz, 0)
                } else {
                    let hayLuzCfg = zona.luz != undefined
                    let conLuz = hayLuzCfg ? llevaLuz(jug, zona.luz.items) : false
                    if (!conLuz) {
                        // Sin luz: quitamos lo que da la luz (si la zona la tiene) y aplicamos los efectos de la zona
                        nbt.putInt(claveLuz, 0)
                        if (hayLuzCfg) {
                            zona.luz.efectos.forEach(cfg => quitarEfecto(srv, uuidJug, cfg))
                        } else {
                            // Esta zona no tiene mecánica de luz
                        }
                        zona.efectos.forEach(cfg => darEfecto(srv, uuidJug, cfg))
                    } else {
                        let estado = nbt.getInt(claveLuz)
                        if (estado == 0) {
                            // Acaba de ponerse la luz: empieza la transición
                            nbt.putInt(claveLuz, 1)
                            nbt.putInt('uc_luz_zona', indice)
                            nbt.putInt('uc_luz_espera', zona.luz.retrasoTicks)
                            if (zona.luz.mantenerEfectos) {
                                zona.efectos.forEach(cfg => darEfecto(srv, uuidJug, cfg))
                            } else {
                                // La ceguera se reinicia a 1 s para que se desvanezca sola
                                zona.efectos.forEach(cfg => {
                                    quitarEfecto(srv, uuidJug, cfg)
                                    darEfecto(srv, uuidJug, cfg, 1)
                                })
                            }
                            zona.luz.efectos.forEach(cfg => {
                                if (cfg.esperar) {
                                    // Entra cuando termine el temporizador
                                } else {
                                    darEfecto(srv, uuidJug, cfg)
                                }
                            })
                        } else {
                            // En transición (1) o con luz completa (2): renovamos
                            if (zona.luz.mantenerEfectos) {
                                zona.efectos.forEach(cfg => darEfecto(srv, uuidJug, cfg))
                            } else {
                                // La ceguera ya se desvaneció: no hay nada que quitar ni dar
                            }
                            zona.luz.efectos.forEach(cfg => {
                                if (cfg.esperar && estado == 1) {
                                    // Todavía en transición: este efecto aún no entra
                                } else {
                                    darEfecto(srv, uuidJug, cfg)
                                }
                            })
                        }
                    }
                }
            })
        }
    }
})