StartupEvents.registry('item', event => {
    event.create('kubejs:token_estructura')
        .displayName('Token de Regeneración')
        .texture('minecraft:item/paper')
        .maxStackSize(16)
        .glow(true)
        .rarity('rare')
})