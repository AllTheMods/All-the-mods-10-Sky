// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  allthemods.custom({
    type: "enderio:vat_fermenting",
    input: {
      amount: 1000,
      tag: "minecraft:lava"
    },
    left_reagent: "exdeorum:compressed/soul_sand",
    output: {
      amount: 100,
      id: "allthemodium:soul_lava"
    },
    right_reagent: "allthemods:tendrils/warden",
    ticks: 200
  })
  // Suspicious Seed Recipe
  allthemods
    .custom({
      type: "enderio:fire_crafting",
      base_blocks: ["allthecompressed:obsidian_1x", "minecraft:bedrock"],
      dimensions: ["minecraft:overworld"],
      results: [
        {
          chance: 0.8,
          max_count: 3,
          min_count: 1,
          result: {
            count: 1,
            id: "enderio:grains_of_infinity"
          }
        },
        {
          chance: 0.3,
          max_count: 1,
          min_count: 1,
          result: {
            count: 1,
            id: "enderio:suspicious_seed"
          }
        }
      ]
    })
    .id("enderio:fire_crafting/bedrock_infinity")
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
