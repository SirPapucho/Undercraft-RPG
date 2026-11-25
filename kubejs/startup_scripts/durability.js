// Simply Swords & Shield
ItemEvents.modification(event => {
    // item -> durabilidad nueva
    const simplySwords = {
        'simplyswords:gold_longsword': 525,
        'simplyswords:gold_twinblade': 525,
        'simplyswords:gold_rapier': 525,
        'simplyswords:gold_katana': 525,
        'simplyswords:gold_sai': 525,
        'simplyswords:gold_spear': 525,
        'simplyswords:gold_glaive': 525,
        'simplyswords:gold_warglaive': 525,
        'simplyswords:gold_cutlass': 525,
        'simplyswords:gold_claymore': 525,
        'simplyswords:gold_greathammer': 525,
        'simplyswords:gold_greataxe': 525,
        'simplyswords:gold_chakram': 525,
        'simplyswords:gold_scythe': 525,
        'simplyswords:gold_halberd': 525,

        'shieldexp:wooden_shield': 89,
        'minecraft:shield': 225,
        'shieldexp:iron_shield': 375,
        'shieldexp:golden_shield': 525,
        'shieldexp:diamond_shield': 1050,
        'shieldexp:netherite_shield': 2250
    }

    Object.keys(simplySwords).forEach(id => {
        event.modify(id, item => {
            item.maxDamage = simplySwords[id]
        })
    })
})

// Minecraft Iron Tools
ItemEvents.modification(event => {
    // item -> durabilidad nueva
    const ironArmorAndTools = {
        'minecraft:iron_helmet': 248,
        'minecraft:iron_chestplate': 353,
        'minecraft:iron_leggings': 338,
        'minecraft:iron_boots': 293,

        'minecraft:iron_sword': 375,
        'minecraft:iron_pickaxe': 375,
        'minecraft:iron_axe': 375,
        'minecraft:iron_shovel': 375,
        'minecraft:iron_hoe': 375
    }

    Object.keys(ironArmorAndTools).forEach(id => {
        event.modify(id, item => {
            item.maxDamage = ironArmorAndTools[id]
        })
    })
})

// Minecraft Gold Tools
ItemEvents.modification(event => {
    // item -> durabilidad nueva
    const goldArmorAndTools = {
        'minecraft:golden_helmet': 285,
        'minecraft:golden_chestplate': 413,
        'minecraft:golden_leggings': 390,
        'minecraft:golden_boots': 338,

        'minecraft:golden_sword': 525,
        'minecraft:golden_pickaxe': 525,
        'minecraft:golden_axe': 525,
        'minecraft:golden_shovel': 525,
        'minecraft:golden_hoe': 525,
        'minecraft:golden_spear': 525
    }

    Object.keys(goldArmorAndTools).forEach(id => {
        event.modify(id, item => {
            item.maxDamage = goldArmorAndTools[id]
        })
    })
})

// Armageddon Armor & Tools
ItemEvents.modification(event => {
    // item -> durabilidad nueva
    const gildedArmorAndTools = {
        'armageddon_mod:gilded_armor_helmet': 310,
        'armageddon_mod:gilded_armor_chestplate': 518,
        'armageddon_mod:gilded_armor_leggings': 488,
        'armageddon_mod:gilded_armor_boots': 428,

        'armageddon_mod:gilded_sword': 825,
        'armageddon_mod:gilded_pickaxe': 825,
        'armageddon_mod:gilded_axe': 825,
        'armageddon_mod:gilded_shovel': 825,
        'armageddon_mod:gilded_hoe': 825,

        'armageddon_mod:iron_pike': 375,
        'armageddon_mod:golden_pike': 525,
        'armageddon_mod:gilded_pike': 825,
        'armageddon_mod:emerald_pike': 900,

        'armageddon_mod:gilded_paxel': 1375
    }

    Object.keys(gildedArmorAndTools).forEach(id => {
        event.modify(id, item => {
            item.maxDamage = gildedArmorAndTools[id]
        })
    })
})

// Pickle Tweaks Armor & Tools
ItemEvents.modification(event => {
    // item -> durabilidad nueva
    const paxels = {
        'pickletweaks:emerald_helmet': 450,
        'pickletweaks:emerald_chestplate': 645,
        'pickletweaks:emerald_leggings': 608,
        'pickletweaks:emerald_boots': 525,

        'pickletweaks:emerald_sword': 900,
        'pickletweaks:emerald_pickaxe': 900,
        'pickletweaks:emerald_axe': 900,
        'pickletweaks:emerald_shovel': 900,
        'pickletweaks:emerald_hoe': 900,

        'pickletweaks:wooden_paxel': 147,
        'pickletweaks:stone_paxel': 327,
        'pickletweaks:iron_paxel': 625,
        'pickletweaks:golden_paxel': 875,
        'pickletweaks:emerald_paxel': 2250,
        'pickletweaks:diamond_paxel': 3902,
        'pickletweaks:netherite_paxel': 5077,

        'pickletweaks:iron_scythe': 375,
        'pickletweaks:iron_sickle': 375,

        'pickletweaks:golden_scythe': 525,
        'pickletweaks:golden_sickle': 525,

        'pickletweaks:emerald_sickle': 900,
        'pickletweaks:emerald_scythe': 900,
    }

    Object.keys(paxels).forEach(id => {
        event.modify(id, item => {
            item.maxDamage = paxels[id]
        })
    })
})

// Minecraft Diamond Armor & Tools
ItemEvents.modification(event => {
    // item -> durabilidad nueva
    const diamondArmorAndTools = {
        'minecraft:diamond_helmet': 545,
        'minecraft:diamond_chestplate': 792,
        'minecraft:diamond_leggings': 743,
        'minecraft:diamond_boots': 674,
    }

    Object.keys(diamondArmorAndTools).forEach(id => {
        event.modify(id, item => {
            item.maxDamage = diamondArmorAndTools[id]
        })
    })
})

// Ore Hammer
ItemEvents.modification(event => {
    // item -> durabilidad nueva
    const oreHammer = {
        'ore_hammer:crushing_hammer': 192
    }

    Object.keys(oreHammer).forEach(id => {
        event.modify(id, item => {
            item.maxDamage = oreHammer[id]
        })
    })
})

// Unbreakable Items
ItemEvents.modification(event => {
    const irrompibles = ['usefulslime:slime_sling', 'usefulslime:slime_boots']

    irrompibles.forEach(id => {
        if (!Item.exists(id)) {
            console.error('[DUR] no existe el ítem ' + id + ', revisa el ID')
        } else {
            event.modify(id, item => {
                item.setUnbreakable()
            })
        }
    })
})