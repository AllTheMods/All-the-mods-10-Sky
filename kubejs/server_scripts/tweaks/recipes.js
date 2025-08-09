// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.replaceInput({ mod: "railcraft"}, "railcraft:steel_shovel", "mekanismtools:steel_shovel")

    // Concrete from Concrete Powder using Water Buckets
    const colors = [
        'white', 'yellow', 'orange', 'red', 'pink', 'magenta', 'purple', 'light_blue', 'cyan', 'blue', 'lime', 'green', 'brown', 'light_gray', 'gray', 'black'
    ];

    colors.forEach(color => {
        allthemods.shaped(
            Item.of(`minecraft:${color}_concrete`, 8),
            ['CCC','CBC','CCC'],
            {
                C: `minecraft:${color}_concrete_powder`,
                B: 'minecraft:water_bucket'
            }
        )
    });

    allthemods.shapeless(
        Item.of('minecraft:potion[potion_contents={potion:"minecraft:water"}]', 1),
        [
            'minecraft:glass_bottle',
            'mysticalagriculture:water_essence'
        ]
    )

    allthemods.shapeless(
        Item.of('minecraft:honey_block'),
        [
            '9x mysticalagriculture:honey_essence'
        ]
    )

    allthemods.remove({ id: 'crystalix:crystalix_wand' })
    allthemods.shaped(
        Item.of('crystalix:crystalix_wand'),
        [
            '  D',
            ' S ',
        ], {
            S: '#c:rods/wooden',
            D: 'minecraft:diamond'
        }
    )

    allthemods.remove({ id: 'minecraft:netherite_upgrade_smithing_template' })
    allthemods.shaped(
        Item.of('minecraft:netherite_upgrade_smithing_template'),
        [
            'DTD',
            'DND',
            'DDD'
        ], {
            D: '#c:gems/diamond',
            N: '#c:ingots/netherite',
            T: 'apotheosis:diamond_upgrade_smithing_template'
        }
    )

    allthemods.smelting(Item.of('mysticalagriculture:soulstone'), Item.of('mysticalagriculture:soulium_dust'), 0.1)

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.  
