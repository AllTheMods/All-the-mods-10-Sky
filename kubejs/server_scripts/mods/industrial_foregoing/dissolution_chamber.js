// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  function dissolution_chamber(output, inputs, fluid, time, id) {
    let recipe = {
      type: "industrialforegoing:dissolution_chamber",
      input: [],
      inputFluid: {
        amount: fluid.amount || 100,
        fluid: fluid.fluid
      },
      output: {
        count: output.count || 1,
        id: output.item
      },
      processingTime: time
    }

    inputs.forEach((input) => {
      let ingredients = {}

      if (input.tag) {
        ingredients.tag = input.tag
      } else {
        ingredients.item = input.item
      }

      recipe.input.push(ingredients)
    })

    allthemods.custom(recipe).id(`kubejs:dissolution_chamber/${id}`)
  }
  function dissolution_chamber_fluidtag(output, inputs, fluid, time, id) {
    let recipe = {
      type: "industrialforegoing:dissolution_chamber",
      input: [],
      inputFluid: {
        amount: fluid.amount || 100,
        tag: fluid.fluid
      },
      output: {
        count: output.count || 1,
        id: output.item
      },
      processingTime: time
    }

    inputs.forEach((input) => {
      let ingredients = {}

      if (input.tag) {
        ingredients.tag = input.tag
      } else {
        ingredients.item = input.item
      }

      recipe.input.push(ingredients)
    })

    allthemods.custom(recipe).id(`kubejs:dissolution_chamber/${id}`)
  }

  allthemods.remove({ id: "industrialforegoing:dissolution_chamber/xp_bottles" })
  dissolution_chamber_fluidtag(
    { item: "minecraft:experience_bottle" },
    [{ item: "minecraft:glass_bottle" }],
    {
      fluid: "c:experience",
      amount: 250
    },
    5,
    "xp_bottle"
  )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
