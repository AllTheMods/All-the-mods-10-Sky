ServerEvents.recipes((event) => {
  /**
   * @param {string} input
   * @param {{fluid: string, [amount]: number} | {tag: string, [amount]: number}} fluid
   * @param {{item: string, [amount]: number}} output
   * @param {boolean} [consumeCast]
   */
  function addCasting(input, fluid, output, consumeCast) {
    const amt = fluid.amount || 900
    const obj = fluid.fluid ? { amount: amt, fluid: fluid.fluid } : { amount: amt, tag: fluid.tag }

    event.custom({
      type: "productivemetalworks:block_casting",
      cast: {
        item: input
      },
      consume_cast: consumeCast ?? true,
      fluid: obj,
      result: {
        count: output.amount || 1,
        id: output.item
      }
    })
  }

  ;["emerald", "diamond", "redstone", "lapis", "quartz", "ancient_debris", "ruby", "sapphire", "topaz"].forEach(
    (material) => {
      addCasting(
        "allthecompressed:sand_1x",
        { tag: `c:molten_${material}`, amount: 900 },
        { item: `geore:budding_${material}` }
      )
    }
  )
  ;[
    "gold",
    "iron",
    "copper",
    "aluminum",
    "tin",
    "silver",
    "uranium",
    "platinum",
    "osmium",
    "nickel",
    "lead",
    "zinc"
  ].forEach((material) => {
    addCasting(
      "allthecompressed:sand_1x",
      { tag: `c:molten_${material}`, amount: 810 },
      { item: `geore:budding_${material}` }
    )
  })

  addCasting("allthecompressed:sand_1x", { tag: "c:molten_carbon" }, { item: "geore:budding_coal" })
  addCasting("allthecompressed:sand_1x", { tag: "c:molten_amethyst" }, { item: "minecraft:budding_amethyst" })
  addCasting("allthecompressed:red_sand_1x", { tag: "c:molten_quartz" }, { item: "geore:budding_black_quartz" })
  addCasting(
    "allthecompressed:sand_5x",
    { fluid: "allthemodium:molten_unobtainium", amount: 7290 },
    { item: "geore:budding_unobtainium" }
  )
  addCasting(
    "allthecompressed:sand_5x",
    { fluid: "allthemodium:molten_vibranium", amount: 7290 },
    { item: "geore:budding_vibranium" }
  )
  addCasting(
    "allthecompressed:sand_5x",
    { fluid: "allthemodium:molten_allthemodium", amount: 7290 },
    { item: "geore:budding_allthemodium" }
  )
})
