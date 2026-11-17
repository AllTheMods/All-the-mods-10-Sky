// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  // Void miner tiers: 1 Litherite, 2 Erodium, 3 Kyronite, 4 Pladium, 5 Ionite, 6 Aethium, 7 Nanorite, 8 Xerothium.
  // Ores that would skip existing progression only drop from this tier up.
  // Keys are recipe paths under envirotech:envirotech/void_miner_drops/.
  const minTier = {
    // Kyronite (Vibranium CCU)
    "ore/overworld/diamond": 3,
    "ore/overworld/deepslate_diamond": 3,
    "ore/overworld/emerald": 3,
    "ore/overworld/deepslate_emerald": 3,
    "ore/overworld/uranium": 3,
    "ore/overworld/yellorite": 3,
    "ore/thorium": 3,
    "ore/uraninite": 3,
    "ore/uraninite_dense": 3,
    "ore/uraninite_poor": 3,
    // Pladium (Vibranium CCU)
    "ore/nether/ancient_debris": 4,
    "ore/nether/oc_iesnium": 4,
    "ore/overworld/de_draconium": 4,
    "ore/overworld/de_draconium_deepslate": 4,
    "ore/nether/de_draconium": 4,
    "ore/end/de_draconium": 4,
    // Ionite (Unobtainium CCU)
    "ore/iridium": 5
  }

  // AlmostUnified stone variants (config/almostunified/unification/materials.json), plus alltheores' "other_"
  const stonePrefixes = [
    "stone_",
    "andesite_",
    "deepslate_",
    "diorite_",
    "granite_",
    "nether_",
    "end_",
    "ancient_",
    "other_"
  ]

  function tagItemIds(tag) {
    let ids = []
    try {
      Ingredient.of(`#${tag}`).itemIds.forEach((id) => ids.push(String(id)))
    } catch (e) {
      // missing tag counts as empty
    }
    return ids
  }

  // The drops use "raw:item_tag" with a "first"/"first_preferred" selector, which ignores AlmostUnified and
  // can pick an item AU hides (e.g. mekanism:tin_ore). Pin each ore tag to AU's target, stone variant.
  function unifiedOre(tag, tagIds) {
    let target = null
    try {
      let stack = AlmostUnified.getTagTargetItem(tag)
      if (stack != null && !stack.isEmpty()) target = String(stack.id)
    } catch (e) {
      console.warn(`[envirotech] AlmostUnified lookup failed for ${tag}: ${e}`)
    }
    if (target == null) return null
    let namespace = target.split(":")[0]
    let path = target.split(":")[1]
    for (let prefix of stonePrefixes) {
      if (path.startsWith(prefix)) {
        let plain = `${namespace}:${path.substring(prefix.length)}`
        if (tagIds.indexOf(plain) >= 0) return plain
      }
    }
    return target
  }

  function tiersFrom(min, existing) {
    let tiers = []
    for (let t = min; t <= 8; t++) {
      if (existing == null || existing.indexOf(t) >= 0) tiers.push(t)
    }
    return tiers
  }

  let rewrites = []
  let removals = []

  allthemods.forEachRecipe({ type: "envirotech:void_miner_drops" }, (recipe) => {
    let id = String(recipe.getId())
    let key = id.split("void_miner_drops/")[1]
    let json = JSON.parse(String(recipe.json))
    let changed = false

    let tag = json.item["raw:item_tag"]
    if (tag != null && tag.startsWith("c:ores/")) {
      let ids = tagItemIds(tag)
      if (ids.length == 0) {
        // No ore in the pack for this tag: drop the entry so JEI doesn't list an empty output.
        removals.push(id)
        return
      }
      let target = unifiedOre(tag, ids)
      if (target != null) {
        json.item = { "raw:item": target, count: json.item.count == null ? 1 : json.item.count }
        changed = true
      }
    }

    let min = minTier[key]
    if (min != null) {
      json.config.forEach((entry) => {
        entry.tiers = tiersFrom(min, entry.tiers == null ? null : entry.tiers)
      })
      changed = true
    }

    if (changed) {
      delete json["neoforge:conditions"]
      rewrites.push({ id: id, key: key, json: json })
    }
  })

  removals.forEach((id) => allthemods.remove({ id: id }))
  rewrites.forEach((r) => {
    allthemods.remove({ id: r.id })
    allthemods.custom(r.json).id(`allthemods:envirotech/void_miner_drops/${r.key}`)
  })

  console.info(`[envirotech] void miner drops: ${rewrites.length} rewritten, ${removals.length} empty ore tags removed`)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
