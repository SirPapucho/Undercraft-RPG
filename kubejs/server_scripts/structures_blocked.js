// Restricciones de estructuras con AStages
const AST_RESTRICCIONES = [
    { stage: 'ciudad_ancestral',            nombre: 'La Ciudad Ancestral',              estructuras: ['minecraft:ancient_city'] },
    { stage: 'monumento_acuatico',          nombre: 'El Monumento Oceánico',            estructuras: ['betteroceanmonuments:ocean_monument'] },
    { stage: 'stronghold',                  nombre: 'La Stronghold',                    estructuras: ['betterstrongholds:stronghold'] },
    { stage: 'ciudad_hundida',              nombre: 'La Ciudad Hundida',                estructuras: ['cataclysm:sunken_city'] },
    { stage: 'fabrica_ancestral',           nombre: 'La Fabrica',                       estructuras: ['cataclysm:ancient_factory'] },
    { stage: 'piramide_maldita',            nombre: 'La Maldicion de la Piramide',      estructuras: ['cataclysm:cursed_pyramid'] },
    { stage: 'arena_de_fuego',              nombre: 'El Ring en Llamas',                estructuras: ['cataclysm:burning_arena'] },
    { stage: 'forga_de_almas',              nombre: 'La Forja',                         estructuras: ['cataclysm:soul_black_smith'] },
    { stage: 'nave_del_kraken',             nombre: 'La Nave del Kraken',               estructuras: ['block_factorys_bosses:kraken_ship'] },
    { stage: 'torre_del_dragon',            nombre: 'La Torre del Dragón',              estructuras: ['block_factorys_bosses:dragon_tower'] },
    { stage: 'nido_del_gusano_de_arena',    nombre: 'El Nido del Gusano de Arena',      estructuras: ['block_factorys_bosses:sandworm_nest'] },
    { stage: 'la_arena_del_nether',         nombre: 'El Arena del Nether',              estructuras: ['block_factorys_bosses:underworld_arena'] },
    { stage: 'refugio_del_yeti',            nombre: 'El Refugio del Yeti',              estructuras: ['block_factorys_bosses:yeti_hideout'] }
    // { stage: 'estr_...', nombre: '...', estructuras: ['cataclysm:...'] }
]

if (typeof AStages === 'undefined') {
    console.error('[AST] AStages no está cargado: no se aplican restricciones')
} else {
    AST_RESTRICCIONES.forEach(grupo => {
        grupo.estructuras.forEach((estructura, indice) => {
            let restriccion = AStages.addRestrictionForStructure('astages/' + grupo.stage + '_' + indice, grupo.stage, estructura)
            if (!restriccion) {
                console.error('[AST] no se pudo crear la restricción de ' + estructura)
            } else {
                let mensaje = loc => Text.red('Aún no estás listo para esto: ' + grupo.nombre + '.')
                restriccion.denyEnter()
                restriccion.enterMessage(mensaje)
                restriccion.attackMessage(mensaje)
                restriccion.interactMessage(mensaje)
                restriccion.placeMessage(mensaje)
                restriccion.breakMessage(mensaje)
                console.log('[AST] restringida ' + estructura + ' con la stage ' + grupo.stage)
            }
        })
    })
}