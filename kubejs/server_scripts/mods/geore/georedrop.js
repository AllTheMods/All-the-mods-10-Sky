ServerEvents.generateData("after_mods", (allthemods) => {
  for (let id of [
    "iron",
    "gold",
    "copper",
    "zinc",
    "uranium",
    "tin",
    "silver",
    "platinum",
    "osmium",
    "aluminum",
    "lead",
    "nickel",
    "coal",
    "diamond",
    "emerald",
    "lapis",
    "quartz",
    "redstone",
    "ancient_debris",
    "sapphire",
    "ruby",
    "topaz",
    "uraninite",
    "black_quartz",
    "allthemodium",
    "vibranium",
    "unobtainium"
  ]) {
    allthemods.json(`geore:loot_table/blocks/budding_${id}.json`, {
      type: "minecraft:block",
      pools: [
        {
          bonus_rolls: 0.0,
          conditions: [
            {
              condition: "minecraft:survives_explosion"
            }
          ],
          entries: [
            {
              type: "minecraft:item",
              name: "geore:budding_" + id
            }
          ],
          rolls: 1.0
        }
      ],
      random_sequence: "geore:blocks/budding_" + id
    })
  }
})
