let $Stopwatch = Java.loadClass("com.google.common.base.Stopwatch")

KubeJSTweaks.beforeRecipes((event) => {
  let timer = $Stopwatch.createStarted()

  event.dumpErroringRecipes()

  // Upgrade from forge to neoforge conditions
  event.fixCondition(["apotheosis:book", /^silentgear:woodcutting\//, "silentgear:sapling/netherwood"])

  // Adds mod condition based on type, using the namespace
  event
    .getEntry("productivebees:elementalcraft/pureinfusion/pure_crystal_bee")
    .forEach((entry) => entry.addModConditionFromType())

  // Fix "item" -> "id"
  event.fixItemAtKey(
    [/^create:crushing\/gloomslate_/, /^create:crushing\/sculk_stone_/, /^create:cutting\/.*echo_/],
    "results"
  )

  // Fix farmer delight tool type that was renamed on 1.21.1
  // sound changed
  // and their result is now an array of a custom codec that have now "item" as a key
  event
    .getEntry([/^farmersdelight:cutting\/echo_/, "farmersdelight:integration/silentgear/cutting/netherwood"])
    .forEach((entry) => {
      entry.replaceValueAtKey("tool", "type", "farmersdelight:tool_action", "farmersdelight:item_ability")

      entry.fromPath("sound").ifPresent((result) => {
        result.first.add("sound", { sound_id: result.second })
      })
      if (entry.id() == "farmersdelight:integration/silentgear/cutting/netherwood") {
        let resultArray = entry.json().get("result")
        if (resultArray == null) return
        for (let item of resultArray) {
          if (!item.has("item")) continue
          item.add("item", {
            id: item.get("item")
          })
        }
      }
    })

  // Simple key renaming to match current changes
  event.getEntry(/^createaddition:compat\/immersiveengineering\/rolling\//).forEach((entry) => {
    entry.renameKey("result", "results", true)
    entry.renameKey("input", "ingredients", true)
  })

  // Simple key renaming to match current changes
  event.getEntry("createaddition:compat/ae2/charged_certus_quartz").forEach((entry) => {
    entry.renameKey("result", "results", true)
    entry.renameKey("ingredient", "ingredients", true)
  })

  // this is the way now with biome_predicates
  event.getEntry("createaddition:compat/immersiveengineering/sphalerite").forEach((entry) => {
    entry.json().add("biome_predicates", [["minecraft:is_overworld"]])
  })

  //old recipe
  event.disable("supplementaries:botany_flax")
  event.disable("oritech:compat/enderio/firecrafting/sculk")
  event.disable("oritech:compat/enderio/firecrafting/endstone")

  // Scans items on result and add them back as conditions, izi fix
  event.getEntry(/^farmingforblockheads:market\//).forEach((entry) => {
    entry.addConditionsFromKey("result")
  })

  // Scans items/tags on ingredients and add them back as conditions
  event.getEntry("create:crafting/tree_fertilizer").forEach((entry) => {
    entry.addConditionsFromKey("ingredients")
  })

  // Ignore warnings because silent gear ingredients
  // that contains "silentgear:material" are not ready
  // yet, but are valid in a later stage
  event.getEntry("@silentgear").forEach((entry) => {
    let ings = entry.json().get("ingredients")
    let keys = entry.json().get("key")

    if (ings != null) {
      for (let ing of ings) {
        let type = ing.get("type")
        if (type != null) {
          if (type.getAsString() == "silentgear:material") {
            entry.ignoreWarning()
          }
        }
      }
    }

    if (keys != null) {
      for (let key of keys.asMap().values()) {
        let type = key.get("type")
        if (type != null) {
          if (type.getAsString() == "silentgear:material") {
            entry.ignoreWarning()
          }
        }
      }
    }
  })

  event.getEntry(/^create:.*\/compat\/silentgems\//).forEach((entry) => {
    entry.addConditionsFromKey("ingredients")
  })

  console.log(`Fixing recipes took ${timer.stop().elapsed("milliseconds")} ms...`)
})
