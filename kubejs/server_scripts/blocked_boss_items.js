// Bloqueo de invocadores de jefes con AStages: se pueden tener y craftear, pero no usar sin la stage.
// 'stage' es opcional: si no la pones, se usa <tier>_uso.
const AST_PROG = [
    {
        tier: 'Tier_1_Coloso',
        jefe: 'El Coloso de Hierro',
        items: ['armageddon_mod:iron_remote'],
    },
    {
        tier: 'Tier_2_Goblin',
        jefe: 'El Rey Goblin',
        items: ['armageddon_mod:strange_coin']
    },
    {
        tier: 'Tier_3_Arion',
        jefe: 'Arion, El Tirano',
        items: ['armageddon_mod:emerald_totem']
    },
    {
        tier: 'Tier_3_Eldorath',
        jefe: 'Eldorath, El Antiguo Constructor',
        items: ['armageddon_mod:builder_stone']
    },
    {
        tier: 'Tier_5_Zoranth',
        jefe: 'Zoranth, El Olvidado',
        items: ['armageddon_mod:fiery_wither_skull']
    },
]

if (typeof AStages === 'undefined') {
    console.error('[AST] AStages no está cargado: no se aplican restricciones de progresión')
} else {
    AST_PROG.forEach(grupo => {
        if (!grupo.tier || !grupo.items || grupo.items.length == 0) {
            console.error('[AST] grupo mal definido, se omite: ' + grupo.tier)
        } else {
            let stageUso = grupo.stage ? grupo.stage : grupo.tier + '_uso'
            let idRestriccion = 'astages/' + String(grupo.tier).toLowerCase() + '_uso'
            let textoAviso = 'Aún no estás listo para invocar a ' + grupo.jefe + '.'
            let restUso = AStages.addRestrictionForItem(idRestriccion, stageUso, grupo.items)
            if (!restUso) {
                console.error('[AST] no se pudo crear la restricción de uso de ' + grupo.tier)
            } else {
                // Se puede tener en el inventario, en la mano y en contenedores
                restUso.allowInventoryStorage()
                restUso.allowPickup()
                restUso.allowContainerStorage()
                // Se ve en EMI/JEI y con su nombre normal
                restUso.showInRecipeViewer()
                restUso.globalShowName()
                // Usar, atacar, colocar y minar quedan bloqueados por defecto, con aviso
                restUso.useMessage(stack => Text.red(textoAviso))
                restUso.attackMessage(stack => Text.red(textoAviso))
                restUso.placeMessage(stack => Text.red(textoAviso))
                restUso.breakMessage(stack => Text.red(textoAviso))
                console.log('[AST] ' + grupo.items.length + ' item(s) de ' + grupo.tier + ' bloqueados hasta ' + stageUso)
                // Aviso al ganar la stage: sin título en pantalla, mensaje en el chat
                let textoDesbloqueo = grupo.desbloqueo ? grupo.desbloqueo : 'Ya puedes invocar y pelear contra ' + grupo.jefe
                let textoPerdida = grupo.perdida ? grupo.perdida : 'Has perdido el poder para invocar a ' + grupo.jefe
                let custom = AStages.customizeStage(stageUso)
                if (!custom) {
                    console.error('[AST] no se pudo personalizar la stage ' + stageUso)
                } else {
                    custom.titleOnAdd(stage => Component.literal(''))
                    custom.subTitleOnAdd(stage => Component.literal(''))
                    custom.chatMessageOnAdd(stage => Component.literal('[Progresión] ').gold().bold().append(Component.literal(textoDesbloqueo).green().bold()))
                    
                    custom.titleOnRemove(stage => Component.literal(''))
                    custom.subTitleOnRemove(stage => Component.literal(''))
                    custom.chatMessageOnRemove(stage => Component.literal('[Progresión] ').gold().bold().append(Component.literal(textoPerdida).red().bold()))
                }
            }
        }
    })
}