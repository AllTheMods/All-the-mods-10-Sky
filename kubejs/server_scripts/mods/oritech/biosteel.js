// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  // A collection of scripts to help resolve conflicts between steel and biosteel
  allthemods.remove([
    { input: "#c:ingots/steel", output: "alltheores:steel_block", type: "minecraft:crafting_shaped" },
    { input: "#c:ingots/steel", output: "alltheores:steel_block", type: "minecraft:crafting_shapeless" }
  ])
  allthemods
    .shaped(Item.of("alltheores:steel_block"), ["SSS", "SAS", "SSS"], {
      S: "#c:ingots/steel",
      A: "alltheores:steel_ingot"
    })
    .id("alltheores:steel_block")

  allthemods.remove([
    { input: "#c:storage_blocks/steel", output: "alltheores:steel_ingot", type: "minecraft:crafting_shaped" },
    { input: "#c:storage_blocks/steel", output: "alltheores:steel_ingot", type: "minecraft:crafting_shapeless" }
  ])
  allthemods
    .shapeless(Item.of("alltheores:steel_ingot", 9), ["alltheores:steel_block"])
    .id("alltheores:steel_ingot_from_block")

  allthemods.replaceInput(
    { id: "productivemetalworks:melting/ingots/steel" },
    "#c:ingots/steel",
    "alltheores:steel_ingot"
  )
  allthemods.replaceInput(
    { id: "productivemetalworks:melting/storage_blocks/steel" },
    "#c:storage_blocks/steel",
    "alltheores:steel_block"
  )

  // Biosteel compatibility for making casts
  function casting_tag(input, output) {
    allthemods
      .custom({
        type: "productivemetalworks:item_casting",
        cast: {
          tag: input
        },
        consume_cast: true,
        fluid: {
          amount: 360,
          fluid: "oritech:still_molten_biosteel"
        },
        result: {
          count: 1,
          id: output
        }
      })
      .id(`allthemods:casting/cast/${output.split(":")[1]}_with_biosteel`)
  }
  function casting(input, output) {
    allthemods
      .custom({
        type: "productivemetalworks:item_casting",
        cast: {
          item: input
        },
        consume_cast: true,
        fluid: {
          amount: 360,
          fluid: "oritech:still_molten_biosteel"
        },
        result: {
          count: 1,
          id: output
        }
      })
      .id(`allthemods:casting/cast/${output.split(":")[1]}_with_biosteel`)
  }

  casting("silentgear:mattock_head", "sgearmetalworks:mattock_cast")
  casting("silentgear:saw_blade", "sgearmetalworks:saw_cast")
  casting("silentgear:boot_plates", "sgearmetalworks:boots_cast")
  casting("silentgear:shear_blades", "sgearmetalworks:shears_cast")
  casting("silentgear:bow_limbs", "sgearmetalworks:bow_cast")
  casting("silentgear:crossbow_limbs", "sgearmetalworks:crossbow_cast")
  casting("silentgear:slingshot_limbs", "sgearmetalworks:slingshot_cast")
  casting("silentgear:bracelet_band", "sgearmetalworks:bracelet_cast")
  casting("silentgear:dagger_blade", "sgearmetalworks:dagger_cast")
  casting("silentgear:arrow_heads", "sgearmetalworks:arrow_cast")
  casting_tag("c:rods", "productivemetalworks:rod_cast")
  casting("silentgear:necklace_chain", "sgearmetalworks:necklace_cast")
  casting_tag("c:ingots", "productivemetalworks:ingot_cast")
  casting("silentgear:helmet_plates", "sgearmetalworks:helmet_cast")
  casting("silentgear:excavator_head", "sgearmetalworks:excavator_cast")
  casting("silentgear:katana_blade", "sgearmetalworks:katana_cast")
  casting_tag("c:plates", "productivemetalworks:plate_cast")
  // Not using a function for pouring bricks over biosteel to allow the ID to be separate from the ingot version of the Ingot Cast recipe
  allthemods
    .custom({
      type: "productivemetalworks:item_casting",
      cast: {
        item: "minecraft:brick"
      },
      consume_cast: true,
      fluid: {
        amount: 360,
        fluid: "oritech:still_molten_biosteel"
      },
      result: {
        count: 1,
        id: "productivemetalworks:ingot_cast"
      }
    })
    .id(`allthemods:casting/cast/ingot_cast_with_biosteel_and_a_brick`)
  casting("silentgear:prospector_hammer_head", "sgearmetalworks:prospector_hammer_cast")
  casting("silentgear:pickaxe_head", "sgearmetalworks:pickaxe_cast")
  casting("silentgear:machete_blade", "sgearmetalworks:machete_cast")
  casting("silentgear:sword_blade", "sgearmetalworks:sword_cast")
  casting_tag("c:gems", "productivemetalworks:gem_cast")
  casting("silentgear:rod", "sgearmetalworks:tool_rod_cast")
  casting("silentgear:knife_blade", "sgearmetalworks:knife_cast")
  casting("silentgear:legging_plates", "sgearmetalworks:leggings_cast")
  casting("silentgear:ring_shank", "sgearmetalworks:ring_cast")
  casting("silentgear:shield_plate", "sgearmetalworks:shield_cast")
  casting("silentgear:shovel_head", "sgearmetalworks:shovel_cast")
  casting("silentgear:spear_tip", "sgearmetalworks:spear_cast")
  casting("silentgear:fishing_reel_and_hook", "sgearmetalworks:fishing_rod_cast")
  casting("silentgear:tip", "sgearmetalworks:tip_cast")
  casting("silentgear:paxel_head", "sgearmetalworks:paxel_cast")
  casting_tag("c:gears", "productivemetalworks:gear_cast")
  casting("silentgear:trident_prongs", "sgearmetalworks:trident_cast")
  casting("silentgear:hoe_head", "sgearmetalworks:hoe_cast")
  casting("silentgear:axe_head", "sgearmetalworks:axe_cast")
  casting("silentgear:chestplate_plates", "sgearmetalworks:chestplate_cast")
  casting("silentgear:hammer_head", "sgearmetalworks:hammer_cast")
  casting("silentgear:sickle_blade", "sgearmetalworks:sickle_cast")
  casting_tag("c:nuggets", "productivemetalworks:nugget_cast")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
