// Corre al generarse el loot, así que también limpia lo que meta Loot Integrations.

const ITEMS_BLOQUEADOS = [
    "sophisticatedbackpacks:diamond_backpack",
    "sophisticatedbackpacks:netherite_backpack",
    // agrega más aquí, uno por línea, con coma al final
];

// LootJS.modifiers((event) => {
//     event
//         .addTableModifier(/^(?!armageddon_mod:).*/)
//         .removeLoot("@armageddon_mod");
// });

// LootJS.modifiers((event) => {
//     event
//         .addTableModifier(/^(?!armageddon_mod:).*/)
//         .removeLoot(ITEMS_BLOQUEADOS);
// });

// Eliminar artefacts y relics de loot
// const MODS_SIN_LOOT = ['artifacts', 'relics', 'reliquified_artifacts', 'reliquified_ars_nouveau']

// function itemDeModBloqueado(itemStack) {
//     let idCompleto = String(itemStack.id)
//     let partes = idCompleto.split(':')
//     if (partes.length < 2) {
//         return false
//     } else {
//         return MODS_SIN_LOOT.indexOf(partes[0]) >= 0
//     }
// }

// LootJS.modifiers(event => {
//     // 1) Quita los modificadores globales de loot que esos mods registran (si existen)
//     event.removeGlobalModifiers(/^(artifacts|relics|reliquified_artifacts|reliquified_ars_nouveau):.*/)

//     // 2) Quita cualquier item de esos mods que aun aparezca en cualquier loot table
//     event.addTableModifier(/.*/).removeLoot(ItemFilter.custom(item => itemDeModBloqueado(item)))
// })