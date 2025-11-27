// Geo Ore Storage Block to Shard Shapeless Recipe
ServerEvents.recipes((event) => {
  const geoOres = [
    "coal",
    "copper",
    "diamond",
    "emerald",
    "gold",
    "iron",
    "lapis",
    "quartz",
    "redstone",
    "ancient_debris",
    "ruby",
    "sapphire",
    "topaz",
    "zinc",
    "uraninite",
    "black_quartz",
    "aluminum",
    "lead",
    "nickel",
    "osmium",
    "platinum",
    "silver",
    "tin",
    "uranium",
    "allthemodium",
    "vibranium",
    "unobtainium"
  ]

  geoOres.forEach((name) => {
    let shards = Item.of(`geore:${name}_shard`, 4)
    let block = Item.of(`geore:${name}_block`)

    event.shapeless(shards, [block]).id(`allthemods:geoore/shapeless/${name}_block`)

    event
      .custom({
        type: "functionalstorage:custom_compacting",
        higher_input: block.toJson(),
        lower_input: shards.toJson()
      })
      .id(`allthemods:functionalstorage/compacting/${name}_shard_to_${name}_block`)
  })
})
