ServerEvents.recipes((event) => {
  event.shapeless("kubejs:silent_allthemodium_plate", [
    "allthemodium:allthemodium_plate",
    "allthemodium:allthemodium_plate",
    "allthemodium:allthemodium_plate",
    "allthemodium:allthemodium_plate"
  ])
  event.smithing(
    "kubejs:silent_vibranium_plate",
    "allthemodium:vibranium_upgrade_smithing_template",
    "kubejs:silent_allthemodium_plate",
    "allthemodium:vibranium_ingot"
  )
  event.smithing(
    "kubejs:silent_unobtainium_plate",
    "allthemodium:unobtainium_upgrade_smithing_template",
    "kubejs:silent_vibranium_plate",
    "allthemodium:unobtainium_ingot"
  )
  event.shaped(Item.of("silentgear:fluffy_puff", 4), ["WsW", "sss", "WsW"], {
    W: "#c:wools",
    s: "minecraft:string"
  })

  event.shaped(Item.of("silentgear:bort", 8), ["CCC", "CDC", "CCC"], {
    D: "#c:gems/diamond",
    C: "minecraft:clay_ball"
  })

  event.remove({ id: "create:crushing/crimsite_recycling" })
  event
    .custom({
      type: "create:crushing",
      ingredients: [
        {
          item: "create:crimsite"
        }
      ],
      processing_time: 250,
      results: [
        {
          chance: 0.4,
          id: "silentgear:raw_crimson_iron"
        },
        {
          chance: 0.4,
          id: "silentgear:crimson_iron_nugget"
        },
        {
          chance: 0.4,
          id: "alltheores:iron_clump"
        },
        {
          chance: 0.4,
          id: "minecraft:iron_nugget"
        }
      ]
    })
    .id("create:crushing/crimsite")
})
