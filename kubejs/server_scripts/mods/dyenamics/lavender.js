ServerEvents.recipes((allthemods) => {
  allthemods.remove({ id: "dyenamics:ma/dye/lavender_dye" })
  allthemods.shaped(Item.of("dyenamics:lavender_dye", 6), [" D ", "   ", "D D"], {
    D: "mysticalagriculture:dye_essence"
  })
})
