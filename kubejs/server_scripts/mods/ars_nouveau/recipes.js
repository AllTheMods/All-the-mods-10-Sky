ServerEvents.recipes((allthemods) => {
  allthemods.remove({ id: "ars_nouveau:glyph_wall" })
  allthemods
    .custom({
      type: "ars_nouveau:glyph",
      exp: 160,
      inputs: [
        {
          item: "ars_nouveau:manipulation_essence"
        },
        {
          item: "minecraft:dragon_breath"
        },
        {
          tag: "c:storage_blocks/diamond"
        },
        {
          tag: "c:wools"
        },
        {
          tag: "c:rods/blaze"
        }
      ],
      output: {
        count: 1,
        id: "ars_nouveau:glyph_wall"
      }
    })
    .id("allthemods:arsnouveau/glyph_wall")
})
