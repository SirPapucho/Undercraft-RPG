// // Participantes en jefes de Cataclysm: todos los que hagan daño reciben el crédito
// const BOSS_DEBUG = true

// // id de la entidad -> { stage, advancement }
// const BOSSES_CATACLYSM = {
//     'cataclysm:ender_guardian':        { stage: 'cata_ender_guardian',        advancement: 'undercraft:cataclysm/ender_guardian' },
//     'cataclysm:netherite_monstrosity': { stage: 'cata_netherite_monstrosity', advancement: 'undercraft:cataclysm/netherite_monstrosity' },
//     'cataclysm:ignis':                 { stage: 'cata_ignis',                 advancement: 'undercraft:cataclysm/ignis' },
//     'cataclysm:the_harbinger':         { stage: 'cata_harbinger',             advancement: 'undercraft:cataclysm/harbinger' },
//     'cataclysm:the_leviathan':         { stage: 'cata_leviathan',             advancement: 'undercraft:cataclysm/leviathan' },
//     'cataclysm:ancient_remnant':       { stage: 'cata_ancient_remnant',       advancement: 'undercraft:cataclysm/ancient_remnant' },
//     'cataclysm:scylla':                { stage: 'cata_scylla',                advancement: 'undercraft:cataclysm/scylla' }
// }
// const CLAVE_PARTICIPANTES = 'uc_participantes'

// EntityEvents.hurt(event => {
//     const victima = event.entity
//     const idVictima = String(victima.type)
//     if (!BOSSES_CATACLYSM[idVictima]) {
//         // No es un jefe de la lista: no hacemos nada
//     } else {
//         const jugador = event.source.player
//         if (!jugador) {
//             // El daño no viene de un jugador (mob, lava, etc.)
//         } else {
//             if (event.damage <= 0) {
//                 // Sin daño real
//             } else {
//                 const uuid = String(jugador.uuid)
//                 const datos = victima.persistentData
//                 const actual = datos.getString(CLAVE_PARTICIPANTES)
//                 if (actual.indexOf(uuid) >= 0) {
//                     // Ya estaba registrado
//                 } else {
//                     datos.putString(CLAVE_PARTICIPANTES, actual.length == 0 ? uuid : actual + ',' + uuid)
//                     if (BOSS_DEBUG) { console.log('[BOSS] ' + jugador.username + ' registrado contra ' + idVictima) }
//                 }
//             }
//         }
//     }
// })

// EntityEvents.death(event => {
//     const jefe = event.entity
//     const idJefe = String(jefe.type)
//     const config = BOSSES_CATACLYSM[idJefe]
//     if (!config) {
//         // No es un jefe de la lista
//     } else {
//         const lista = jefe.persistentData.getString(CLAVE_PARTICIPANTES)
//         if (lista.length == 0) {
//             console.log('[BOSS] ' + idJefe + ' murió sin participantes registrados')
//         } else {
//             const uuids = lista.split(',')
//             event.server.players.forEach(p => {
//                 if (uuids.indexOf(String(p.uuid)) < 0) {
//                     // Este jugador no participó
//                 } else {
//                     if (p.stages.has(config.stage)) {
//                         // Ya tenía el crédito
//                     } else {
//                         p.stages.add(config.stage)
//                         event.server.runCommandSilent('advancement grant ' + p.username + ' only ' + config.advancement)
//                         p.tell(Text.gold('Has derrotado a ').append(Text.yellow(idJefe)).append(Text.gold(' junto a tu equipo.')))
//                         if (BOSS_DEBUG) { console.log('[BOSS] crédito a ' + p.username + ' (' + idJefe + ')') }
//                     }
//                 }
//             })
//         }
//     }
// })