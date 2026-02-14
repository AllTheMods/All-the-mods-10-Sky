// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  allthemods
    .custom({
      type: "draconicevolution:fusion_crafting",
      catalyst: {
        item: "justdirethings:celestigem_paxel"
      },
      ingredients: [
        {
          consume: true,
          ingredient: {
            item: "allthemodium:alloy_sword"
          }
        },
        {
          consume: true,
          ingredient: {
            item: "allthemodium:alloy_pick"
          }
        },
        {
          consume: true,
          ingredient: {
            item: "allthemodium:alloy_axe"
          }
        },
        {
          consume: true,
          ingredient: {
            item: "allthemodium:alloy_shovel"
          }
        }
      ],
      result: {
        count: 1,
        id: "allthemodium:alloy_paxel"
      },
      techLevel: "chaotic",
      totalEnergy: 128000000
    })
    .id("allthemodsmodium:draconic_evolution/alloy_paxel")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
