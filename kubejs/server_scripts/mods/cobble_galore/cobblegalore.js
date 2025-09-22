ServerEvents.recipes(allthemods => {
    // Stone generator
    allthemods.remove({ id: 'cobblegengalore:crafting/block_gen_stone'})
    allthemods.shaped('cobblegengalore:block_gen_stone', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:cobblestone',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'minecraft:glass'
    })

    // Copper Generator
    allthemods.remove({ id: 'cobblegengalore:crafting/block_gen_copper' })
    allthemods.shaped('cobblegengalore:block_gen_copper', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:copper_ingot',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_stone'
    })

    // Iron Generator
    allthemods.remove({ id: 'cobblegengalore:crafting/block_gen_iron'})
    allthemods.shaped('cobblegengalore:block_gen_iron', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:iron_ingot',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_copper'
    })

    // Gold Generator
    allthemods.remove({ id: 'cobblegengalore:crafting/block_gen_gold'})
    allthemods.shaped('cobblegengalore:block_gen_gold', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:gold_ingot',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_iron'
    })

    // Emerald Generator
    allthemods.remove({ id: 'cobblegengalore:crafting/block_gen_emerald'})
    allthemods.shaped('cobblegengalore:block_gen_emerald', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:emerald',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_gold'
    })

    // Diamond Generator
    allthemods.remove({ id: 'cobblegengalore:crafting/block_gen_diamond'})
    allthemods.shaped('cobblegengalore:block_gen_diamond', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:diamond',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_emerald'
    })

    // Netherite Generator
    allthemods.remove({ id: 'cobblegengalore:crafting/block_gen_netherite'})
    allthemods.shaped('cobblegengalore:block_gen_netherite', [
        'AAA',
        'WBL',
        'AAA'
    ], {
        A: 'minecraft:netherite_ingot',
        W: '#c:buckets/water',
        L: '#c:buckets/lava',
        B: 'cobblegengalore:block_gen_diamond'
    })
    })