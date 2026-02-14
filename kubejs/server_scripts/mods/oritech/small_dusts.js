ServerEvents.tags("item", (allthemods) => {
  let dusts = [
    "oritech:small_copper_dust",
    "oritech:small_nickel_dust",
    "oritech:small_platinum_dust",
    "oritech:small_iron_dust",
    "oritech:small_gold_dust",
    "oritech:small_uranium_dust",
    "oritech:small_plutonium_dust"
  ]
  let dustsUnTagged = ["copper", "nickel", "platinum", "iron", "gold", "uranium", "plutonium"]
  allthemods.add("c:tiny_dusts", dusts)
  function dust(material) {
    allthemods.add(`c:tiny_dusts/${material}`, [`oritech:small_${material}_dust`])
  }

  for (let i = 0; i <= dustsUnTagged.length; i++) {
    dust(dustsUnTagged[i])
  }
})
