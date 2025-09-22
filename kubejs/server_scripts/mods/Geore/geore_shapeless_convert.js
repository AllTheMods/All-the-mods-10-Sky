// Geo Ore Storage Block to Shard Shapeless Recipe
ServerEvents.recipes(event => 
    {
        const geoOres = [
            "coal", "copper", "diamond", "emerald", "gold", "iron", "lapis", "quartz", "redstone", "ancient_debris",
            "ruby", "sapphire", "topaz", "zinc", "uraninite", "black_quartz", "aluminum", "lead",
            "nickel", "osmium", "platinum", "silver", "tin", "uranium"
        ]

        geoOres.forEach(name => {
            event.shapeless(
                Item.of(`geore:${name}_shard`, 4),
                [Item.of(`geore:${name}_block`)]
            ).id(`allthemods:geoore/shapeless/${name}_block`)
        })
    }
)
