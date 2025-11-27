ServerEvents.recipes((allthemods) => {
  //Remove the anchor
  allthemods.remove({ id: "mekanism:upgrade/anchor" })

  // remove combiner recipes for ores
  allthemods.remove({ type: "mekanism:combining", id: /ore/ })

  // kubejs/server_scripts/crushing.js

  const inputs = ["deepslate", "cobbled_deepslate", "end_stone", "blackstone", "sand", "netherrack"]

  const outputs = [
    "crushed_deepslate",
    "crushed_deepslate",
    "crushed_end_stone",
    "crushed_blackstone",
    "dust",
    "crushed_netherrack"
  ]

  inputs.forEach((input, index) => {
    allthemods
      .custom({
        type: "mekanism:crushing",
        input: Ingredient.of(`minecraft:${input}`).toJson(),
        output: {
          id: `exdeorum:${outputs[index]}`,
          count: 1
        }
      })
      .id(`kubejs:mekanism/crushing/${outputs[index]}_from_${input}`)

    for (let i = 1; i < 10; i++) {
      allthemods
        .custom({
          type: "mekanism:crushing",
          input: Ingredient.of(`allthecompressed:${input}_${i}x`).toJson(),
          output: {
            id: `allthecompressed:${outputs[index]}_${i}x`,
            count: 1
          }
        })
        .id(`kubejs:mekanism/crushing/compressed/${outputs[index]}_${i}x_from_${input}`)
    }
  })

  allthemods
    .custom({
      type: "mekanism:crushing",
      input: {
        item: "geore:coal_shard"
      },
      output: {
        id: "mekanism:dust_coal",
        count: 1
      }
    })
    .id("allthemods:mekanism/crushing/coal_dust_from_shard")

  // Fluorite dupe recipe fix
  allthemods.remove({ id: "alltheores:processing/fluorite/dust/from_ore" })
})
