// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  const aa = allthemods.recipes.actuallyadditions
  /*
    aa.coffee_ingredient("#ae2:all_fluix", 2, [{effect: "minecraft:regeneration", amplifier: 0, duration: 60}], "Some Extra Text here?")
    aa.color_change("acacia_door", "#actuallyadditions:lamps")
    // aa.copy_nbt()
    // aa.copy_nbt_shapeless()
    aa.crushing([{stack: "3x acacia_boat", chance: 1}, {stack: "apple", chance: 0.5}], "#ae2:metal_ingots")
    aa.empowering("acacia_boat",
        "#actuallyadditions:tiny_coals",
        ["#actuallyadditions:crystal_blocks", "#ae2:all_fluix", "#alltheores:ore_hammers", "#c:ingots"],
        1234,
        0xFF4414,
        1234)
    aa.fermenting("allthemodium:soul_lava", "milk", 200)
    aa.laser("acacia_boat", "#actuallyadditions:coffee_beans", 400)
    aa.liquid_fuel("milk", 400, 400)
    aa.mining_lens("acacia_button", "#ae2:all_quartz", 30)
    aa.pressing("actuallyadditions:canola_oil", "#actuallyadditions:crystals")
    */

  // laser(output, input, power)
  aa.laser("occultism:iesnium_ore", "minecraft:ancient_debris", 50000)

  allthemods.recipes.actuallyadditions
    .crushing([{ stack: "mekanism:dust_coal", chance: 1.0 }], "#minecraft:coals")
    .id("allthemods:actuallyadditions/crushing/coal_dust_from_shard")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
