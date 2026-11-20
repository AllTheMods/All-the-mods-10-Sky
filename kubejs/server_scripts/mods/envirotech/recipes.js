// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  // Void Miner CCUs: the diamond block in every tier is replaced with an Allthemodium-family block.
  // Tier numbers match the void miner's own tiers (1 = Litherite ... 8 = Xerothium).
  const ccuTiers = [
    { tier: "litherite", metal: "allthemodium:allthemodium_block" },
    { tier: "erodium", metal: "allthemodium:allthemodium_block" },
    { tier: "kyronite", metal: "allthemodium:vibranium_block" },
    { tier: "pladium", metal: "allthemodium:vibranium_block" },
    { tier: "ionite", metal: "allthemodium:unobtainium_block" },
    { tier: "aethium", metal: "allthemodium:unobtainium_block" },
    { tier: "nanorite", metal: "allthemodium:vibranium_allthemodium_alloy_block" },
    { tier: "xerothium", metal: "allthemodium:unobtainium_vibranium_alloy_block" }
  ]

  ccuTiers.forEach((entry, index) => {
    allthemods.remove({ id: `envirotech:block/void_miner/ct_${entry.tier}` })

    if (index == 0) {
      allthemods
        .shaped(`envirotech:${entry.tier}_void_miner_ccu`, ["CDC", "CMC", "ILI"], {
          C: `envirocore:${entry.tier}_crystal`,
          D: entry.metal,
          M: "envirocore:laser_diode",
          I: "#envirocore:structure/panels",
          L: "envirocore:laser_core"
        })
        .id(`allthemods:envirotech/void_miner/${entry.tier}_ccu`)
    } else {
      allthemods
        .shaped(`envirotech:${entry.tier}_void_miner_ccu`, ["CDC", "CMC", "CLC"], {
          C: `envirocore:${entry.tier}_crystal`,
          D: entry.metal,
          M: `envirotech:${ccuTiers[index - 1].tier}_void_miner_ccu`,
          L: "envirocore:laser_core"
        })
        .id(`allthemods:envirotech/void_miner/${entry.tier}_ccu`)
    }
  })

  // Assembler: pistons -> Allthemodium Plates. Every interconnect (and so every frame) comes from the Assembler.
  allthemods.remove({ id: "envirocore:blocks/machines/assembler" })
  allthemods
    .shaped("envirocore:assembler", ["VCF", "PIP", "OOO"], {
      V: "envirocore:volatile_memory",
      C: "envirocore:cpu",
      F: "envirocore:flash_memory",
      P: "allthemodium:allthemodium_plate",
      I: "#envirocore:structure/panels",
      O: "envirocore:obsidian_plate"
    })
    .id("allthemods:envirotech/assembler")

  // The rest of the recipes that used #c:plates/obsidian now take the Obsidian Plate item (see tags.js).
  const plateRecipes = [
    "envirocore:blocks/components/clear_structure_panel",
    "envirocore:blocks/components/laser_core",
    "envirocore:blocks/components/structure_panel",
    "envirocore:blocks/machines/memory_programmer",
    "envirocore:items/ct_rgb_controller"
  ]

  function swapObsidianPlate(node) {
    if (Array.isArray(node)) return node.map(swapObsidianPlate)
    if (node == null || typeof node != "object") return node
    if (node.tag == "c:plates/obsidian") return { item: "envirocore:obsidian_plate" }
    let copy = {}
    Object.keys(node).forEach((key) => {
      copy[key] = swapObsidianPlate(node[key])
    })
    return copy
  }

  plateRecipes.forEach((id) => {
    let rewritten = null
    allthemods.forEachRecipe({ id: id }, (recipe) => {
      rewritten = swapObsidianPlate(JSON.parse(String(recipe.json)))
    })
    if (rewritten == null) {
      console.warn(`[envirotech] ${id} not found, obsidian plate swap skipped`)
      return
    }
    allthemods.remove({ id: id })
    allthemods.custom(rewritten).id(`allthemods:envirotech/${id.split(":")[1]}`)
  })
  
  // Resolve conflicts with EnviroCore Crystal Block Uncrafting
  ccuTiers.forEach((entry) => {
	allthemods.replaceInput({ id: `envirocore:blocks/crystals/${entry.tier}/ct_uncraft_${entry.tier}_blocks`}, `#envirocore:${entry.tier}_blocks`, Ingredient.of(`#envirocore:${entry.tier}_blocks`).except(`envirocore:${entry.tier}`))
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
