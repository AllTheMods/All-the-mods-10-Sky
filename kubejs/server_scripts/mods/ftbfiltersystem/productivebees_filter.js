"use strict"

function is_productive_bee_cage(item_stack, type) {
  const id = item_stack.id
  if (id !== "productivebees:bee_cage" && id !== "productivebees:sturdy_bee_cage") return false
  const custom_data = item_stack.components.get("minecraft:custom_data")
  if (!custom_data || !custom_data.contains("type")) return false
  return custom_data.copyTag().getString("type") === type
}

FTBFilterSystemEvents.customFilter("productivebeescage", (event) => {
  if (is_productive_bee_cage(event.getStack(), event.getData())) {
    event.success()
  } else {
    event.cancel()
  }
})
