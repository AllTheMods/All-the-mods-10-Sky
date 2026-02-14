LootJS.modifiers((allthemods) => {
  const materials = [
    "coal",
    "lapis",
    "copper",
    "iron",
    "gold",
    "redstone",
    "diamond",
    "emerald",
    "platinum",
    "ancient_debris",
    "quartz",
    "tin",
    "uraninite",
    "uranium",
    "zinc",
    "nickel",
    "ruby",
    "topaz",
    "sapphire",
    "silver",
    "black_quartz",
    "lead",
    "aluminum",
    "osmium",
    "allthemodium",
    "vibranium",
    "unobtainium"
  ]

  for (const resource of materials) {
    allthemods.addBlockModifier(`geore:small_${resource}_bud`).addLoot(LootEntry.of("exdeorum:stone_pebble"))
    allthemods.addBlockModifier(`geore:medium_${resource}_bud`).addLoot(LootEntry.of("exdeorum:stone_pebble"))
    allthemods.addBlockModifier(`geore:large_${resource}_bud`).addLoot(LootEntry.of("exdeorum:stone_pebble"))
  }
})
