ServerEvents.recipes(event => 
    {
        // Molten Fluids to Gem Casting Recipes
        const gemCastingItems = [
            { name: 'glowstone', id: 'minecraft:glowstone_dust', fluid: 'productivemetalworks:molten_glowstone' },
            { name: 'redstone', id: 'minecraft:redstone', fluid: 'productivemetalworks:molten_redstone' },
            { name: 'coal', id: 'minecraft:coal', fluid: 'productivemetalworks:molten_carbon' },
            { name: 'shulker', id: 'minecraft:shulker_shell', fluid: 'productivemetalworks:molten_shulker_shell' }
        ]

        gemCastingItems.forEach(item => {
            event.custom({
            type: 'productivemetalworks:item_casting',
            cast: {
                item: 'productivemetalworks:gem_cast'
            },
            consume_cast: false,
            fluid: {
                amount: 100,
                fluid: item.fluid
            },
            result: {
                count: 1,
                id: item.id
            }
            }).id(`allthemods:metalworks/casting/gem/${item.name}`)
        })
    }
)