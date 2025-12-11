// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
ServerEvents.recipes((allthemods) => {
  // Soul Sapling

  allthemods.custom({
    type: "productivebees:block_conversion",
    bees: ["productivebees:soul_lava"],
    from: {
      Name: "productivetrees:soul_tree_sapling"
    },
    to: {
      Name: "allthemodium:soul_sapling"
    }
  })
  // Ancient Sapling
  allthemods.custom({
    type: "integrateddynamics:drying_basin",
    input_item: {
      item: "minecraft:dead_bush"
    },
    input_fluid: {
      id: "productivemetalworks:molten_ancient_debris",
      amount: 1000
    },
    duration: 12000,
    output_item: {
      id: "allthemodium:ancient_sapling"
    }
  })
  allthemods.custom({
    type: "integrateddynamics:mechanical_drying_basin",
    input_item: {
      item: "minecraft:dead_bush"
    },
    input_fluid: {
      id: "productivemetalworks:molten_ancient_debris",
      amount: 1000
    },
    duration: 1200,
    output_item: {
      id: "allthemodium:ancient_sapling"
    }
  })
  // Demonic Sapling
  allthemods
    .custom({
      type: "occultism:ritual",
      activation_item: {
        item: "occultism:otherworld_sapling"
      },
      duration: 180,
      entity_to_sacrifice: {
        display_name: "ritual.occultism.sacrifice.humans",
        tag: "occultism:humans"
      },
      ingredients: [
        {
          tag: "c:ingots/allthemodium"
        },
        {
          tag: "c:ingots/vibranium"
        },
        {
          tag: "c:ingots/unobtainium"
        },
        {
          item: "occultism:otherworld_essence"
        },
        {
          item: "occultism:demonic_meat"
        },
        {
          item: "occultism:sweet_honey_heart"
        },
        {
          item: "allthecompressed:ancient_stone_4x"
        },
        {
          item: "allthemodium:soul_lava_bucket"
        },
        {
          item: "minecraft:crimson_nylium"
        },
        {
          item: "minecraft:porkchop"
        }
      ],
      pentacle_id: "occultism:contact_wild_spirit",
      result: {
        id: "allthemodium:demonic_sapling"
      },
      ritual_dummy: {
        count: 1,
        id: "kubejs:ritual_dummy/misc_demonic_sapling"
      },
      ritual_type: "occultism:craft"
    })
    .id("allthemods:occultism/ritual/misc_demonic_sapling")
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
