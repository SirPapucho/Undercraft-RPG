// kubejs/server_scripts/oro_minado.js
ServerEvents.tags('block', event => {
    // Oro mina igual que el hierro: solo falla con lo que exige diamante
    event.removeAll('minecraft:incorrect_for_gold_tool')
    event.add('minecraft:incorrect_for_gold_tool', '#minecraft:needs_diamond_tool')
})