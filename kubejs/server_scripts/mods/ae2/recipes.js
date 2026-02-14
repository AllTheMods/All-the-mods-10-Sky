// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $DyeColor = Java.tryLoadClass("net.minecraft.world.item.DyeColor")

ServerEvents.recipes((allthemods) => {
  /**
   * @readonly
   * @enum {string}
   */

  const Press = {
    SILICON: "ae2:silicon_press",
    CALCULATION: "ae2:calculation_processor_press",
    ENGINEERING: "ae2:engineering_processor_press",
    LOGIC: "ae2:logic_processor_press",
    QUANTUM: "advanced_ae:quantum_processor_press"
  }

  function press(input, output) {
    allthemods.recipes.ae2.inscriber(input, output, "press").id(`allthemods:ae2/inscriber/${output.split(":")[1]}`)
  }

  press({ top: "#c:dusts/sky_stone", middle: "#c:silicon", bottom: "#c:plates/iron" }, Press.SILICON)
  press({ top: "#c:dusts/sky_stone", middle: "#c:ingots/gold", bottom: "#c:plates/iron" }, Press.LOGIC)
  press({ top: "#c:dusts/sky_stone", middle: "#c:gems/certus_quartz", bottom: "#c:plates/iron" }, Press.CALCULATION)
  press({ top: "#c:dusts/sky_stone", middle: "#c:gems/diamond", bottom: "#c:plates/iron" }, Press.ENGINEERING)

  // universal press logic lines 29 - 133
  allthemods
    .shaped("kubejs:universal_press", ["FPF", "CSL", "FEF"], {
      F: "#c:ingots/sky_steel",
      P: "ae2:silicon_press",
      C: "ae2:calculation_processor_press",
      S: "minecraft:slime_ball",
      L: "ae2:logic_processor_press",
      E: "ae2:engineering_processor_press"
    })
    .id("allthemods:universal_press")

  function universalPress(input, output, id) {
    allthemods
      .custom({
        type: "ae2:inscriber",
        ingredients: {
          top: {
            item: "kubejs:universal_press"
          },
          middle: {
            item: input
          }
        },
        mode: "inscribe",
        result: {
          count: 1,
          id: output
        }
      })
      .id(`kubejs:inscriber/universal_press/${id}`)
  }

  universalPress("ae2:silicon", "ae2:printed_silicon", "printed_silicon")
  universalPress("ae2:certus_quartz_crystal", "ae2:printed_calculation_processor", "printed_calculation_processor")
  universalPress("minecraft:diamond", "ae2:printed_engineering_processor", "printed_engineering_processor")
  universalPress("minecraft:gold_ingot", "ae2:printed_logic_processor", "printed_logic_processor")
  universalPress(
    "megacells:sky_steel_ingot",
    "megacells:printed_accumulation_processor",
    "printed_accumulation_processor"
  )
  universalPress("appflux:charged_redstone", "appflux:printed_energy_processor", "printed_energy_processor")
  universalPress("extendedae:entro_crystal", "extendedae:concurrent_processor_print", "concurrent_processor_print")
  universalPress("minecraft:iron_block", "kubejs:universal_press", "universal_press_duplicate")
  universalPress("advanced_ae:quantum_alloy", "advanced_ae:printed_quantum_processor", "printed_quantum_processor")

  function createCrystalAssemblerRecipe(output, inputs, id, fluid) {
    let recipe = {
      type: "extendedae:crystal_assembler",
      input_items: [],
      output: {
        id: output.item,
        count: output.count || 1
      }
    }

    if (fluid) {
      recipe.input_fluid = {
        amount: fluid.amount || 1000,
        ingredient: {
          fluid: fluid.fluid
        }
      }
    }

    inputs.forEach((input) => {
      let ingredient = {
        amount: input.count || 1,
        ingredient: {}
      }

      if (input.tag) {
        ingredient.ingredient.tag = input.tag
      } else {
        ingredient.ingredient.item = input.item
      }

      recipe.input_items.push(ingredient)
    })

    allthemods.custom(recipe).id(`kubejs:crystal_assembler/${id}`)
  }
  // duplicating universal press with the circuit slicer for when you used up all your presses
  createCrystalAssemblerRecipe(
    { item: "extendedae:circuit_cutter" },
    [
      { item: "extendedae:machine_frame" },
      { item: "ae2:engineering_processor", count: 8 },
      { item: "kubejs:universal_press" },
      { item: "minecraft:stonecutter" }
    ],
    "circuit_cutter_from_universal"
  )

  // making more circuit slicers with the universal press as both have the same capabilities
  allthemods
    .custom({
      type: "extendedae:circuit_cutter",
      input: {
        ingredient: {
          item: "minecraft:iron_block"
        }
      },
      output: {
        count: 1,
        id: "kubejs:universal_press"
      }
    })
    .id("extendedae:slicing/universal_press")

  $DyeColor
    .values()
    .map((dc) => dc.getName())
    .forEach((color) => {
      allthemods
        .shapeless(`4x ae2:${color}_covered_cable`, [`ae2:${color}_covered_dense_cable`])
        .id(`allthemods:ae2/${color}_dense_covered_to_normal`)
      allthemods
        .shapeless(`4x ae2:${color}_smart_cable`, [`ae2:${color}_smart_dense_cable`])
        .id(`allthemods:ae2/${color}_smart_covered_to_normal`)
      allthemods
        .shapeless(`ae2:${color}_covered_dense_cable`, [`4x ae2:${color}_covered_cable`])
        .id(`allthemods:ae2/${color}_covered_to_dense`)
      allthemods
        .shapeless(`ae2:${color}_smart_dense_cable`, [`4x ae2:${color}_smart_cable`])
        .id(`allthemods:ae2/${color}_smart_to_dense`)
    })

  allthemods
    .shapeless(`4x ae2:fluix_covered_cable`, [`ae2:fluix_covered_dense_cable`])
    .id(`allthemods:ae2/dense_to_normal`)
  allthemods
    .shapeless(`4x ae2:fluix_smart_cable`, [`ae2:fluix_smart_dense_cable`])
    .id(`allthemods:ae2/smart_dense_to_smart_normal`)

  allthemods.custom({
    type: "advanced_ae:reaction",
    input_energy: 1300000,
    input_fluid: {
      amount: 1000,
      ingredient: {
        fluid: "minecraft:water"
      }
    },
    input_items: [
      {
        amount: 32,
        ingredient: {
          item: "minecraft:amethyst_shard"
        }
      }
    ],
    output: {
      "#": 32,
      "#t": "ae2:i",
      id: "oritech:fluxite"
    }
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
