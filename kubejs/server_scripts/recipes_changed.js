// 1Sophisticated Backpacks
ServerEvents.recipes(event => {
        function mochila(result, base, pattern, ingredients) {
                ingredients.B = { item: base } // la mochila base siempre va en la B
                event.custom({
                        type: 'sophisticatedbackpacks:backpack_upgrade',
                        category: 'misc',
                        pattern: pattern,
                        key: ingredients,
                        result: { count: 1, id: result }
                })
        }

        // Básica -> Cobre
        mochila(
                'sophisticatedbackpacks:copper_backpack',
                'sophisticatedbackpacks:backpack',
                ['AAA', 'ABA', 'CCC'],
                {
                        A: { tag: 'c:ingots/copper' },
                        C: { item: 'minecraft:copper_block' }
                }
        )

        // Básica -> Hierro
        mochila(
                'sophisticatedbackpacks:iron_backpack',
                'sophisticatedbackpacks:backpack',
                ['DAD', 'ABA', 'CCC'],
                {
                        A: { tag: 'c:ingots/iron' },
                        C: { item: 'minecraft:iron_block' },
                        D: { item: 'armageddon_mod:colossal_iron_ingot' }
                }
        )

        // Cobre -> Hierro
        mochila(
                'sophisticatedbackpacks:iron_backpack',
                'sophisticatedbackpacks:copper_backpack',
                [' D ', 'ABA', ' C '],
                {
                        A: { tag: 'c:ingots/iron' },
                        C: { item: 'minecraft:iron_block' },
                        D: { item: 'armageddon_mod:colossal_iron_ingot' }
                }
        )

        // Hierro -> Oro
        mochila(
                'sophisticatedbackpacks:gold_backpack',
                'sophisticatedbackpacks:iron_backpack',
                ['AAA', 'CBC', 'ADA'],
                {
                        A: { tag: 'c:ingots/gold' },
                        C: { item: 'armageddon_mod:gilded_plate' },
                        D: { item: 'minecraft:gold_block' }
                }
        )

        // Oro -> Diamante (REVISAR)
        event.custom({
                type: 'sophisticatedbackpacks:smithing_backpack_upgrade',
                template: { item: 'apotheosis:diamond_upgrade_smithing_template' },
                base: { item: 'sophisticatedbackpacks:gold_backpack' },
                addition: { item: 'minecraft:diamond' },
                result: { count: 1, id: 'sophisticatedbackpacks:diamond_backpack' }
        })
})

// 1Sophisticated Storage
ServerEvents.recipes(event => {

})

// 1Minecraft
ServerEvents.recipes(event => {
        event.custom({
                type: 'ars_nouveau:enchantment',
                enchantment: 'minecraft:mending',
                level: 1,
                pedestalItems: [
                        { item: 'minecraft:experience_bottle' },
                        { item: 'minecraft:diamond_block' },
                        { item: 'ars_nouveau:source_gem_block' },
                        { item: 'ars_nouveau:source_gem_block' },
                        { item: 'minecraft:lapis_block' },
                        { item: 'minecraft:anvil' },
                        { item: 'ars_nouveau:manipulation_essence' },
                        { item: 'ars_nouveau:manipulation_essence' }
                ],
                sourceCost: 20000
        }).id('kubejs:ars_mending')

        event.custom({
                type: 'justdirethings:fluiddrop',
                catalyst: 'minecraft:obsidian',
                id: 'justdirethings:polymorphic_fluid_source',
                input: { Name: 'justdirethings:polymorphic_fluid_block', Properties: { level: '0' } },
                output: { Name: 'minecraft:crying_obsidian' }
        }).id('kubejs:catalyst_crying_obsidian')

        event.shaped(
                Item.of('minecraft:copper_chestplate'),
                [
                        'A A',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'minecraft:copper_ingot',
                        B: 'minecraft:copper_block'
                }
        )

        event.shaped(
                Item.of('minecraft:copper_leggings'),
                [
                        'ABA',
                        'A A',
                        'A A'
                ],
                {
                        A: 'minecraft:copper_ingot',
                        B: 'minecraft:copper_block'
                }
        )

        event

        event.shaped(
                Item.of('minecraft:iron_chestplate'),
                [
                        'A A',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: 'minecraft:iron_block'
                }
        )

        event.shaped(
                Item.of('minecraft:iron_leggings'),
                [
                        'ABA',
                        'A A',
                        'A A'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: 'minecraft:iron_block'
                }
        )

        event.shaped(
                Item.of('minecraft:saddle'),
                [
                        'ABA',
                        'A A',
                        '   '
                ],
                {
                        A: 'minecraft:leather',
                        B: 'armageddon_mod:colossal_iron_ingot',
                }
        )

        event.shaped(
                Item.of('minecraft:enchanted_golden_apple'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:diamond_block',
                        B: 'minecraft:gold_block',
                        C: 'minecraft:golden_apple'
                }
        )

        event.shaped(
                Item.of('minecraft:andesite'),
                [
                        'AB ',
                        'BA ',
                        '   '
                ],
                {
                        A: 'minecraft:cobblestone',
                        B: 'minecraft:gravel'
                }
        )
});

// 1Shields Expansion
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('shieldexp:wooden_shield'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: { tag: 'minecraft:logs' },
                        B: 'minecraft:stick',
                        C: 'minecraft:copper_ingot'
                }
        )

        event.shaped(
                Item.of('minecraft:shield'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: { tag: 'minecraft:logs' },
                        C: 'armageddon_mod:colossal_iron_ingot'
                }
        )

        event.shaped(
                Item.of('shieldexp:iron_shield'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: { tag: 'minecraft:logs' },
                        C: 'minecraft:shield'
                }
        )

        event.smithing(
                'shieldexp:golden_shield',
                'armageddon_mod:gilded_ingot_smithing_template',
                'shieldexp:iron_shield',
                'armageddon_mod:gilded_plate'
        )

        event.smithing(
                'shieldexp:diamond_shield',
                'apotheosis:diamond_upgrade_smithing_template',
                'shieldexp:golden_shield',
                'minecraft:diamond'
        )
})

// 1Iron Furnaces
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('ironfurnaces:copper_furnace'),
                [
                        'AAA',
                        'ABA',
                        'ACA'
                ],
                {
                        A: { tag: 'c:ingots/copper' },
                        B: 'minecraft:furnace',
                        C: 'minecraft:copper_block'
                }
        ).id('kubejs:copper_furnace')

        event.shaped(
                Item.of('ironfurnaces:upgrade_copper'),
                [
                        'AAA',
                        'ABA',
                        'ACA'
                ],
                {
                        A: 'minecraft:copper_ingot',
                        B: { tag: 'minecraft:stone_tool_materials'},
                        C: 'minecraft:copper_block'
                }
        ).id('kubejs:upgrade_copper')

        event.shaped(
                Item.of('ironfurnaces:iron_furnace'),
                [
                        'AAA',
                        'BCB',
                        'ADA'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: { tag: 'c:glass_blocks/colorless' },
                        C: 'ironfurnaces:copper_furnace',
                        D: 'armageddon_mod:colossal_iron_ingot'
                }
        ).id('kubejs:iron_furnace')

        event.shaped(
                Item.of('ironfurnaces:iron_furnace'),
                [
                        'AAA',
                        'ABA',
                        'CDC'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: 'minecraft:furnace',
                        C: 'armageddon_mod:colossal_iron_ingot',
                        D: 'minecraft:iron_block'
                }
        ).id('kubejs:iron_furnace2')

        event.shaped(
                Item.of('ironfurnaces:upgrade_iron'),
                [
                        'AAA',
                        'ABA',
                        'CDC'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: { tag: 'minecraft:stone_tool_materials'},
                        C: 'armageddon_mod:colossal_iron_ingot',
                        D: 'minecraft:iron_block'
                }
        ).id('kubejs:upgrade_iron')

        event.shaped(
                Item.of('ironfurnaces:upgrade_iron2'),
                [
                        'AAA',
                        'BCB',
                        'ADA'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: { tag: 'c:glass_blocks/colorless' },
                        C: { tag: 'minecraft:stone_tool_materials'},
                        D: 'armageddon_mod:colossal_iron_ingot'
                }
        ).id('kubejs:upgrade_iron2')

        event.shaped(
                Item.of('ironfurnaces:gold_furnace'),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        A: 'minecraft:gold_ingot',
                        B: 'armageddon_mod:gilded_plate',
                        C: 'ironfurnaces:iron_furnace',
                        D: 'minecraft:gold_block'
                }
        ).id('kubejs:gold_furnace')

        event.shaped(
                Item.of('ironfurnaces:upgrade_gold'),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        A: 'minecraft:gold_ingot',
                        B: 'armageddon_mod:gilded_plate',
                        C: 'minecraft:iron_ingot',
                        D: 'minecraft:gold_block'
                }
        ).id('kubejs:upgrade_gold')

        event.shaped(
                Item.of('ironfurnaces:diamond_furnace'),
                [
                        'AAA',
                        'BCB',
                        'ADA'
                ],
                {
                        A: 'minecraft:diamond',
                        B: { tag: 'c:glass_blocks/colorless' },
                        C: 'ironfurnaces:gold_furnace',
                        D: 'mekanism:enriched_diamond'
                }
        ).id('kubejs:diamond_furnace')

        event.shaped(
                Item.of('ironfurnaces:upgrade_diamond'),
                [
                        'AAA',
                        'BCB',
                        'ADA'
                ],
                {
                        A: 'minecraft:diamond',
                        B: { tag: 'c:glass_blocks/colorless' },
                        C: 'minecraft:gold_ingot',
                        D: 'mekanism:enriched_diamond'
                }
        ).id('kubejs:upgrade_diamond')

        event.shaped(
                Item.of('ironfurnaces:emerald_furnace'),
                [
                        'AAA',
                        'ABA',
                        'CAC'
                ],
                {
                        A: 'minecraft:emerald',
                        B: 'ironfurnaces:diamond_furnace',
                        C: 'minecraft:emerald_block',
                }
        ).id('kubejs:emerald_furnace')

        event.shaped(
                Item.of('ironfurnaces:upgrade_emerald'),
                [
                        'AAA',
                        'ABA',
                        'CAC'
                ],
                {
                        A: 'minecraft:emerald',
                        B: 'minecraft:diamond',
                        C: 'minecraft:emerald_block',
                }
        ).id('kubejs:upgrade_emerald')
})

// 1Armageddon Mod
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('armageddon_mod:iron_remote'),
                [
                        'EDE',
                        'ABA',
                        'CAC'
                ],
                {
                        A: { tag: 'c:plates/iron' },
                        B: "ars_nouveau:source_gem",
                        C: "minecraft:copper_block",
                        D: "minecraft:lightning_rod",
                        E: "minecraft:copper_ingot"
                }
        ).id('kubejs:iron_remote')

        event.custom({
                type: 'ars_nouveau:enchanting_apparatus',
                keepNbtOfReagent: false,
                reagent: [{ item: 'minecraft:gold_block' }],          // el item que va en el centro
                pedestalItems: [                                       // hasta 8 items en los pedestales
                        { item: 'minecraft:gold_ingot' },
                        { item: 'minecraft:gold_ingot' },
                        { item: 'armageddon_mod:colossal_iron_ingot' },
                        { item: 'armageddon_mod:colossal_iron_ingot' },
                        { item: 'ars_nouveau:source_gem_block' },
                        { item: 'ars_nouveau:source_gem_block' },
                        { item: 'justdirethings:ferricore_block' },
                        { item: 'justdirethings:ferricore_block' }
                ],
                result: { count: 1, id: 'armageddon_mod:strange_coin' },
                sourceCost: 10000                                       // Source que gasta
        }).id('kubejs:strange_coin')

        // event.smithing(resultado, plantilla, base, material)
        event.smithing(
                'armageddon_mod:gilded_paxel',                                  // resultado
                'armageddon_mod:gilded_ingot_smithing_template',                // plantilla (slot izquierdo)
                'pickletweaks:golden_paxel',                                    // objeto a mejorar (slot central)
                'armageddon_mod:gilded_plate'                                   // material (slot derecho)
        )

        event.shaped(
                Item.of('armageddon_mod:emerald_totem'),
                [
                        'FBF',
                        'CDE',
                        'FBF'
                ],
                {
                        B: "minecraft:emerald_block",
                        C: "irons_spellbooks:uncommon_ink",
                        D: "minecraft:saddle",
                        E: "apotheosis:timeworn_fabric",
                        F: "armageddon_mod:gilded_plate"
                }
        )

        event.shaped(
                Item.of('armageddon_mod:builder_stone'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        A: 'mekanism:enriched_diamond',
                        B: 'minecraft:lapis_block',
                        C: 'minecraft:iron_block',
                        D: 'minecraft:emerald_block',
                        E: 'minecraft:redstone_block',
                        F: 'minecraft:gold_block'
                }
        )

        event.smithing(
                'minecraft:diamond_helmet',
                'apotheosis:diamond_upgrade_smithing_template',
                'armageddon_mod:gilded_armor_helmet',
                'minecraft:diamond'
        )

        event.smithing(
                'minecraft:diamond_chestplate',
                'apotheosis:diamond_upgrade_smithing_template',
                'armageddon_mod:gilded_armor_chestplate',
                'minecraft:diamond'
        )

        event.smithing(
                'minecraft:diamond_leggings',
                'apotheosis:diamond_upgrade_smithing_template',
                'armageddon_mod:gilded_armor_leggings',
                'minecraft:diamond'
        )

        event.smithing(
                'minecraft:diamond_boots',
                'apotheosis:diamond_upgrade_smithing_template',
                'armageddon_mod:gilded_armor_boots',
                'minecraft:diamond'
        )

        event.smithing(
                'minecraft:diamond_sword',
                'apotheosis:diamond_upgrade_smithing_template',
                'armageddon_mod:gilded_sword',
                'minecraft:diamond'
        )

        event.smithing(
                'minecraft:diamond_pickaxe',
                'apotheosis:diamond_upgrade_smithing_template',
                'armageddon_mod:gilded_pickaxe',
                'minecraft:diamond'
        )

        event.smithing(
                'minecraft:diamond_axe',
                'apotheosis:diamond_upgrade_smithing_template',
                'armageddon_mod:gilded_axe',
                'minecraft:diamond'
        )

        event.smithing(
                'minecraft:diamond_shovel',
                'apotheosis:diamond_upgrade_smithing_template',
                'armageddon_mod:gilded_shovel',
                'minecraft:diamond'
        )

        event.smithing(
                'minecraft:diamond_hoe',
                'apotheosis:diamond_upgrade_smithing_template',
                'armageddon_mod:gilded_hoe',
                'minecraft:diamond'
        )

        event.smithing(
                'pickletweaks:diamond_paxel',
                'apotheosis:diamond_upgrade_smithing_template',
                'armageddon_mod:gilded_paxel',
                'minecraft:diamond'
        )

        event.shapeless(
                Item.of('minecraft:iron_ingot', 4),
                [
                        'armageddon_mod:colossal_iron_ingot'
                ]
        )
})

// 1Ars Nouveau
ServerEvents.recipes(event => {
        event.shapeless(
                Item.of('ars_nouveau:novice_spell_book'),
                [
                        "minecraft:book",
                        "minecraft:copper_sword",
                        "minecraft:copper_pickaxe",
                        "minecraft:copper_axe",
                        "minecraft:copper_shovel"
                ]
        )

        event.shaped(
                Item.of('ars_nouveau:imbuement_chamber'),
                [
                        'ABA',
                        'B B',
                        'ABA'
                ],
                {
                        A: { tag: 'c:planks/archwood' },
                        B: "minecraft:copper_ingot",
                }
        )

        event.shaped(
                Item.of('ars_nouveau:scribes_table'),
                [
                        'AAA',
                        'B B',
                        'C C'
                ],
                {
                        A: { tag: 'c:planks/archwood' },
                        B: "minecraft:copper_ingot",
                        C: { tag: 'c:logs/archwood' }
                }
        )

        event.shaped(
                Item.of('ars_nouveau:source_jar'),
                [
                        'BEB',
                        'A A',
                        'CDC'
                ],
                {
                        A: { tag: 'c:glass_blocks' },
                        B: { tag: 'c:planks/archwood' },
                        C: "minecraft:iron_ingot",
                        D: "armageddon_mod:colossal_iron_ingot",
                        E: "ars_nouveau:source_gem_block"
                }
        )

        event.shaped(
                Item.of('ars_nouveau:enchanting_apparatus'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        A: 'minecraft:gold_nugget',
                        B: 'ars_nouveau:sourcestone',
                        C: "minecraft:gold_ingot",
                        D: "armageddon_mod:colossal_iron_ingot"
                }
        )
})

// 1Create
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('create:andesite_alloy'),
                [
                        'AB ',
                        'BA ',
                        '   '
                ],
                {
                        A: "minecraft:andesite",
                        B: "minecraft:copper_nugget",
                }
        )

        event.shaped(
                Item.of('create:mechanical_press'),
                [
                        'DAD',
                        ' B ',
                        ' C '
                ],
                {
                        A: "create:shaft",
                        B: "create:andesite_casing",
                        C: "minecraft:copper_block",
                        D: "minecraft:iron_ingot"
                }
        )
})

// 1Just Dire Things
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('justdirethings:gooblock_tier1'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        A: "minecraft:raw_iron",
                        B: "minecraft:sugar",
                        C: "minecraft:rotten_flesh",
                        D: "minecraft:raw_iron_block"
                }
        )

        event.custom({
                type: 'justdirethings:goospread',
                id: 'kubejs:goospread_slime_block',
                craftingDuration: 1200,
                input: { Name: 'minecraft:green_wool' },
                output: { Name: 'minecraft:slime_block' },
                tierRequirement: 1
        }).id('kubejs:goospread_slime_block')
})

// 1Iron's Spellbooks
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('irons_spellbooks:alchemist_cauldron'),
                [
                        'A A',
                        'ADA',
                        'CBC'
                ],
                {
                        A: "minecraft:iron_ingot",
                        B: "armageddon_mod:gilded_plate",
                        C: "ars_nouveau:source_gem_block",
                        D: "minecraft:cauldron"
                }
        )

        event.custom({
                type: 'irons_spellbooks:alchemist_cauldron_brew',
                base_fluid: { amount: 250, id: 'minecraft:water' },
                input: { item: 'minecraft:glow_ink_sac' },
                results: [{ amount: 250, id: 'irons_spellbooks:timeless_slurry' }]
        })

        event.custom({
                type: 'irons_spellbooks:alchemist_cauldron_brew',
                base_fluid: { amount: 250, id: 'irons_spellbooks:timeless_slurry' },
                input: { item: 'apotheosis:mysterious_scrap_metal' },
                results: [{ amount: 250, id: 'irons_spellbooks:common_ink' }]
        })

        event.custom({
                type: 'irons_spellbooks:alchemist_cauldron_brew',
                base_fluid: { amount: 1000, id: 'irons_spellbooks:common_ink' },
                input: { item: 'minecraft:poisonous_potato' },
                results: [{ amount: 250, id: 'irons_spellbooks:uncommon_ink' }]
        })

        event.custom({
                type: 'irons_spellbooks:alchemist_cauldron_brew',
                base_fluid: { amount: 1000, id: 'irons_spellbooks:uncommon_ink' },
                input: { item: 'minecraft:diamond' },
                results: [{ amount: 250, id: 'irons_spellbooks:rare_ink' }]
        })

        event.custom({
                type: 'irons_spellbooks:alchemist_cauldron_brew',
                base_fluid: { amount: 1000, id: 'irons_spellbooks:rare_ink' },
                input: { item: 'hostilenetworks:end_prediction' },
                results: [{ amount: 250, id: 'irons_spellbooks:epic_ink' }]
        })

        event.custom({
                type: 'irons_spellbooks:alchemist_cauldron_brew',
                base_fluid: { amount: 1000, id: 'irons_spellbooks:epic_ink' },
                input: { item: 'apotheosis:godforged_pearl' },
                results: [{ amount: 250, id: 'irons_spellbooks:legendary_ink' }]
        })

        event.shaped(
                Item.of('irons_spellbooks:arcane_essence', 8),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        A: 'irons_spellbooks:arcane_essence',
                        B: 'irons_spellbooks:blood_vial',
                        C: 'irons_spellbooks:divine_pearl',
                        D: 'irons_spellbooks:uncommon_ink'
                }
        ).id('kubejs:arcane_essence')

        event.shaped(
                Item.of('irons_spellbooks:scroll_forge'),
                [
                        'AAA',
                        ' B ',
                        'BCB'
                ],
                {
                        A: 'minecraft:polished_deepslate',
                        B: 'minecraft:obsidian',
                        C: 'minecraft:crying_obsidian'
                }
        ).id('kubejs:scroll_forge')

        event.shaped(
                Item.of('irons_spellbooks:iron_spell_book'),
                [
                        'ABB',
                        'CDD',
                        'ABB'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: 'minecraft:leather',
                        C: 'armageddon_mod:colossal_iron_ingot',
                        D: 'minecraft:paper'
                }
        ).id('kubejs:iron_spell_book')

        event.shaped(
                Item.of('irons_spellbooks:graybeard_staff'),
                [
                        ' AA',
                        ' BA',
                        'C  '
                ],
                {
                        A: 'irons_spellbooks:arcane_essence',
                        B: 'minecraft:wooden_shovel',
                        C: 'armageddon_mod:colossal_iron_ingot'
                }
        )
})

// 1Apotheosis
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('apotheosis:salvaging_table'),
                [
                        'ABA',
                        'CDE',
                        'FGF'
                ],
                {
                        A: 'armageddon_mod:colossal_iron_ingot',
                        B: "armageddon_mod:gilded_plate",
                        C: "minecraft:golden_pickaxe",
                        D: "minecraft:smithing_table",
                        E: "minecraft:golden_axe",
                        F: "apotheosis:gem_dust",
                        G: "minecraft:lava_bucket"
                }
        ).id('kubejs:salvaging_table')
})

// 1Cataclysm
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('cataclysm:monstrous_eye'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        A: "irons_spellbooks:cinder_essence",
                        B: "justdirethings:totem_of_death_recall",
                        C: "minecraft:netherite_scrap",
                        D: "minecraft:ender_eye",
                        E: "create:brass_ingot"
                }
        ).id('kubejs:monstrous_eye')

        event.shaped(
                Item.of('cataclysm:abyssal_sacrifice'),
                [
                        'ABC',
                        'DEF',
                        'GHI'
                ],
                {
                        A: 'minecraft:nautilus_shell',
                        B: 'armageddon_mod:ancient_prism',
                        C: 'cataclysm:crystallized_coral',
                        D: 'minecraft:diamond_block',
                        E: 'neovitae:blood_orb_apprentice',
                        F: 'minecraft:emerald_block',
                        G: 'minecraft:iron_block',
                        H: 'block_factorys_bosses:kraken_tooth',
                        I: 'minecraft:gold_block'
                }
        ).id('kubejs:abyssal_sacrifice')

        event.shaped(
                Item.of('cataclysm:abyssal_sacrifice'),
                [
                        'ABC',
                        'DEF',
                        'GHI'
                ],
                {
                        A: 'minecraft:nautilus_shell',
                        B: 'armageddon_mod:ancient_prism',
                        C: 'cataclysm:coral_chunk',
                        D: 'minecraft:diamond_block',
                        E: 'neovitae:blood_orb_apprentice',
                        F: 'minecraft:emerald_block',
                        G: 'minecraft:iron_block',
                        H: 'block_factorys_bosses:kraken_tooth',
                        I: 'minecraft:gold_block'
                }
        ).id('kubejs:abyssal_sacrifice2')

        event.shaped(
                Item.of('cataclysm:abyss_eye'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        A: "minecraft:crying_obsidian",
                        B: "armageddon_mod:ancient_prism",
                        C: "block_factorys_bosses:kraken_tooth",
                        D: "minecraft:ender_eye"
                }
        ).id('kubejs:abyss_eye')
})

// 1Compasses
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('explorerscompass:explorerscompass'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'cataclysm:lava_power_cell',
                        B: 'mekanism:ingot_steel',
                        C: 'minecraft:compass'
                }
        ).id('kubejs:explorerscompass')
})

// 1Tom's Simple Storage
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('toms_storage:inventory_connector'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        A: 'toms_storage:trim',
                        B: 'minecraft:redstone_block',
                        C: 'toms_storage:inventory_cable',
                        D: 'armageddon_mod:colossal_iron_ingot',
                        E: { tag: 'c:chests' }
                }
        ).id('kubejs:inventory_connector')

        event.shaped(
                Item.of('toms_storage:storage_terminal'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'toms_storage:trim',
                        B: { tag: 'c:chests' },
                        C: 'minecraft:iron_block'
                }
        ).id('kubejs:storage_terminal')

        event.shaped(
                Item.of('toms_storage:crafting_terminal'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:crafting_table',
                        B: 'armageddon_mod:colossal_iron_ingot',
                        C: 'toms_storage:storage_terminal'
                }
        ).id('kubejs:crafting_terminal')

        event.shaped(
                Item.of('toms_storage:inventory_cable_framed'),
                [
                        ' A ',
                        ' B ',
                        '   '
                ],
                {
                        A: 'minecraft:stick',
                        B: 'toms_storage:inventory_cable',
                }
        ).id('kubejs:inventory_cable_framed')

        event.shaped(
                Item.of('toms_storage:paint_kit'),
                [
                        '  A',
                        ' B ',
                        'C  '
                ],
                {
                        A: 'minecraft:brush',
                        B: 'minecraft:bucket',
                        C: 'minecraft:stick'
                }
        ).id('kubejs:paint_kit')
})

// 1Farming for blockheads
ServerEvents.recipes(event => {

        // Quita una oferta según el item que vende
        function quitarDelMarket(item) {
                if (!item) {
                        console.error('[Market] quitarDelMarket sin item')
                } else {
                        event.remove({ type: 'farmingforblockheads:market', output: item })
                }
        }

        // Añade una oferta. Si pasas pago y cantidad, tiene precio propio;
        // si no, usa el precio del preset.
        function venderEnMarket(item, categoria, preset, pagoItem, pagoCantidad) {
                if (!item || !categoria || !preset) {
                console.error('[Market] faltan datos para ' + item)
                } else {
                let receta = {
                        type: 'farmingforblockheads:market',
                        category: 'farmingforblockheads:' + categoria,
                        preset: preset,
                        result: { item: item, count: 1 }
                }
                if (!pagoItem) {
                        // sin precio propio: usa el del preset
                } else {
                        if (!(pagoCantidad > 0)) {
                        console.error('[Market] cantidad de pago invalida para ' + item)
                        } else {
                        receta.payment = { ingredient: { item: pagoItem }, count: pagoCantidad }
                        }
                }
                event.custom(receta)
                }
        }

        // Ejemplo: cambiar el precio de una oferta que ya existe = quitarla y volverla a añadir
        // quitarDelMarket('minecraft:cherry_sapling')
        // venderEnMarket('minecraft:cherry_sapling', 'saplings', 'minecraft:saplings', 'minecraft:emerald', 5)

        // Ejemplo: quitar una oferta
        quitarDelMarket('ars_nouveau:magebloom_crop')

        // Ejemplo: vender algo nuevo al precio de su preset
        venderEnMarket('minecraft:pale_oak_sapling', 'saplings', 'minecraft:saplings', 'minecraft:emerald', 1)
        venderEnMarket('minecraft:poplar_sapling', 'saplings', 'minecraft:saplings', 'minecraft:emerald', 1)
        venderEnMarket('minecraft:mangrove_propagule', 'saplings', 'minecraft:saplings', 'minecraft:emerald', 1)

        venderEnMarket('minecraft:potato', 'seeds', 'minecraft:seeds', 'minecraft:emerald', 1)
        venderEnMarket('minecraft:carrot', 'seeds', 'minecraft:seeds', 'minecraft:emerald', 1)
        venderEnMarket('minecraft:sweet_berries', 'seeds', 'minecraft:seeds', 'minecraft:emerald', 1)
        venderEnMarket('minecraft:sugar_cane', 'seeds', 'minecraft:seeds', 'minecraft:emerald', 1)
        venderEnMarket('minecraft:cactus', 'seeds', 'minecraft:seeds', 'minecraft:emerald', 1)
        venderEnMarket('minecraft:bamboo', 'seeds', 'minecraft:seeds', 'minecraft:emerald', 1)
        venderEnMarket('minecraft:kelp', 'seeds', 'minecraft:seeds', 'minecraft:emerald', 1)
        venderEnMarket('farmersdelight:rice', 'seeds', 'minecraft:seeds', 'minecraft:emerald', 1)
        venderEnMarket('farmersdelight:onion', 'seeds', 'minecraft:seeds', 'minecraft:emerald', 1)
        venderEnMarket('ars_nouveau:sourceberry_bush', 'seeds', 'minecraft:seeds', 'minecraft:emerald', 1)
})

// 1Disenchanting Table
ServerEvents.recipes(event => {
        event.shaped(
                Item.of('disenchanting_table:disenchanting_table'),
                [
                        ' A ',
                        'BCB',
                        'DED'
                ],
                {
                        A: 'minecraft:book',
                        B: 'apotheosis:luminous_crystal_shard',
                        C: 'minecraft:enchanting_table',
                        D: 'allthecompressed:obsidian_1x',
                        E: 'minecraft:anvil'
                }
        ).id('kubejs:disenchanting_table')
})

// 1Pickle Tweaks
// Paxels
ServerEvents.recipes(event => {
        // paxel -> herramientas del mismo material
        const PAXELS = {
                'pickletweaks:wooden_paxel':  ['minecraft:wooden_axe',  'minecraft:wooden_pickaxe',  'minecraft:wooden_shovel'],
                'pickletweaks:stone_paxel':   ['minecraft:stone_axe',   'minecraft:stone_pickaxe',   'minecraft:stone_shovel'],
                'pickletweaks:iron_paxel':    ['minecraft:iron_axe',    'minecraft:iron_pickaxe',    'minecraft:iron_shovel'],
                'pickletweaks:golden_paxel':  ['minecraft:golden_axe',  'minecraft:golden_pickaxe',  'minecraft:golden_shovel'],
                'pickletweaks:emerald_paxel': ['pickletweaks:emerald_axe', 'pickletweaks:emerald_pickaxe', 'pickletweaks:emerald_shovel'],
                'armageddon_mod:gilded_paxel': ['armageddon_mod:gilded_axe', 'armageddon_mod:gilded_pickaxe', 'armageddon_mod:gilded_shovel']
        }

        // Las 6 formas de ordenar 3 herramientas
        const ORDENES = [[0, 1, 2], [0, 2, 1], [1, 0, 2], [1, 2, 0], [2, 0, 1], [2, 1, 0]]

        Object.keys(PAXELS).forEach(paxel => {
                let herramientas = PAXELS[paxel]
                let faltantes = [paxel].concat(herramientas).filter(id => !Item.exists(id))
                if (faltantes.length > 0) {
                        console.error('[PAXEL] no existen: ' + faltantes.join(', ') + ' -> no se cambia ' + paxel)
                } else {
                        event.remove({ output: paxel, input: 'minecraft:stick' })
                        ORDENES.forEach(orden => {
                                event.shaped(paxel,
                                [
                                        'ABC',
                                        ' S ',
                                        ' S '
                                ],
                                {
                                        A: herramientas[orden[0]],
                                        B: herramientas[orden[1]],
                                        C: herramientas[orden[2]],
                                        S: 'minecraft:stick'
                                }
                                ).id('kubejs:paxel/' + paxel.split(':')[1] + '_' + orden.join(''))
                        })
                }
        })
})

// 1Simply Swords
ServerEvents.recipes(event => {
        event.smithing(
                'simplyswords:diamond_longsword',                               // output
                'apotheosis:diamond_upgrade_smithing_template',                 // template
                'simplyswords:gold_longsword',                                  // base
                'minecraft:diamond'                                             // material
        )

        event.smithing(
                'simplyswords:diamond_twinblade',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_twinblade',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_rapier',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_rapier',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_katana',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_katana',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_sai',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_sai',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_spear',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_spear',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_glaive',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_glaive',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_warglaive',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_warglaive',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_cutlass',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_cutlass',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_claymore',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_claymore',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_greathammer',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_greathammer',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_greataxe',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_greataxe',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_chakram',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_chakram',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_scythe',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_scythe',                            
                'minecraft:diamond'                                     
        )

        event.smithing(
                'simplyswords:diamond_halberd',                               
                'apotheosis:diamond_upgrade_smithing_template',         
                'simplyswords:gold_halberd',                            
                'minecraft:diamond'                                     
        )
})

// 1Ore Hammer
ServerEvents.recipes(event => {
        // Ore Hammer
        event.shaped(
                Item.of('ore_hammer:crushing_hammer'),
                [
                        ' AA',
                        ' BA',
                        'B  '
                ],
                {
                        A: "minecraft:copper_block",
                        B: "minecraft:stick"
                }
        ).id('kubejs:ore_hammer')


        // Coal Dust
        event.shapeless(
                Item.of('mekanism:dust_coal'),
                [
                        'minecraft:coal',
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_coal', 4),
                [
                        { tag: 'c:ores/coal' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Charcoal dust
        event.shapeless(
                Item.of('mekanism:dust_charcoal'),
                [
                        'minecraft:charcoal',
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Copper Dust
        event.shapeless(
                Item.of('mekanism:dust_copper'),
                [
                        { tag: 'c:ingots/copper' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_copper', 2),
                [
                        { tag: 'c:raw_materials/copper' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_copper', 4),
                [
                        { tag: 'c:ores/copper' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Zinc Dust
        event.shapeless(
                Item.of('ore_hammer:zinc_dust', 2),
                [
                        { tag: 'c:raw_materials/zinc' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('ore_hammer:zinc_dust', 4),
                [
                        { tag: 'c:ores/zinc' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Iron Dust
        event.shapeless(
                Item.of('mekanism:dust_iron'),
                [
                        { tag: 'c:ingots/iron' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_iron', 2),
                [
                        { tag: 'c:raw_materials/iron' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_iron', 4),
                [
                        { tag: 'c:ores/iron' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Gold Dust
        event.shapeless(
                Item.of('mekanism:dust_gold'),
                [
                        { tag: 'c:ingots/gold' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_gold', 2),
                [
                        { tag: 'c:raw_materials/gold' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_gold', 4),
                [
                        { tag: 'c:ores/gold' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Redstone
        event.shapeless(
                Item.of('minecraft:redstone', 8),
                [
                        { tag: 'c:ores/redstone' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Emerald Dust
        event.shapeless(
                Item.of('mekanism:dust_emerald', 1),
                [
                        { tag: 'c:gems/emerald' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_emerald', 4),
                [
                        { tag: 'c:ores/emerald' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Lapislazuli Dust
        event.shapeless(
                Item.of('mekanism:dust_lapis_lazuli', 1),
                [
                        { tag: 'c:gems/lapis' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_lapis_lazuli', 8),
                [
                        { tag: 'c:ores/lapis' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Diamond Dust
        event.shapeless(
                Item.of('mekanism:dust_diamond', 1),
                [
                        { tag: 'c:gems/diamond' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_diamond', 4),
                [
                        { tag: 'c:ores/diamond' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Quartz Dust
        event.shapeless(
                Item.of('mekanism:dust_quartz', 1),
                [
                        { tag: 'c:gems/quartz' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_quartz', 8),
                [
                        { tag: 'c:ores/quartz' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Ancient Debris
        event.shapeless(
                Item.of('minecraft:netherite_scrap', 2),
                [
                        { tag: 'c:ores/netherite_scrap' },
                        'minecraft:blaze_powder',
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Tin Dust
        event.shapeless(
                Item.of('mekanism:dust_tin'),
                [
                        { tag: 'c:ingots/tin' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_tin', 2),
                [
                        { tag: 'c:raw_materials/tin' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_tin', 4),
                [
                        { tag: 'c:ores/tin' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Osmium Dust
        event.shapeless(
                Item.of('mekanism:dust_osmium'),
                [
                        { tag: 'c:ingots/osmium' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_osmium', 2),
                [
                        { tag: 'c:raw_materials/osmium' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_osmium', 4),
                [
                        { tag: 'c:ores/osmium' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Uranium Dust
        event.shapeless(
                Item.of('mekanism:dust_uranium'),
                [
                        { tag: 'c:ingots/uranium' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_uranium', 2),
                [
                        { tag: 'c:raw_materials/uranium' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_uranium', 4),
                [
                        { tag: 'c:ores/uranium' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Lead Dust
        event.shapeless(
                Item.of('mekanism:dust_lead'),
                [
                        { tag: 'c:ingots/lead' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_lead', 2),
                [
                        { tag: 'c:raw_materials/lead' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)

        event.shapeless(
                Item.of('mekanism:dust_lead', 4),
                [
                        { tag: 'c:ores/lead' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)


        // Raw Mithril
        event.shapeless(
                Item.of('irons_spellbooks:raw_mithril', 2),
                [
                        { tag: 'c:ores/mithril' },
                        'ore_hammer:crushing_hammer'
                ]
        ).damageIngredient('ore_hammer:crushing_hammer', 1)
})