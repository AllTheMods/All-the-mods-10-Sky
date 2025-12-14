// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  //Complete removal, including JEI
  const removals = [
    "exmachinis:netherite_upgrade",
    /geore:.*tungsten.*/,
    /geore:.*monazite.*/,
    "georenouveau:tungsten_geore_golem_charm",
    "georenouveau:monazite_geore_golem_charm",
    "mekanismgenerators:gas_burning_generator",
    "generatorgalore:copper_generator_8x",
    "generatorgalore:copper_generator",
    "generatorgalore:diamond_generator_8x",
    "generatorgalore:diamond_generator",
    "generatorgalore:emerald_generator_8x",
    "generatorgalore:emerald_generator",
    "generatorgalore:gold_generator_8x",
    "generatorgalore:gold_generator",
    "generatorgalore:obsidian_generator_8x",
    "generatorgalore:obsidian_generator",
    "extendedcrafting:nether_star_block",
    "extendedcrafting:handheld_table",
    "notenoughwands:acceleration_wand",
    /pickletweaks:.*_paxel/,
    "exdeorum:mechanical_sieve",
    "exdeorum:mechanical_hammer",
    /georenouveau:.*_dowsing_rod/,
    "actuallyadditions:crafter_on_a_stick",
    "allthemodium:teleport_pad",
    "ae2:spatial_anchor",
    "mekanism:dimensional_stabilizer",
    "mekanism:upgrade_anchor",
    "railcraft:world_spike",
    "railcraft:personal_world_spike",
    "railcraft:world_spike_minecart"
  ]

  const seedRemovals = [
    "mysticalagriculture:uraninite_essence",
    "mysticalagriculture:yellorium_essence",
    "mysticalagriculture:yellorium_essence",
    "mysticalagriculture:coal_essence",
    "mysticalagriculture:amethyst_essence",
    "mysticalagriculture:pig_essence",
    "mysticalagriculture:rubber_essence",
    "mysticalagriculture:silicon_essence",
    "mysticalagriculture:sulfur_essence",
    "mysticalagriculture:aluminum_essence",
    "mysticalagriculture:saltpeter_essence",
    "mysticalagriculture:apatite_essence",
    "mysticalagriculture:grains_of_infinity_essence",
    "mysticalagriculture:menril_essence",
    "mysticalagriculture:iron_essence",
    "mysticalagriculture:copper_essence",
    "mysticalagriculture:nether_quartz_essence",
    "mysticalagriculture:glowstone_essence",
    "mysticalagriculture:redstone_essence",
    "mysticalagriculture:obsidian_essence",
    "mysticalagriculture:prismarine_essence",
    "mysticalagriculture:zombie_essence",
    "mysticalagriculture:tin_essence",
    "mysticalagriculture:bronze_essence",
    "mysticalagriculture:zinc_essence",
    "mysticalagriculture:brass_essence",
    "mysticalagriculture:silver_essence",
    "mysticalagriculture:lead_essence",
    "mysticalagriculture:graphite_essence",
    "mysticalagriculture:copper_alloy_essence",
    "mysticalagriculture:redstone_alloy_essence",
    "mysticalagriculture:conductive_alloy_essence",
    "mysticalagriculture:sky_stone_essence",
    "mysticalagriculture:certus_quartz_essence",
    "mysticalagriculture:quartz_enriched_iron_essence",
    "mysticalagriculture:gold_essence",
    "mysticalagriculture:lapis_lazuli_essence",
    "mysticalagriculture:end_essence",
    "mysticalagriculture:steel_essence",
    "mysticalagriculture:nickel_essence",
    "mysticalagriculture:constantan_essence",
    "mysticalagriculture:electrum_essence",
    "mysticalagriculture:invar_essence",
    "mysticalagriculture:uranium_essence",
    "mysticalagriculture:ruby_essence",
    "mysticalagriculture:sapphire_essence",
    "mysticalagriculture:peridot_essence",
    "mysticalagriculture:hop_graphite_essence",
    "mysticalagriculture:soularium_essence",
    "mysticalagriculture:dark_steel_essence",
    "mysticalagriculture:pulsating_alloy_essence",
    "mysticalagriculture:energetic_alloy_essence",
    "mysticalagriculture:osmium_essence",
    "mysticalagriculture:fluorite_essence",
    "mysticalagriculture:refined_glowstone_essence",
    "mysticalagriculture:refined_obsidian_essence",
    "mysticalagriculture:fluix_essence",
    "mysticalagriculture:energized_steel_essence",
    "mysticalagriculture:blazing_crystal_essence",
    "mysticalagriculture:diamond_essence",
    "mysticalagriculture:emerald_essence",
    "mysticalagriculture:netherite_essence",
    "mysticalagriculture:platinum_essence",
    "mysticalagriculture:iridium_essence",
    "mysticalagriculture:vibrant_alloy_essence",
    "mysticalagriculture:end_steel_essence",
    "mysticalagriculture:yellorium_essence",
    "mysticalagriculture:cyanite_essence",
    "mysticalagriculture:niotic_crystal_essence",
    "mysticalagriculture:spirited_crystal_essence",
    "mysticalagriculture:uraninite_essence",
    "mysticalagriculture:nitro_crystal_essence",
    "mysticalagriculture:uraninite_seeds",
    "mysticalagriculture:yellorium_seeds",
    "mysticalagriculture:yellorium_essence",
    "mysticalagriculture:coal_seeds",
    "mysticalagriculture:amethyst_seeds",
    "mysticalagriculture:pig_seeds",
    "mysticalagriculture:rubber_seeds",
    "mysticalagriculture:silicon_seeds",
    "mysticalagriculture:sulfur_seeds",
    "mysticalagriculture:aluminum_seeds",
    "mysticalagriculture:saltpeter_seeds",
    "mysticalagriculture:apatite_seeds",
    "mysticalagriculture:grains_of_infinity_seeds",
    "mysticalagriculture:menril_seeds",
    "mysticalagriculture:iron_seeds",
    "mysticalagriculture:copper_seeds",
    "mysticalagriculture:nether_quartz_seeds",
    "mysticalagriculture:glowstone_seeds",
    "mysticalagriculture:redstone_seeds",
    "mysticalagriculture:obsidian_seeds",
    "mysticalagriculture:prismarine_seeds",
    "mysticalagriculture:zombie_seeds",
    "mysticalagriculture:tin_seeds",
    "mysticalagriculture:bronze_seeds",
    "mysticalagriculture:zinc_seeds",
    "mysticalagriculture:brass_seeds",
    "mysticalagriculture:silver_seeds",
    "mysticalagriculture:lead_seeds",
    "mysticalagriculture:graphite_seeds",
    "mysticalagriculture:copper_alloy_seeds",
    "mysticalagriculture:redstone_alloy_seeds",
    "mysticalagriculture:conductive_alloy_seeds",
    "mysticalagriculture:sky_stone_seeds",
    "mysticalagriculture:certus_quartz_seeds",
    "mysticalagriculture:quartz_enriched_iron_seeds",
    "mysticalagriculture:gold_seeds",
    "mysticalagriculture:lapis_lazuli_seeds",
    "mysticalagriculture:end_seeds",
    "mysticalagriculture:steel_seeds",
    "mysticalagriculture:nickel_seeds",
    "mysticalagriculture:constantan_seeds",
    "mysticalagriculture:electrum_seeds",
    "mysticalagriculture:invar_seeds",
    "mysticalagriculture:uranium_seeds",
    "mysticalagriculture:ruby_seeds",
    "mysticalagriculture:sapphire_seeds",
    "mysticalagriculture:peridot_seeds",
    "mysticalagriculture:hop_graphite_seeds",
    "mysticalagriculture:soularium_seeds",
    "mysticalagriculture:dark_steel_seeds",
    "mysticalagriculture:pulsating_alloy_seeds",
    "mysticalagriculture:energetic_alloy_seeds",
    "mysticalagriculture:osmium_seeds",
    "mysticalagriculture:fluorite_seeds",
    "mysticalagriculture:refined_glowstone_seeds",
    "mysticalagriculture:refined_obsidian_seeds",
    "mysticalagriculture:fluix_seeds",
    "mysticalagriculture:energized_steel_seeds",
    "mysticalagriculture:blazing_crystal_seeds",
    "mysticalagriculture:diamond_seeds",
    "mysticalagriculture:emerald_seeds",
    "mysticalagriculture:netherite_seeds",
    "mysticalagriculture:platinum_seeds",
    "mysticalagriculture:iridium_seeds",
    "mysticalagriculture:vibrant_alloy_seeds",
    "mysticalagriculture:end_steel_seeds",
    "mysticalagriculture:yellorium_seeds",
    "mysticalagriculture:cyanite_seeds",
    "mysticalagriculture:niotic_crystal_seeds",
    "mysticalagriculture:spirited_crystal_seeds",
    "mysticalagriculture:uraninite_seeds",
    "mysticalagriculture:nitro_crystal_seeds",
    "mysticalagriculture:compressed_iron_seeds",
    "mysticalagriculture:compressed_iron_essence",
    "mysticalagriculture:draconium_seeds",
    "mysticalagriculture:draconium_essence",
    "mysticalagriculture:basalt_seeds",
    "mysticalagriculture:basalt_essence"
  ]

  removals.forEach((entry) => {
    //        allthemods.remove({ input: entry }); DO NOT ENABLE, THIS WILL BREAK THE PACK
    allthemods.remove({ output: entry })
  })

  seedRemovals.forEach((entry) => {
    // allthemods.remove({ input: entry }); Removes indy facades, the next line does the same but ignores indy recipes
    allthemods.remove({ input: entry, not: { mod: "integrateddynamics" } })
    allthemods.remove({ output: entry })
  })

  allthemods.remove({ output: /exdeorum:.*_compressed_sieve/ })
  allthemods.remove({ output: /generatorgalore:.*_upgrade/ })
  allthemods.remove({ id: "create:crushing/nether_gold_ore" })
  allthemods.remove({ id: "create:crushing/deepslate_gold_ore" })
  allthemods.remove({ id: "create:crushing/netherrack" })
  allthemods.remove({ id: "create:crushing/ochrum_recycling" })
  allthemods.remove({ id: "mekanism:sulfur_dye" })
  allthemods.remove({ id: "alltheores:alloysmelter/brass/ingot" })
  allthemods.remove({ id: "soulshards:vile_dust_from_soul_sand" })
  allthemods.remove({ id: "oritech:crafting/alloy/steel" })
  allthemods.remove({ id: "silentgear:graded_mat_test" })
  allthemods.remove({ id: "silentgear:diamond_shard" })
  allthemods.remove({ id: "actuallyadditions:tagged_slime_block" })
  allthemods.remove({ id: `mekanism:compat/ae2/sand_to_silicon` })
  allthemods.remove({ id: `create:crushing/deepslate_copper_ore` })
  allthemods.remove({ id: `create:crushing/deepslate_zinc_ore` })
  allthemods.remove({ id: `create:crushing/deepslate_iron_ore` })
  allthemods.remove({ id: `create:crushing/tuff_recycling` })
  allthemods.remove({ id: `modern_industrialization:materials/plutonium/craft/block_from_ingot` })
  allthemods.remove({ id: `industrialforegoing:laser_drill_fluid/oil` })
  allthemods.remove({ id: `mysticalagradditions:nitro_crystal_crux` })
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/slurry/dirty/from_raw_block` })
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/slurry/dirty/from_raw_ore` })
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/slurry/dirty/from_ore` })
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/slurry/clean` })
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/crystal/from_slurry` })
  allthemods.remove({ id: `oritech:nickel_nugget` })
  allthemods.remove({ id: `oritech:platinum_nugget` })
})

ServerEvents.generateData("after_mods", (allthemods) => {
  ;[
    "occultism:recipe/miner/eldritch/raw_allthemodium",
    "occultism:recipe/miner/eldritch/raw_vibranium",
    "occultism:recipe/miner/eldritch/raw_unobtainium"
  ].forEach((id) => {
    allthemods.json(`${id}.json`, {
      "neoforge:conditions": [
        {
          type: "neoforge:false"
        }
      ]
    })
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
