// Tareas "Custom" de FTB Quests que cobran del saldo de la cartera (SG Economy / Magic Coins).
// Uso en FTB Quests: añade una tarea de tipo Custom a la quest y ponle el tag  precio_<cantidad>
//   ej. precio_100  -> al pulsar la tarea se cobran 100 del saldo y la tarea se completa.
// La quest se marca como Repeatable y la recompensa puede ser una reward table normal.
// IMPORTANTE: después de crear una tarea o cambiar su precio, reinicia el mundo/servidor.

const TP_PREFIJO = 'price_'
const TP_MARCADOR = 'uc_tienda'      // scoreboard interno
const TP_TAG_OK = 'uc_tienda_ok'     // tag temporal: el cobro salió bien

// Devuelve el precio de la tarea leyendo sus tags, o 0 si no tiene un tag válido
function tpPrecioDeTarea(tarea) {
    let precio = 0
    let tags = tarea.getTags()
    if (!tags) {
        precio = 0
    } else {
        tags.forEach(tag => {
            let texto = String(tag)
            if (texto.indexOf(TP_PREFIJO) != 0) {
                // otro tag, se ignora
            } else {
                let valor = parseInt(texto.substring(TP_PREFIJO.length))
                if (isNaN(valor) || valor <= 0) {
                    console.error('[TiendaPago] tag de precio inválido: ' + texto)
                } else {
                    precio = valor
                }
            }
        })
    }
    return precio
}

function tpAviso(jugador, texto, color) {
    jugador.tell(Component.literal('[Tienda] ').gold().bold()
        .append(Component.literal(texto).color(color).bold(false)))
}

// Cobra con el comando de SG Economy. /coins remove no cobra nada si no alcanza el saldo
// y en ese caso devuelve 0, así que solo se pone el tag si de verdad cobró.
function tpCobrar(jugador, precio) {
    let srv = jugador.server
    if (!srv) {
        console.error('[TiendaPago] no se encontró el servidor')
        return false
    } else {
        let nombre = jugador.username
        jugador.removeTag(TP_TAG_OK)
        srv.runCommandSilent('scoreboard objectives add ' + TP_MARCADOR + ' dummy')
        srv.runCommandSilent('scoreboard players set ' + nombre + ' ' + TP_MARCADOR + ' 0')
        srv.runCommandSilent('execute store result score ' + nombre + ' ' + TP_MARCADOR + ' run coins remove ' + nombre + ' ' + precio)
        srv.runCommandSilent('execute if score ' + nombre + ' ' + TP_MARCADOR + ' matches 1.. run tag ' + nombre + ' add ' + TP_TAG_OK)
        let cobrado = jugador.getTags().contains(TP_TAG_OK)
        jugador.removeTag(TP_TAG_OK)
        return cobrado
    }
}

FTBQuestsEvents.customTask(event => {
    let tarea = event.task
    let precio = tpPrecioDeTarea(tarea)
    if (precio <= 0) {
        // no es una tarea de la tienda: no se toca
    } else {
        event.setMaxProgress(1)
        event.setCheckTimer(0)       // nunca se revisa sola, solo al pulsarla
        event.setEnableButton(true)  // el jugador hace clic en la tarea para pagar
        event.setCheck((datos, jugador) => {
            console.info('[TiendaPago] clic de ' + jugador.username + ' en la tarea ' + tarea + ' (' + precio + ' monedas)')
            try {
                if (datos.getProgress() >= 1) {
                    // ya estaba pagada
                } else {
                    if (!tpCobrar(jugador, precio)) {
                        tpAviso(jugador, 'No tienes suficientes monedas, cuesta ' + precio, 'red')
                    } else {
                        datos.setProgress(1)
                        tpAviso(jugador, 'Pagaste ' + precio + ' monedas', 'green')
                    }
                }
            } catch (e) {
                console.error('[TiendaPago] error al cobrar ' + precio + ': ' + e)
            }
        })
        console.info('[TiendaPago] tarea ' + tarea + ' cobra ' + precio + ' monedas')
    }
})