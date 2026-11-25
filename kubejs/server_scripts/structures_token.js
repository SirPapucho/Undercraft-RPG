// Token global: regenera la estructura más cercana con Respawning Structures
const TOKEN_ID = 'kubejs:token_estructura'
const TOKEN_COMANDO = 'respawningstructures respawnClosestStructure'
const TOKEN_OBJETIVO = 'uc_token'
const TOKEN_TAG_OK = 'uc_token_ok'

ItemEvents.firstRightClicked(event => {
    let jug = event.player
    let usado = false
    if (event.item.id != TOKEN_ID) {
        // Otra mano u otro item: ignorar
    } else {
        let esManoSecundaria = String(event.hand).toLowerCase().indexOf('off') >= 0
        if (esManoSecundaria && jug.mainHandItem.id == TOKEN_ID) {
            // Token en las dos manos: solo cuenta la mano principal
        } else {
            let srv = jug.server
            if (!srv) {
                srv = Utils.server
            }
            if (!srv) {
                jug.tell('[TOKEN] ERROR: no encuentro el servidor')
            } else {
                let uuidJug = String(jug.uuid)
                usado = true
                srv.runCommandSilent('scoreboard objectives add ' + TOKEN_OBJETIVO + ' dummy')
                srv.runCommandSilent('tag ' + uuidJug + ' remove ' + TOKEN_TAG_OK)
                srv.runCommandSilent('scoreboard players set #resultado ' + TOKEN_OBJETIVO + ' 0')
                srv.runCommandSilent('execute as ' + uuidJug + ' at @s store success score #resultado ' + TOKEN_OBJETIVO + ' run ' + TOKEN_COMANDO)
                srv.runCommandSilent('execute if score #resultado ' + TOKEN_OBJETIVO + ' matches 1.. run tag ' + uuidJug + ' add ' + TOKEN_TAG_OK)
                if (!jug.tags.contains(TOKEN_TAG_OK)) {
                    // El comando falló o no encontró estructura: no se consume
                    jug.tell(Text.red('El token no reacciona: no hay una estructura regenerable cerca'))
                } else {
                    if (jug.creative) {
                        // En creativo no se gasta
                    } else {
                        event.item.shrink(1)
                    }
                    jug.tell(Text.green('La estructura se ha regenerado'))
                    console.log('[TOKEN] ' + jug.username + ' uso el token')
                }
            }
        }
    }
    if (usado) {
        // Siempre al final: cancel() lanza una excepción que corta el manejador
        event.cancel()
    }
})