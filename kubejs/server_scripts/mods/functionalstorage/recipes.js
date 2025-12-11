// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  /**
   * @param {$ItemStack} lower
   * @param {$ItemStack} higher
   */
  function compact(lower, higher) {
    let recipe = {
      type: "functionalstorage:custom_compacting",
      higher_input: higher.toJson(),
      lower_input: lower.toJson()
    }

    allthemods
      .custom(recipe)
      .id(`allthemods:functionalstorage/compacting/${lower.id.split(":")[1]}_to_${higher.id.split(":")[1]}`)
  }

  compact(Item.of("utilitarian:tiny_charcoal", 8), Item.of("minecraft:charcoal"))
  compact(Item.of("utilitarian:tiny_coal", 8), Item.of("minecraft:coal"))

  compact(Item.of("forbidden_arcanus:ender_pearl_fragment", 4), Item.of("minecraft:ender_pearl"))

  compact(Item.of("exdeorum:stone_pebble", 4), Item.of("minecraft:cobblestone"))
  compact(Item.of("exdeorum:diorite_pebble", 4), Item.of("minecraft:diorite"))
  compact(Item.of("exdeorum:andesite_pebble", 4), Item.of("minecraft:andesite"))
  compact(Item.of("exdeorum:granite_pebble", 4), Item.of("minecraft:granite"))
  compact(Item.of("exdeorum:deepslate_pebble", 4), Item.of("minecraft:cobbled_deepslate"))
  compact(Item.of("exdeorum:tuff_pebble", 4), Item.of("minecraft:tuff"))
  compact(Item.of("exdeorum:calcite_pebble", 4), Item.of("minecraft:calcite"))
  compact(Item.of("exdeorum:basalt_pebble", 4), Item.of("minecraft:basalt"))
  compact(Item.of("exdeorum:blackstone_pebble", 4), Item.of("minecraft:blackstone"))

  compact(Item.of("exdeorum:iron_ore_chunk", 4), Item.of("minecraft:iron_ore"))
  compact(Item.of("exdeorum:copper_ore_chunk", 4), Item.of("minecraft:copper_ore"))
  compact(Item.of("exdeorum:gold_ore_chunk", 4), Item.of("minecraft:gold_ore"))
  compact(Item.of("exdeorum:aluminum_ore_chunk", 4), Item.of("alltheores:aluminum_ore"))
  compact(Item.of("exdeorum:lead_ore_chunk", 4), Item.of("alltheores:lead_ore"))
  compact(Item.of("exdeorum:silver_ore_chunk", 4), Item.of("alltheores:silver_ore"))
  compact(Item.of("exdeorum:nickel_ore_chunk", 4), Item.of("alltheores:nickel_ore"))
  compact(Item.of("exdeorum:tin_ore_chunk", 4), Item.of("alltheores:tin_ore"))
  compact(Item.of("exdeorum:uranium_ore_chunk", 4), Item.of("alltheores:uranium_ore"))
  compact(Item.of("exdeorum:zinc_ore_chunk", 4), Item.of("alltheores:zinc_ore"))
  compact(Item.of("exdeorum:platinum_ore_chunk", 4), Item.of("alltheores:platinum_ore"))
  compact(Item.of("exdeorum:osmium_ore_chunk", 4), Item.of("alltheores:osmium_ore"))
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
