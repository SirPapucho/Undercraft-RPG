// kubejs/server_scripts/nerf_loot.js
LootJS.modifiers(event => {
    const quitarSalvo = (modid, probabilidadQuedar) =>
        ItemFilter.custom(item => item.id.startsWith(modid + ":") && Math.random() >= probabilidadQuedar)

    event.addTableModifier(LootType.CHEST)
        .removeLoot(
            ItemFilter.anyOf(
                quitarSalvo("irons_spellbooks", 0.5),
                quitarSalvo("armageddon_mod", 0.2),
                quitarSalvo("sophisticatedbackpacks", 0.4),
                quitarSalvo("artifacts", 0.08),
                quitarSalvo("relics", 0.08),
                quitarSalvo("reliquified_ars_nouveau", 0.08),
                // Apotheosis: filtro correcto, usando hasComponent como constructor de ItemFilter
                ItemFilter.allOf(
                    ItemFilter.hasComponent("apotheosis:affixes"),
                    ItemFilter.custom(() => Math.random() < 0.25)
                )
            )
        )
})