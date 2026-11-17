// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// Mods being phased out: nothing from them can be crafted anymore. Tooltips are in client_scripts/deprecated.js
// Recipes that turn their items back into vanilla items (e.g. glassential:oak_door_from_oak_glass_door,
// translocators:diamond_nugget_combine) output vanilla items, so they are kept for recycling.
ServerEvents.recipes((allthemods) => {
  // These Happy Hallows recipes need Merrymaking items (not in the pack) and fail to parse; remove them by id
  // first so the output filters below don't log parse errors for them
  allthemods.remove({ id: "happyhallows:mantel_deco_haunted_house" })
  allthemods.remove({ id: "happyhallows:apple_cider" })

  const deprecated = [/^generatorgalore:/, /^translocators:/, /^glassential:/, /^trashcans:/, /^spikyspikes:/]

  deprecated.forEach((entry) => {
    allthemods.remove({ output: entry })
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
