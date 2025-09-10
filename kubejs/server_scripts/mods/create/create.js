// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    //Create crushing recipes
    let crushingIngredients = [
        "#c:deepslate_blocks",
        "minecraft:end_stone",
        "minecraft:blackstone",
        "minecraft:sand",
        "minecraft:netherrack",
        "exdeorum:crushed_netherrack"
    ].map(ing => Ingredient.of(ing))

    let crushingResults = [
        "exdeorum:crushed_deepslate",
        "exdeorum:crushed_end_stone",
        "exdeorum:crushed_blackstone",
        "exdeorum:dust",
        "exdeorum:crushed_netherrack",
        'create:cinder_flour'
    ].map(stack => Item.of(stack))

    /**
     * @param {Internal.Ingredient[]} ingredients
     * @param {Internal.ItemStack[]} results
     */
    function crushing(ingredients, results) {
        const recipe = {
            type: "create:crushing",
            ingredients: ingredients,
            results: results
        }
        
        let idType = ingredients[0].toJson().asMap().item || ingredients[0].toJson().asMap().tag
        const defaultId = `allthemods:create/crushing/${idType.getAsString().split(":")[1]}`
        allthemods.custom(recipe).id(defaultId)
    }

    for (let i = 0; i < crushingIngredients.length; i++) {
        crushing([crushingIngredients[i]], [crushingResults[i]])
    }
    //Create milling recipes
    let millingIngredients = [
        "exdeorum:crushed_netherrack"
    ].map(ing => Ingredient.of(ing))

    let millingResults = [
        "minecraft:red_sand"
    ].map(stack => Item.of(stack))

    /**
     * @param {Internal.Ingredient[]} ingredients
     * @param {Internal.ItemStack[]} results
     */
    function milling(ingredients, results) {
        const recipe = {
            type: "create:milling",
            ingredients: ingredients,
            results: results
        }
        
        let idType = ingredients[0].toJson().asMap().item || ingredients[0].toJson().asMap().tag
        const defaultId = `allthemods:create/milling/${idType.getAsString().split(":")[1]}`
        allthemods.custom(recipe).id(defaultId)
    }

    for (let i = 0; i < millingIngredients.length; i++) {
        milling([millingIngredients[i]], [millingResults[i]])
    }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.