ServerEvents.recipes((allthemods) => {
  allthemods.remove({ id: "supplementaries:lapis_bricks" })
  allthemods.shaped("supplementaries:lapis_bricks", ["L L", "   ", "L L"], { L: "minecraft:lapis_lazuli" })
})
