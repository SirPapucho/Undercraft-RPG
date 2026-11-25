// 1Sophisticated Mods
ServerEvents.recipes(event => {
    event.remove({ output: 'sophisticatedbackpacks:copper_backpack' })
    event.remove({ output: 'sophisticatedbackpacks:iron_backpack' })
    event.remove({ output: 'sophisticatedbackpacks:gold_backpack' })
    event.remove({ output: 'sophisticatedbackpacks:diamond_backpack' })
})

// 1Minecraft
ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:copper_chestplate' })
    event.remove({ output: 'minecraft:copper_leggings' })

    event.remove({ output: 'minecraft:iron_chestplate' })
    event.remove({ output: 'minecraft:iron_leggings' })

    event.remove({ output: 'minecraft:diamond_helmet', input: 'minecraft:diamond' })
    event.remove({ output: 'minecraft:diamond_chestplate', input: 'minecraft:diamond' })
    event.remove({ output: 'minecraft:diamond_leggings', input: 'minecraft:diamond' })
    event.remove({ output: 'minecraft:diamond_boots', input: 'minecraft:diamond' })

    event.remove({ output: 'minecraft:diamond_sword', input: 'minecraft:stick' })
    event.remove({ output: 'minecraft:diamond_pickaxe', input: 'minecraft:stick' })
    event.remove({ output: 'minecraft:diamond_axe', input: 'minecraft:stick' })
    event.remove({ output: 'minecraft:diamond_shovel', input: 'minecraft:stick' })
    event.remove({ output: 'minecraft:diamond_hoe', input: 'minecraft:stick' })
    event.remove({ output: 'pickletweaks:diamond_paxel', input: 'minecraft:stick' })

    event.remove({ output: 'minecraft:saddle' })
})

// 1Shields Expansion
ServerEvents.recipes(event => {
    event.remove({ id: 'shieldexp:wooden_shield' })
    event.remove({ id: 'minecraft:shield' })
    event.remove({ id: 'shieldexp:iron_shield' })
    event.remove({ id: 'shieldexp:golden_shield' })
    event.remove({ id: 'shieldexp:diamond_shield' })
})

// 1Iron Furnaces
ServerEvents.recipes(event => {
    event.remove({ output: 'ironfurnaces:copper_furnace' })
    event.remove({ output: 'ironfurnaces:upgrade_copper' })
    event.remove({ output: 'ironfurnaces:iron_furnace'})
    event.remove({ output: 'ironfurnaces:upgrade_iron' })
    event.remove({ output: 'ironfurnaces:upgrade_iron2' })
    event.remove({ output: 'ironfurnaces:gold_furnace' })
    event.remove({ output: 'ironfurnaces:upgrade_gold' })
    event.remove({ output: 'ironfurnaces:diamond_furnace' })
    event.remove({ output: 'ironfurnaces:upgrade_diamond' })
    event.remove({ output: 'ironfurnaces:emerald_furnace' })
    event.remove({ output: 'ironfurnaces:upgrade_emerald' })
    event.remove({ output: 'irons_spellbooks:scroll_forge' })
    event.remove({ output: 'irons_spellbooks:iron_spell_book' })
    event.remove({ output: 'irons_spellbooks:graybeard_staff' })
})

// 1Armageddon Mod
ServerEvents.recipes(event => {
    event.remove({ output: 'armageddon_mod:iron_remote', input: 'minecraft:iron_ingot' })
    event.remove({ output: 'armageddon_mod:strange_coin', input: 'minecraft:gold_ingot' })
    event.remove({ output: 'armageddon_mod:emerald_totem', input: 'minecraft:emerald' })
    event.remove({ output: 'armageddon_mod:builder_stone', input: 'minecraft:redstone' })
    event.remove({ id: 'armageddon_mod:colossal_iron_ingots_to_normal'})
})

// 1Ars Nouveau
ServerEvents.recipes(event => {
    event.remove({ output: 'ars_nouveau:novice_spell_book' })
    //event.remove({ output: 'ars_nouveau:apprentice_spell_book' })
    //event.remove({ output: 'ars_nouveau:archmage_spell_book' })
    event.remove({ output: 'ars_nouveau:imbuement_chamber' })
    event.remove({ output: 'ars_nouveau:scribes_table' })
    event.remove({ output: 'ars_nouveau:source_jar' })
    event.remove({ output: 'ars_nouveau:enchanting_apparatus' })
})

// 1Create
ServerEvents.recipes(event => {
    event.remove({ output: 'create:andesite_alloy', input: 'minecraft:iron_nugget' })
    event.remove({ output: 'create:mechanical_press' })
})

// 1Iron's Spellbooks
ServerEvents.recipes(event => {
    event.remove({ output: 'irons_spellbooks:alchemist_cauldron' })
    event.remove({ type: 'irons_spellbooks:alchemist_cauldron_brew', mod: 'irons_spellbooks' })
})

// 1Apotheosis
ServerEvents.recipes(event => {
    event.remove({ output: 'apotheosis:salvaging_table' })
    event.remove({ id: 'apotheosis:smithing/upgrade_golden_helmet_to_diamond_helmet' })
    event.remove({ id: 'apotheosis:smithing/upgrade_golden_chestplate_to_diamond_chestplate' })
    event.remove({ id: 'apotheosis:smithing/upgrade_golden_leggings_to_diamond_leggings' })
    event.remove({ id: 'apotheosis:smithing/upgrade_golden_boots_to_diamond_boots' })

    event.remove({ id: 'apotheosis:smithing/upgrade_golden_sword_to_diamond_sword' })
    event.remove({ id: 'apotheosis:smithing/upgrade_golden_pickaxe_to_diamond_pickaxe' })
    event.remove({ id: 'apotheosis:smithing/upgrade_golden_axe_to_diamond_axe' })
    event.remove({ id: 'apotheosis:smithing/upgrade_golden_shovel_to_diamond_shovel' })
    event.remove({ id: 'apotheosis:smithing/upgrade_golden_hoe_to_diamond_hoe' })
})

// 1Just Dire Things
ServerEvents.recipes(event => {
    event.remove({ output: 'justdirethings:gooblock_tier1' })
})

// 1Cataclysm
ServerEvents.recipes(event => {
    event.remove({ output: 'cataclysm:monstrous_eye' })
    event.remove({ output: 'cataclysm:abyssal_sacrifice' })
    event.remove({ output: 'cataclysm:abyss_eye' })
})

// 1Compasses
ServerEvents.recipes(event => {
    event.remove({ output: 'explorerscompass:explorerscompass' })
})

// 1Tom's Simple Storage
ServerEvents.recipes(event => {
    event.remove({ output: 'toms_storage:inventory_connector' })
    event.remove({ output: 'toms_storage:storage_terminal' })
    event.remove({ output: 'toms_storage:crafting_terminal' })
    event.remove({ output: 'toms_storage:inventory_cable_framed' })
})

// 1Hostile Neural Networks
ServerEvents.recipes(event => {
    // event.remove({ output: 'hostilenetworks:sim_chamber' })
    // event.remove({ output: 'hostilenetworks:loot_fabricator' })
})

// 1Disenchanting Table
ServerEvents.recipes(event => {
    event.remove({ id: 'disenchanting_table:disenchanting_table' })
})

// 1Reliquified Artifacts
ServerEvents.recipes(event => {
    event.remove({ output: 'reliquified_artifacts:mimi_dust' })
})

// 1Simply Swords
ServerEvents.recipes(event => {
    event.remove({ output: 'simplyswords:diamond_longsword' })
    event.remove({ output: 'simplyswords:diamond_twinblade' })
    event.remove({ output: 'simplyswords:diamond_rapier' })
    event.remove({ output: 'simplyswords:diamond_katana' })
    event.remove({ output: 'simplyswords:diamond_sai' })
    event.remove({ output: 'simplyswords:diamond_spear' })
    event.remove({ output: 'simplyswords:diamond_warglaive' })
    event.remove({ output: 'simplyswords:diamond_cutlass' })
    event.remove({ output: 'simplyswords:diamond_claymore' })
    event.remove({ output: 'simplyswords:diamond_greathammer' })
    event.remove({ output: 'simplyswords:diamond_greataxe' })
    event.remove({ output: 'simplyswords:diamond_chakram' })
    event.remove({ output: 'simplyswords:diamond_scythe' })
    event.remove({ output: 'simplyswords:diamond_halberd' })
})

// 1Ore Hammer
ServerEvents.recipes(event => {
    event.remove({ mod: 'ore_hammer' })
})