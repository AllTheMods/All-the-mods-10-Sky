// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  function basin( /** @type {$ItemStack_} */ output, /** @type {string} */ fluidName, /** @type {number} */ fluidAmount, /** @type {number} */ duration) {
    let itemStack = Item.of(output)
    allthemods.custom(
      {
        "type": "integrateddynamics:drying_basin",
        "input_fluid": {
          "id": fluidName,
          "amount": fluidAmount
        },
        "duration": duration || 300,
        "output_item": {
          "id": itemStack.id,
          "count": itemStack.count
        }
      }
    )
  }

  function mechanicalBasin( /** @type {$ItemStack_} */ output, /** @type {string} */ fluidName, /** @type {number} */ fluidAmount, /** @type {number} */ duration) {
    let itemStack = Item.of(output)
    allthemods.custom(
      {
        "type": "integrateddynamics:mechanical_drying_basin",
        "input_fluid": {
          "id": fluidName,
          "amount": fluidAmount
        },
        "duration": duration || 30,
        "output_item": {
          "id": itemStack.id,
          "count": itemStack.count
        }
      }
    )
  }

  let xpFluid = [
    'industrialforegoing:essence',
    'mob_grinding_utils:fluid_xp',
    'pneumaticcraft:memory_essence',
    'sophisticatedcore:xp_still',
    'justdirethings:xp_fluid_source',
    'create_enchantment_industry:experience'
  ]
  xpFluid.sort()
  for (var i in xpFluid) {
    let currentFluid = xpFluid[i]
    basin('create:experience_block', currentFluid, 1000)
    mechanicalBasin('create:experience_block', currentFluid, 1000)
  }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

