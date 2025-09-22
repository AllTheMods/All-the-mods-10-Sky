// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    function extractor({output, target, adjacent, catalyst, directions, ticks, waterlogged}) {
        let recipe = {
            "type": "xycraft_machines:extractor",
            "adjacent": [],
            "target": rule(target.type, target.block),
            "output": {
                "count": output.count || 1,
                "id": output.item
            },
            "ticks": ticks,

        };

        if (catalyst) {
            recipe.catalyst = rule(catalyst.type, catalyst.block);
        }

        if (waterlogged) {
            recipe.waterlogged_fluid = waterlogged
        }

        if (directions) {
            recipe.valid_directions = directions;
        }

        if (output.components) {
            recipe.output.components = output.components;
        }

        if(adjacent) {
            adjacent.forEach(adj => {
                recipe.adjacent.push(rule(adj.type, adj.block));
            });
        }

        allthemods.custom(recipe).id(`allthemods:xycraft/extractor/${target.block.split(':').pop()}_to_${output.item.split(":").pop()}`);
    }

    function rule (type, block, property) {

        switch(type) {
            case "xycraft_core:block_tag_rule" :
                return {
                    "predicate_type": type,
                    "tag": block
                }
            case "xycraft_core:block_rule" :
                return {
                    "predicate_type": type,
                    "block": block
                }
            case "xycraft_core:fluid_type_rule" :
                return {
                    "predicate_type": type,
                    "fluid_type": block
                }
            case "xycraft_core:fluid_tag_rule" :
                return {
                    "predicate_type": type,
                    "tag": block
                }
            case "xycraft_core:block_state_rule" :
                return {
                    "predicate_type": type,
                    "block_state": block
                }
            case "xycraft_core:property_rule" :
                return {
                    "predicate_type": type,
                    "propery":property.propery,
                    "value": property.value
                }
            case "xycraft_core:fuzzy_block_state_rule" :
                return {
                    "predicate_type" : type,
                    "block": block.block,
                    "properties": block.properties
                }
        }
    }

    extractor({
        output: { item: "create:veridium", count: 1 },
        target: { type:  "xycraft_core:block_rule", block: "create:veridium" },
        adjacent: [
            { type: "xycraft_core:block_rule", block: "minecraft:blue_ice" },
            { type: "xycraft_core:fluid_type_rule", block: "minecraft:lava" },
        ],
        ticks: 40,
    })

    extractor({
        output: { item: "create:crimsite", count: 1 },
        target: { type:  "xycraft_core:block_rule", block: "create:crimsite" },
        adjacent: [
            { type: "xycraft_core:block_rule", block: "minecraft:blue_ice" },
            { type: "xycraft_core:fluid_type_rule", block: "minecraft:lava" },
        ],
        ticks: 40,
    })

    extractor({
        output: { item: "create:asurine", count: 1 },
        target: { type:  "xycraft_core:block_rule", block: "create:asurine" },
        adjacent: [
            { type: "xycraft_core:block_rule", block: "minecraft:blue_ice" },
            { type: "xycraft_core:fluid_type_rule", block: "minecraft:lava" },
        ],
        ticks: 40,
    })

    extractor({
        output: { item: "create:ochrum", count: 1 },
        target: { type:  "xycraft_core:block_rule", block: "create:ochrum" },
        adjacent: [
            { type: "xycraft_core:block_rule", block: "minecraft:blue_ice" },
            { type: "xycraft_core:fluid_type_rule", block: "minecraft:lava" },
        ],
        ticks: 40,
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.