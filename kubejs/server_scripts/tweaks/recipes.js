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

    allthemods.remove('bibliocraft:tape_reel')
    allthemods.shaped(
        Item.of('bibliocraft:tape_reel'),
        [
            'SSS',
            'NYN',
            'SSS'
        ], {
            S: '#c:strings',
            N: '#c:nuggets/iron',
            Y: '#c:dyes/yellow' 
        }
    )

    allthemods.remove('rechiseled:chisel')
    allthemods.shaped(
        Item.of('rechiseled:chisel'),
        [
            '  S',
            ' W '
        ], {
            S: '#c:ingots/steel',
            W: '#c:rods/wooden'
        }
    )

    allthemods.smelting(Item.of('mysticalagriculture:soulstone'), Item.of('mysticalagriculture:soulium_dust'), 0.1)

    allthemods.shaped(
        Item.of('minecraft:heart_of_the_sea'), [
            'IDS',
            'DND',
            'SDI'
        ], {
            'I': 'minecraft:ink_sac',
            'D': 'justdirethings:celestigem',
            'S': 'minecraft:prismarine_shard',
            'N': 'minecraft:nautilus_shell',
        }
    )

    allthemods.shaped(
        Item.of('allthemodium:allthemodium_upgrade_smithing_template'), [
            'ITI',
            'IBI',
            'III'
        ], {
            'I': '#c:ingots/netherite',
            'T': 'minecraft:netherite_upgrade_smithing_template',
            'B': '#c:storage_blocks/allthemodium'
        }
    )

    allthemods.shaped(
        Item.of('allthemodium:vibranium_upgrade_smithing_template'), [
            'ITI',
            'IBI',
            'III'
        ], {
            'I': '#c:ingots/allthemodium',
            'T': 'allthemodium:allthemodium_upgrade_smithing_template',
            'B': '#c:storage_blocks/vibranium'
        }
    )

    allthemods.shaped(
        Item.of('allthemodium:unobtainium_upgrade_smithing_template'), [
            'ITI',
            'IAI',
            'III'
        ], {
            'I': '#c:ingots/vibranium',
            'T': 'allthemodium:vibranium_upgrade_smithing_template',
            'B': '#c:storage_blocks/unobtainium'
        }
    )
    
    allthemods.remove({id: 'minecraft:book'})
    allthemods.shapeless(
        Item.of('minecraft:book'),
        [
            '3x #c:paper',
            '#c:leathers'
        ]
    ).id('minecraft:book')
    
    allthemods.remove({id: 'enderio:wood_gear'})
    allthemods.shaped(
        Item.of('enderio:wood_gear'),
        [
            ' S ',
            'SNS',
            ' S '
        ], {
            S: '#c:rods/wooden',
            N: '#c:nuggets/iron',
        }
    )

    allthemods.remove({id: 'handcrafted:wood_plate'})
    allthemods.shaped(
        Item.of('handcrafted:wood_plate'),
        [
            'SSS',
            ' S '
        ], {
            S: '#minecraft:wooden_slabs',
        }
    )

    allthemods.remove({id: 'handcrafted:hammer'})
    allthemods.shaped(
        Item.of('handcrafted:hammer'),
        [
            ' IS',
            ' SI',
            'S  '
        ], {
            S: '#c:rods/wooden',
            I: '#c:ingots/iron',
        }
    )

    allthemods.remove({id: 'mcwwindows:bamboo_shutter'})
    allthemods.shaped(
        Item.of('mcwwindows:bamboo_shutter'),
        [
            'BB',
            'BB',
            'BB'
        ], {
            B: 'minecraft:bamboo',
        }
    )

    allthemods.remove({id: 'mysticalagriculture:watering_can'})
    allthemods.remove({id: 'mysticalagriculture:diamond_scythe'})

    allthemods.shapeless(
        Item.of('4x minecraft:quartz'),
        [
            '#c:storage_blocks/quartz'
        ]
    )

    allthemods.shapeless(
        Item.of('9x minecraft:nether_wart'),
        [
            'minecraft:nether_wart_block'
        ]
    )

    allthemods.shapeless(
        Item.of('4x minecraft:lapis_lazuli'),
        [
            'supplementaries:lapis_bricks'
        ]
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.  
