// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
ServerEvents.recipes(event => {
	event.remove({ id: `modern_industrialization:quarry/bronze` });
    let addQuarry = (id, eu, duration, inputItem, inputChance, outputs) => {
        event.custom(
            {
                type: 'modern_industrialization:quarry',
                eu: eu,
                duration: duration,
                item_inputs: {
                    item: inputItem,
                    amount: 1,
                    probability: inputChance
                },
                item_outputs: outputs
            }
        ).id(`atm:quarry/steam/${id}`)
    }

 /*    addQuarry('test', 2, 100, 'minecraft:dirt', 0.01, 
        [
            { item: 'minecraft:cobblestone', amount: 1, probability: 0.2 },
            { item: 'minecraft:stone', amount: 1, probability: 0.5 }
        ]
    ) */
	    addQuarry('bronze', 4, 600, 'modern_industrialization:bronze_drill', 0.04, 
        [
            { item: 'minecraft:iron_ore', amount: 1, probability: 0.4 },
            { item: 'minecraft:coal_ore', amount: 1, probability: 0.4 },
            { item: 'modern_industrialization:lignite_coal_ore', amount: 1, probability: 0.24 },
            { item: 'minecraft:copper_ore', amount: 1, probability: 0.2 },
            { item: 'alltheores:tin_ore', amount: 1, probability: 0.3 },
            { item: 'minecraft:gold_ore', amount: 1, probability: 0.15 },
            { item: 'minecraft:redstone_ore', amount: 1, probability: 0.2 },
            { item: 'alltheores:osmium_ore', amount: 1, probability: 0.12 },
			{ item: 'modern_industrialization:antimony_ore', amount: 1, probability: 0.1 }
        ]
    )
})
	
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.