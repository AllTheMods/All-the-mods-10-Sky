ServerEvents.recipes(allthemods => {
    allthemods.shaped(Item.of('minecraft:netherite_upgrade_smithing_template', 2), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:diamond',
        U: 'minecraft:netherite_upgrade_smithing_template',
        N: 'minecraft:netherrack'
    });

    allthemods.shapeless('minecraft:snowball', [
        '#c:slime_balls',
        '#c:dyes/white'
    ])
});
