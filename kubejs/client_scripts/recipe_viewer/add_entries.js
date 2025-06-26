// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
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
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.