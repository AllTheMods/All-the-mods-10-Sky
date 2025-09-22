// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {


    function energize(output, energy, input) {
        allthemods.recipes.powah.energizing(output, energy, input)
            .id(`allthemods:powah/energizing/${output.getId().split(':')[1]}`)
    }

    function bulkEnergize(output, energy, input, amount) {
        if(!amount) amount = 1
        let id = output.getId().split(':')[1]
        let loop = 0
        let ingredients = []
        while (loop <= 5) {
            for(let item = 1;item <= amount; item++ ){
                ingredients.push(input);
            }
            allthemods.recipes.powah.energizing(Item.of(output.item, (loop + amount) / amount), energy * (ingredients.length / amount), ingredients)
                .id(`allthemods:powah/energizing/${id}_${(loop + amount) / amount}`)
            loop = loop + amount
        }
    }

    allthemods.remove({ id: 'powah:energizing/uraninite_from_ore' })
    energize(Item.of('powah:uraninite', 5), 50000, [Ingredient.of('#c:ores/uraninite_regular')])
    bulkEnergize(Item.of('ae2:charged_certus_quartz_crystal'), 20000, Ingredient.of('#c:gems/certus_quartz'))

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.