// Corrige el slider vanilla de "Shadow Distance" de Iris, que arranca en 32
// aunque iris.properties tenga otro valor.
function irisSincronizarSombras(origen) {
    let IrisVideoSettings = null
    try {
        IrisVideoSettings = Java.loadClass('net.irisshaders.iris.gui.option.IrisVideoSettings')
    } catch (e) {
        IrisVideoSettings = null
    }

    if (IrisVideoSettings == null) {
        console.warn('[IrisFix] Iris no esta instalado o no se pudo cargar (' + origen + ')')
    } else {
        let real = IrisVideoSettings.shadowDistance
        let opcion = IrisVideoSettings.RENDER_DISTANCE
        if (opcion == null) {
            console.warn('[IrisFix] No se encontro el slider de Iris (' + origen + ')')
        } else {
            let mostrado = opcion.get()
            if (mostrado == real) {
                console.info('[IrisFix] Ya estaba sincronizado en ' + real + ' (' + origen + ')')
            } else {
                opcion.set(real)
                console.info('[IrisFix] Slider corregido de ' + mostrado + ' a ' + real + ' (' + origen + ')')
            }
        }
    }
}

// Al cargar el script y otra vez al entrar a un mundo o servidor
irisSincronizarSombras('carga de scripts')
ClientEvents.loggedIn(event => {
    irisSincronizarSombras('entrada al mundo')
})