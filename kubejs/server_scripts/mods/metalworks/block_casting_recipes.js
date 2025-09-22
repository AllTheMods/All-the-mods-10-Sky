ServerEvents.recipes(event => 
    {
        // Map of block casting recipes
        const blockCastingItems = [
            { name: 'coal', id: 'minecraft:coal_block', fluid: 'productivemetalworks:molten_carbon', amount: 900 },
            { name: 'quartz', id: 'minecraft:quartz_block', fluid: 'productivemetalworks:molten_quartz', amount: 400 }
        ]

        blockCastingItems.forEach(item => {
            event.custom({
            type: 'productivemetalworks:block_casting',
            cast: [],
            consume_cast: false,
            fluid: {
                amount: item.amount,
                fluid: item.fluid
            },
            result: {
                count: 1,
                id: item.id
            }
            }).id(`allthemods:metalworks/casting/block/${item.name}`)
        })
    }
)
