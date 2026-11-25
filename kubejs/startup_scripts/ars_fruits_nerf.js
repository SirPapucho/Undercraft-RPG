// kubejs/startup_scripts/frutas_ars.js
// Rebalance de las frutas de Ars Nouveau: mismo hambre y saturación, efecto mucho más corto.
// Valores originales (Ars Nouveau 1.21.1): 4 de hambre, 0.6 de saturación, siempre comestible,
//   Mendosteen    -> ars_nouveau:recovery  60 s, nivel I
//   Bastion Fruit -> ars_nouveau:shielding 60 s, nivel I

const FA_FRUTAS = [
    {
        item: 'ars_nouveau:mendosteen_pod',
        efecto: 'ars_nouveau:recovery',
        segundos: 8,
        nivel: 0      // 0 = nivel I (ya es el mínimo)
    },
    {
        item: 'ars_nouveau:bastion_pod',
        efecto: 'ars_nouveau:shielding',
        segundos: 12,
        nivel: 0
    }
]

const FA_FoodBuilder = Java.loadClass('dev.latvian.mods.kubejs.item.FoodBuilder')

ItemEvents.modification(event => {
    FA_FRUTAS.forEach(fruta => {
        if (!fruta.item || !fruta.efecto || !(fruta.segundos > 0)) {
            console.error('[FrutasArs] fruta mal definida: ' + fruta.item)
        } else {
            let comida = new FA_FoodBuilder()
                .nutrition(2)
                .saturation(0)
                .alwaysEdible()
                .effect(fruta.efecto, fruta.segundos * 20, fruta.nivel, 1.0)
                .build()
            if (!comida) {
                console.error('[FrutasArs] no se pudo crear la comida de ' + fruta.item)
            } else {
                event.modify(fruta.item, item => {
                    item.setFood(comida)
                })
                console.info('[FrutasArs] ' + fruta.item + ' -> ' + fruta.efecto + ' ' + fruta.segundos + ' s')
            }
        }
    })
})
