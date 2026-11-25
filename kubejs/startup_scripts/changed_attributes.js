// kubejs/startup_scripts/changed_attributes.js
ItemEvents.modification(event => {
    // slotId: nombre del modificador (helmet...), slot: head / chest / legs / feet
    function setArmor(id, slotId, slot, defensa, dureza) {
        event.modify(id, item => {
            // Lee los atributos base SIN disparar eventos de NeoForge (evita el crash en servidor)
            let base = item.item().getDefaultAttributeModifiers()
            if (!base) {
                console.error('[ATTR] no hay atributos base para ' + id)
            } else {
                let mods = base
                    .withModifierAdded('minecraft:generic.armor',
                        { id: 'minecraft:armor.' + slotId, amount: defensa, operation: 'add_value' }, slot)
                    .withModifierAdded('minecraft:generic.armor_toughness',
                        { id: 'minecraft:armor.' + slotId, amount: dureza, operation: 'add_value' }, slot)
                    .modifiers()
                item.setAttributeModifiersWithTooltip(mods)
            }
        })
    }

    // Gold vanilla
    setArmor('minecraft:golden_helmet',     'helmet',     'head',  2, 0.1)
    setArmor('minecraft:golden_chestplate', 'chestplate', 'chest', 6, 0.1)
    setArmor('minecraft:golden_leggings',   'leggings',   'legs',  5, 0.1)
    setArmor('minecraft:golden_boots',      'boots',      'feet',  2, 0.1)

    // Gilded (Armageddon)
    setArmor('armageddon_mod:gilded_armor_helmet',      'helmet',     'head',  2, 0.5)
    setArmor('armageddon_mod:gilded_armor_chestplate',  'chestplate', 'chest', 6, 0.5)
    setArmor('armageddon_mod:gilded_armor_leggings',    'leggings',   'legs',  5, 0.5)
    setArmor('armageddon_mod:gilded_armor_boots',       'boots',      'feet',  2, 0.5)

    // Emerald Pickle Tweaks
    setArmor('pickletweaks:emerald_helmet',     'helmet',     'head',  3, 1.0)
    setArmor('pickletweaks:emerald_chestplate', 'chestplate', 'chest', 7, 1.0)
    setArmor('pickletweaks:emerald_leggings',   'leggings',   'legs',  6, 1.0)
    setArmor('pickletweaks:emerald_boots',      'boots',      'feet',  2, 1.0)

    // Wizard Armor (Irons Spellbooks)
    setArmor('irons_spellbooks:wizard_hat',        'helmet',     'head',  2, 0.5)
    setArmor('irons_spellbooks:wizard_helmet',     'helmet',     'head',  2, 0.5)
    setArmor('irons_spellbooks:wizard_chestplate', 'chestplate', 'chest', 5, 0.5)
    setArmor('irons_spellbooks:wizard_leggings',   'leggings',   'legs',  4, 0.5)
    setArmor('irons_spellbooks:wizard_boots',      'boots',      'feet',  2, 0.5)
})