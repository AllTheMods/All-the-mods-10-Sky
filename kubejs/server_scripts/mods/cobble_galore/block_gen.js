// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    function gen(out, left, right, speed, below) {
        let recipe = {
            "type": "cobblegengalore:blockgen",
            "result": out,
            "left": {
                "Name": left
            },
            "right": {
                "Name": right
            },
            "speed": speed || 1,
            "consumeRight": true
        }

        if(below) {
            recipe.modifier = {
                "Name": below
            }
        }

        allthemods.custom(recipe).id(`allthemods:cobble_galore/blockgen/${out.id.split(':')[1]}`)
    }

    gen(Item.of('minecraft:end_stone', 1), 'exdeorum:witch_water', 'minecraft:lava', 1, 'minecraft:glowstone')
    gen(Item.of('minecraft:netherrack', 1), 'exdeorum:witch_water', 'minecraft:lava', 1, 'minecraft:redstone_block')
    gen(Item.of('forbidden_arcanus:darkstone', 1), 'exdeorum:witch_water', 'minecraft:lava', 1, 'forbidden_arcanus:arcane_crystal_block')
    gen(Item.of('allthemodium:ancient_stone', 1), 'minecraft:packed_ice', 'allthemodium:soul_lava', 1, 'allthemodium:allthemodium_block')

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.