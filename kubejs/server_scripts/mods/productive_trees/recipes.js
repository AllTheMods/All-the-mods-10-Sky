// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  allthemods.custom({
    type: "extendedcrafting:shaped_ender_crafter",
    pattern: [" E ", "ESE", " E "],
    key: {
      S: {
        item: "productivetrees:asai_palm_sapling"
      },
      E: {
        item: "forbidden_arcanus:soul"
      }
    },
    result: {
      id: "productivetrees:soul_tree_sapling"
    }
  })
  allthemods.custom({
    type: "extendedcrafting:shaped_ender_crafter",
    pattern: ["EEE", "ESE", "EEE"],
    key: {
      S: {
        item: "productivetrees:dogwood_sapling"
      },
      E: {
        items: "apotheosis:gem",
        components: {
          "apotheosis:gem": "apotheosis:core/solar",
          "apotheosis:purity": "flawed"
        },
        type: "neoforge:components"
      }
    },
    result: {
      id: "productivetrees:flickering_sun_sapling"
    }
  })
  allthemods.custom({
    type: "extendedcrafting:shapeless_ender_crafter",
    ingredients: [
      {
        items: "apotheosis:gem",
        components: {
          "apotheosis:purity": "perfect",
          "apotheosis:gem": "apotheosis:core/solar"
        },
        type: "neoforge:components"
      },
      {
        item: "productivetrees:dogwood_sapling"
      }
    ],
    result: {
      id: "productivetrees:flickering_sun_sapling"
    }
  })
  allthemods.custom({
    type: "extendedcrafting:shaped_ender_crafter",
    pattern: ["BEB", "ESE", "BEB"],
    key: {
      S: {
        item: "productivetrees:star_fruit_sapling"
      },
      E: {
        item: "minecraft:nether_star"
      },
      B: {
        item: "minecraft:blue_dye"
      }
    },
    result: {
      id: "productivetrees:blue_yonder_sapling"
    }
  })
  allthemods.custom({
    type: "extendedcrafting:shaped_ender_crafter",
    pattern: [" T ", "ESE", " W "],
    key: {
      S: {
        item: "productivetrees:red_maple_sapling"
      },
      E: {
        item: "minecraft:firework_rocket"
      },
      T: {
        item: "apothic_enchanting:warden_tendril"
      },
      W: {
        item: "minecraft:warden_spawn_egg"
      }
    },
    result: {
      id: "productivetrees:firecracker_sapling"
    }
  })
  allthemods.custom({
    type: "extendedcrafting:shaped_ender_crafter",
    pattern: ["BEB", "ESE", "BEB"],
    key: {
      S: {
        item: "productivetrees:socotra_dragon_sapling"
      },
      E: {
        item: "powah:crystal_blazing"
      },
      B: {
        item: "minecraft:black_dye"
      }
    },
    result: {
      id: "productivetrees:black_ember_sapling"
    }
  })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
