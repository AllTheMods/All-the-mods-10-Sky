// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  // Change Magical Snow Globe's requirements to require visiting all 3 vanilla dimensions
  allthemods.replaceOutput(
    { id: "excessive_utilities:magical_snow_globe" },
    "excessive_utilities:magical_snow_globe",
    'excessive_utilities:magical_snow_globe[excessive_utilities:magical_snow_globe_progress={amount_required:3,biomes:{"minecraft:is_end":0b,"minecraft:is_nether":0b,"minecraft:is_overworld":0b}}]'
  )
  // Recipe Display with completed Magical Snow Globe primarily for convenience and to hide the original 7 biome snow globe
  allthemods
    .shaped(Item.of("excessive_utilities:quantum_quarry"), ["ESE", "SGS", "ESE"], {
      E: "#c:end_stones",
      S: "excessive_utilities:stoneburnt",
      G: 'excessive_utilities:magical_snow_globe[excessive_utilities:magical_snow_globe_progress={amount_required:3,biomes:{"minecraft:is_end":1b,"minecraft:is_nether":1b,"minecraft:is_overworld":1b}}]'
    })
    .id("allthemods:snow_globe/quantum_quarry")
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
