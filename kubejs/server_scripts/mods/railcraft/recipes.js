ServerEvents.recipes((allthemods) => {
  allthemods.remove({ id: "railcraft:iron_tank_wall" })
  allthemods.shaped(Item.of("railcraft:white_iron_tank_wall", 16), ["PPP", "P P", "PPP"], {
    P: "#c:plates/iron"
  })

  allthemods.remove({ id: "railcraft:steel_tank_wall" })
  allthemods.shaped(Item.of("railcraft:white_steel_tank_wall", 16), ["PPP", "P P", "PPP"], {
    P: "#c:plates/steel"
  })

  allthemods.shapeless('railcraft:cart_dispenser', [
    'minecraft:dispenser',
    'minecraft:minecart',
    'minecraft:redstone'
  ]).id('railcraft:cart_dispenser');
})
