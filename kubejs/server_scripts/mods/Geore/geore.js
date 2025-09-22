ServerEvents.recipes(event => {


    /**
     * @param {string} input
     * @param {{tag: string, [amount]: number}} fluid
     * @param {{item: string, [amount]: number}} output
     * @param {boolean} [consumeCast]
     */
    function addCasting(input, fluid, output, consumeCast) {
        event.custom(
            {
                "type": "productivemetalworks:block_casting",
                "cast": {
                    "item": input
                },
                "consume_cast": consumeCast || true,
                "fluid": {
                    "amount": fluid.amount || 900,
                    "tag": fluid.tag
                },
                "result": {
                    "count": output.amount || 1,
                    "id": output.item
                }
            }
        )
    }

    [
        'emerald',
        'diamond',
        'gold',
        'iron',
        'copper',
        'redstone',
        'lapis',
        'quartz',
        'ancient_debris',
        'aluminum',
        'tin',
        'silver',
        'uranium',
        'platinum',
        'osmium',
        'nickel',
        'lead',
        'zinc',
        'ruby',
        'sapphire',
        'topaz'
    ].forEach(material => {
        addCasting('allthecompressed:sand_1x', {tag: `c:molten_${material}`}, {item: `geore:budding_${material}`})
    })

    addCasting('allthecompressed:sand_1x', {tag: 'c:molten_carbon'}, {item: 'geore:budding_coal'})
    addCasting('allthecompressed:sand_1x', {tag: 'c:molten_amethyst'}, {item: 'minecraft:budding_amethyst'})
    addCasting('allthecompressed:red_sand_1x', {tag: 'c:molten_quartz'}, {item: 'geore:budding_black_quartz'})

})