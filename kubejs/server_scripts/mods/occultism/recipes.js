// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const materials = [
  "aluminum",
  "lead",
  "nickel",
  "osmium",
  "platinum",
  "silver",
  "tin",
  "uranium",
  "zinc",
  "iridium",
  "copper",
  "iron",
  "gold",
  "allthemodium",
  "vibranium",
  "unobtainium"
]

ServerEvents.recipes((allthemods) => {
  materials.forEach((material) => {
    allthemods.remove({ id: `occultism:crushing/${material}_dirty_dust_from_clump` })
  })

    allthemods.custom({
        type: 'occultism:crushing',
        ingredient: {
            item: 'geore:coal_shard'
        },
        result: {
            type: 'occultism:item',
            item: 'mekanism:dust_coal',
            count: 1
        },
        crushing_time: 100,
        ignore_crushing_multiplier: true
    }).id('allthemods:occultism/crushing/coal_dust_from_shard')

	allthemods.custom({
  "type": "occultism:ritual",
  "activation_item": {
    "item": "occultism:book_of_binding_bound_foliot"
  },
  "duration": 60,
  "ingredients": [
    {
      "tag": "minecraft:flowers"
    },
	{
      "tag": "c:campfires"
    },
	{
      "tag": "c:tools/shear"
    },
	{
      "tag": "productivebees:solitary_overworld_nests"
    },
    {
      "item": "minecraft:sugar"
    },
    {
      "item": "minecraft:birch_sapling"
    }
  ],
  "pentacle_id": "occultism:craft_foliot",
  "result": {
    "count": 3,
    "id": "minecraft:honeycomb"
  },
  "ritual_dummy": {
    "count": 1,
    "id": "kubejs:ritual_dummy/honeycomb"
  },
  "ritual_type": "occultism:craft"
}).id("allthemods:occultism/ritual/honeycomb")

	allthemods.custom({
  "type": "occultism:ritual",
  "activation_item": {
    "item": "occultism:book_of_binding_bound_afrit"
  },
  "duration": 300,
  "ingredients": [
    {
      "item": "occultism:ritual_satchel_t1"
    },
    {
      "item": "occultism:afrit_essence"
    },
    {
      "tag": "c:ender_pearls"
    },
    {
      "tag": "c:ender_pearls"
    },
    {
      "tag": "c:ender_pearls"
    },
    {
      "tag": "c:ender_pearls"
    }
  ],
  "pentacle_id": "occultism:craft_afrit",
  "result": {
    "count": 1,
    "id": "occultism:ritual_satchel_t2"
  },
  "ritual_dummy": {
    "count": 1,
    "id": "kubejs:ritual_dummy/upgrade_ritual_satchel_t1_to_t2"
  },
  "ritual_type": "occultism:craft_with_spirit_name"
	}).id("allthemods:occultism/ritual/upgrade_ritual_satchel_t1_to_t2")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
