// Activa fases globales de AStages solas cuando llega una fecha y hora real.
// Cada fase se da UNA sola vez: si luego la quitas a mano, el script no la vuelve a dar.

// ---------- CONFIGURACIÓN ----------
// stage: nombre de la stage global (tier + '_Uso', igual que en blocked_boss_items.js)
// fecha: fecha y hora real con zona horaria. -06:00 = hora de Costa Rica.
//        Formato: 'AAAA-MM-DDTHH:MM:SS-06:00'
// Deja fuera de la lista las fases que quieras activar a mano con /astages server add.
const FF_FASES = [
    { stage: 'Tier_1_Coloso_Uso',   fecha: '2026-10-28T08:00:00-06:00' },
    { stage: 'Tier_2_Goblin_Uso',   fecha: '2026-10-29T08:00:00-06:00' },
    { stage: 'Tier_3_Arion_Uso',    fecha: '2026-10-30T08:00:00-06:00' },
    { stage: 'Tier_3_Eldorath_Uso', fecha: '2026-10-31T08:00:00-06:00' },
    { stage: 'Tier_5_Zoranth_Uso',  fecha: '2026-11-02T08:00:00-06:00' }
]
const FF_CADA_TICKS = 200            // cada cuánto se revisa (200 = 10 s)
const FF_PREFIJO = 'uc_ff_dada_'     // marca guardada en el mundo por cada fase dada
// -----------------------------------

// Convierte las fechas una sola vez y avisa de las que estén mal escritas
const FF_LISTA = []
FF_FASES.forEach(fase => {
    if (!fase.stage || !fase.fecha) {
        console.error('[FasesFecha] fase mal definida: ' + fase.stage)
    } else {
        let ms = Date.parse(fase.fecha)
        if (isNaN(ms)) {
            console.error('[FasesFecha] fecha inválida para ' + fase.stage + ': ' + fase.fecha)
        } else {
            FF_LISTA.push({ stage: fase.stage, ms: ms, fecha: fase.fecha })
        }
    }
})

function ffServidorTiene(stage) {
    let tiene = false
    try {
        tiene = AStages.serverHasStage(stage) == true
    } catch (e) {
        console.error('[FasesFecha] no se pudo consultar ' + stage + ': ' + e)
        tiene = false
    }
    return tiene
}

function ffRevisar(srv) {
    let datos = srv.persistentData
    let ahora = Date.now()
    FF_LISTA.forEach(fase => {
        let clave = FF_PREFIJO + fase.stage.toLowerCase()
        if (datos.getBoolean(clave)) {
            // ya se dio antes (o se marcó como dada)
        } else {
            if (ahora < fase.ms) {
                // todavía no es la hora
            } else {
                if (ffServidorTiene(fase.stage)) {
                    // ya estaba activa (por ejemplo, la diste a mano antes): solo se marca
                    datos.putBoolean(clave, true)
                    console.info('[FasesFecha] ' + fase.stage + ' ya estaba activa, se marca como dada')
                } else {
                    try {
                        AStages.addStageToServer(fase.stage, false, true, false)
                        datos.putBoolean(clave, true)
                        console.info('[FasesFecha] ' + fase.stage + ' activada (programada para ' + fase.fecha + ')')
                    } catch (e) {
                        console.error('[FasesFecha] no se pudo activar ' + fase.stage + ': ' + e)
                    }
                }
            }
        }
    })
}

ServerEvents.tick(event => {
    let srv = event.server
    if (!srv) {
        // sin servidor
    } else {
        if (srv.tickCount % FF_CADA_TICKS != 0) {
            // todavía no toca revisar
        } else {
            ffRevisar(srv)
        }
    }
})

ServerEvents.loaded(event => {
    let ahora = Date.now()
    FF_LISTA.forEach(fase => {
        let faltan = fase.ms - ahora
        if (faltan <= 0) {
            console.info('[FasesFecha] ' + fase.stage + ': su fecha ya pasó (' + fase.fecha + ')')
        } else {
            let horas = Math.floor(faltan / 3600000)
            console.info('[FasesFecha] ' + fase.stage + ': faltan ' + Math.floor(horas / 24) + ' días y ' + (horas % 24) + ' horas')
        }
    })
})