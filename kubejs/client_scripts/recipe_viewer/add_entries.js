﻿// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $CreatingFluxRecipe = Java.loadClass('sonar.fluxnetworks.client.jei.CreatingFluxRecipe')
const $CreatingFluxRecipeCategory = Java.loadClass('sonar.fluxnetworks.client.jei.CreatingFluxRecipeCategory')

RecipeViewerEvents.addEntries('item', allthemods =>{

    let jeiRuntime = global.jeiRuntime
    if(!jeiRuntime) {
        console.log('Jei Runtime not found, skipping recipes')
        return
    }

    let RecipeManager = jeiRuntime.getRecipeManager()
    global.flux.forEach(recipe => {
        let customFlux = new $CreatingFluxRecipe(recipe.baseBlock, recipe.clickedBlock, recipe.inputItem, recipe.outputItem)
        RecipeManager.addRecipes($CreatingFluxRecipeCategory.RECIPE_TYPE, [customFlux])
    })

    allthemods.add('compactmachines:new_machine[compactmachines:machine_color="#C95B13",compactmachines:room_template="compactmachines:tiny"]')
    allthemods.add('compactmachines:new_machine[compactmachines:machine_color="#D4D2D2",compactmachines:room_template="compactmachines:small"]')
    allthemods.add('compactmachines:new_machine[compactmachines:machine_color="#FBF236",compactmachines:room_template="compactmachines:normal"]')
    allthemods.add('compactmachines:new_machine[compactmachines:machine_color="#211B2E",compactmachines:room_template="compactmachines:large"]')
    allthemods.add('compactmachines:new_machine[compactmachines:machine_color="#423F42",compactmachines:room_template="compactmachines:colossal"]')
    allthemods.add('compactmachines:new_machine[compactmachines:machine_color="#43D6CD",compactmachines:room_template="compactmachines:giant"]')
    allthemods.add('compactmachines:new_machine[compactmachines:machine_color="#7B2FBE",compactmachines:room_template="compactmachines:soaryn"]')
    allthemods.add('compactmachines:new_machine[compactmachines:machine_color="#00FF00",compactmachines:room_template="compactmachines:farming"]')

    allthemods.add('ironfurnaces:allthemodium_furnace')
    allthemods.add('ironfurnaces:vibranium_furnace')
    allthemods.add('ironfurnaces:unobtainium_furnace')
    allthemods.add('ironfurnaces:upgrade_allthemodium')
    allthemods.add('ironfurnaces:upgrade_vibranium')
    allthemods.add('ironfurnaces:upgrade_unobtainium')
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.