ServerEvents.recipes(allthemods => {
  //Remove the anchor
  allthemods.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  allthemods.remove({ type: 'mekanism:combining', id: /ore/ })

  // kubejs/server_scripts/crushing.js

  const inputs = [
    '#c:deepslate_blocks',
    'minecraft:end_stone',
    'minecraft:blackstone',
    'minecraft:sand',
    'minecraft:netherrack'
  ]

  const outputs = [
    'exdeorum:crushed_deepslate',
    'exdeorum:crushed_end_stone',
    'exdeorum:crushed_blackstone',
    'exdeorum:dust',
    'exdeorum:crushed_netherrack'
  ]

    inputs.forEach((input, index) => {
      allthemods.custom({
        type: 'mekanism:crushing',
        input: Ingredient.of(input).toJson(),
        output: {
          id: outputs[index],
          count: 1
        }
      }).id(`kubejs:mekanism/crushing/${outputs[index].split(':')[1]}`)
    })

    allthemods.custom({
      type: 'mekanism:crushing',
      input: {
        item: 'geore:coal_shard'
      },
      output: {
        id: 'mekanism:dust_coal',
        count: 1
      }
    }).id('allthemods:mekanism/crushing/coal_dust_from_shard')
})
