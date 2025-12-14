ServerEvents.recipes((allthemods) => {
  /**
   * @readonly
   * @enum {string}
   */
  const Materials = {
    Dirt: "minecraft:dirt",
    SoulSand: "minecraft:soul_sand",
    RedSand: "minecraft:red_sand",
    Gravel: "minecraft:gravel",
    Sand: "minecraft:sand",
    Dust: "exdeorum:dust",
    Netherrack: "exdeorum:crushed_netherrack",
    EndStone: "exdeorum:crushed_end_stone",
    Deepslate: "exdeorum:crushed_deepslate",
    Blackstone: "exdeorum:crushed_blackstone",
    Moss: "minecraft:moss_block"
  }

  /**
   * @readonly
   * @enum {string}
   */
  const Meshes = {
    STRING: "exdeorum:string_mesh",
    FLINT: "exdeorum:flint_mesh",
    IRON: "exdeorum:iron_mesh",
    GOLD: "exdeorum:golden_mesh",
    DIAMOND: "exdeorum:diamond_mesh",
    NETHERITE: "exdeorum:netherite_mesh"
  }

  ;[Meshes.FLINT, Meshes.IRON, Meshes.GOLD, Meshes.DIAMOND].forEach((mesh) => {
    allthemods.remove({ id: mesh })
  })

  const sieving = (output, material, config) => {
    config.forEach((entry) => {
      allthemods.recipes.exdeorum
        .sieve(Item.of(output), material, entry.mesh, {
          type: "minecraft:binomial",
          n: entry.amount || 1,
          p: entry.chance
        })
        .id(
          `allthemods:exdeorum/${entry.mesh.split(":")[1]}/${material.split(":")[1]}/${output.split(":")[0]}/${output.split(":")[1]}`
        )
    })
  }

  // ===== Gravel =====

  ;["create:veridium", "create:crimsite", "create:asurine", "xycraft_world:kivi", "create:ochrum"].forEach((ore) =>
    sieving(ore, Materials.Gravel, [
      { mesh: Meshes.IRON, chance: 0.04 },
      { mesh: Meshes.GOLD, chance: 0.06 },
      { mesh: Meshes.DIAMOND, chance: 0.07 },
      { mesh: Meshes.NETHERITE, chance: 0.08 }
    ])
  )

  allthemods.remove({ output: "minecraft:diamond", type: "exdeorum:sieve", mod: "exdeorum" })
  allthemods.remove({ output: "minecraft:emerald", type: "exdeorum:sieve", mod: "exdeorum" })

  sieving("minecraft:diamond", Materials.Gravel, [
    { mesh: Meshes.IRON, amount: 1, chance: 0.01 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.04 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.06 },
    { mesh: Meshes.NETHERITE, amount: 2, chance: 0.06 }
  ])

  sieving("minecraft:emerald", Materials.Gravel, [
    { mesh: Meshes.IRON, amount: 1, chance: 0.01 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.03 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.04 },
    { mesh: Meshes.NETHERITE, amount: 2, chance: 0.05 }
  ])

  // ===== Sand =====

  sieving("minecraft:cactus", Materials.Sand, [{ mesh: Meshes.DIAMOND, amount: 1, chance: 0.12 }])

  sieving("alltheores:fluorite", Materials.Sand, [
    { mesh: Meshes.IRON, amount: 1, chance: 0.15 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.15 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.15 },
    { mesh: Meshes.NETHERITE, amount: 2, chance: 0.12 }
  ])

  sieving("actuallyadditions:black_quartz", Materials.Sand, [
    { mesh: Meshes.IRON, amount: 1, chance: 0.1 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.11 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.11 },
    { mesh: Meshes.NETHERITE, amount: 2, chance: 0.11 }
  ])

  sieving("powah:uraninite", Materials.Sand, [
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.07 },
    { mesh: Meshes.NETHERITE, amount: 2, chance: 0.08 }
  ])

  sieving("allthemodium:allthemodium_nugget", Materials.Sand, [
    { mesh: Meshes.DIAMOND, chance: 0.01 },
    { mesh: Meshes.NETHERITE, chance: 0.06 }
  ])

  sieving("minecraft:kelp", Materials.Sand, [{ mesh: Meshes.DIAMOND, chance: 0.075 }])

  // ===== Dust =====

  sieving("forbidden_arcanus:arcane_crystal", Materials.Dust, [
    { mesh: Meshes.IRON, amount: 1, chance: 0.05 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.05 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.06 },
    { mesh: Meshes.NETHERITE, amount: 1, chance: 0.08 }
  ])

  sieving("alltheores:salt", Materials.Dust, [
    { mesh: Meshes.IRON, amount: 1, chance: 0.15 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.15 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.15 },
    { mesh: Meshes.NETHERITE, amount: 2, chance: 0.12 }
  ])
  ;["blue", "red", "green", "light", "dark"].forEach((color) => {
    sieving(`xycraft_world:xychorium_gem_${color}`, Materials.Dust, [
      { mesh: Meshes.FLINT, chance: 0.04 },
      { mesh: Meshes.IRON, chance: 0.05 },
      { mesh: Meshes.DIAMOND, chance: 0.06 },
      { mesh: Meshes.NETHERITE, chance: 0.08 }
    ])
  })

  sieving("alltheores:sulfur", Materials.Dust, [
    { mesh: Meshes.IRON, amount: 1, chance: 0.15 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.15 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.15 },
    { mesh: Meshes.NETHERITE, amount: 2, chance: 0.12 }
  ])

  // ===== Dirt =====

  sieving("minecraft:torchflower_seeds", Materials.Dirt, [
    { mesh: Meshes.IRON, amount: 1, chance: 0.08 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.08 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.11 },
    { mesh: Meshes.NETHERITE, amount: 2, chance: 0.11 }
  ])
  ;[
    "actuallyadditions:canola_seeds",
    "actuallyadditions:coffee_beans",
    "actuallyadditions:flax_seeds",
    "minecraft:rose_bush",
    "minecraft:sunflower",
    "silentgear:flax_seeds"
  ].forEach((seed) => {
    sieving(seed, Materials.Dirt, [
      { mesh: Meshes.FLINT, amount: 1, chance: 0.06 },
      { mesh: Meshes.IRON, amount: 1, chance: 0.08 },
      { mesh: Meshes.GOLD, amount: 1, chance: 0.08 },
      { mesh: Meshes.DIAMOND, amount: 1, chance: 0.11 },
      { mesh: Meshes.NETHERITE, amount: 2, chance: 0.11 }
    ])
  })

  // ===== Moss =====
  ;[
    "integrateddynamics:menril_sapling",
    "forbidden_arcanus:growing_edelwood",
    "ars_elemental:yellow_archwood_sapling"
  ].forEach((sapling) => {
    sieving(sapling, Materials.Moss, [
      { mesh: Meshes.IRON, chance: 0.01 },
      { mesh: Meshes.GOLD, chance: 0.02 },
      { mesh: Meshes.DIAMOND, chance: 0.03 },
      { mesh: Meshes.NETHERITE, chance: 0.04 }
    ])
  })

  // ===== Soul Sand =====

  sieving("mysticalagriculture:prosperity_shard", Materials.SoulSand, [
    { mesh: Meshes.IRON, amount: 1, chance: 0.2 },
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.2 },
    { mesh: Meshes.GOLD, amount: 1, chance: 0.2 },
    { mesh: Meshes.NETHERITE, amount: 2, chance: 0.18 }
  ])

  sieving("mysticalagriculture:soulium_dust", Materials.SoulSand, [
    { mesh: Meshes.DIAMOND, amount: 1, chance: 0.05 },
    { mesh: Meshes.NETHERITE, amount: 1, chance: 0.1 }
  ])

  // ===== Blackstone =====

  sieving("allthemodium:allthemodium_nugget", Materials.Blackstone, [
    { mesh: Meshes.DIAMOND, chance: 0.04 },
    { mesh: Meshes.NETHERITE, chance: 0.15 }
  ])

  // ===== EndStone =====

  sieving("draconicevolution:draconium_dust", Materials.EndStone, [
    { mesh: Meshes.DIAMOND, chance: 0.06 },
    { mesh: Meshes.NETHERITE, amount: 2, chance: 0.09 }
  ])

  sieving("minecraft:sculk", Materials.EndStone, [{ mesh: Meshes.NETHERITE, amount: 1, chance: 0.075 }])

  // Crucible heating blocks
  allthemods.recipes.exdeorum.crucible_heat_source({ block: "alltheores:uranium_block" }, 20)
  allthemods.recipes.exdeorum.crucible_heat_source({ block: "mekanism:superheating_element" }, 60)
  allthemods.recipes.exdeorum.crucible_heat_source({ block: "allthemodium:soul_lava" }, 120)

  // Hammer

  allthemods.remove({ type: "exdeorum:compressed_hammer" })

  const compressedSets = {
    gravel: ["cobblestone", "granite", "andesite", "diorite"],
    sand: ["gravel"]
  }

  for (let i = 1; i < 10; i++) {
    for (const [output, inputs] of Object.entries(compressedSets)) {
      for (const input of inputs) {
        allthemods.recipes.exdeorum.compressed_hammer(
          Item.of(`allthecompressed:${output}_${i}x`),
          1,
          Ingredient.of(`allthecompressed:${input}_${i}x`)
        )
      }
    }
  }

  const crushedSets = {
    "exdeorum:crushed_blackstone": ["blackstone"],
    "exdeorum:crushed_deepslate": ["deepslate", "cobbled_deepslate"],
    "exdeorum:crushed_netherrack": ["netherrack"],
    "exdeorum:dust": ["sand", "red_sand"],
    "exdeorum:crushed_end_stone": ["end_stone"],
    "minecraft:red_sand": ["crushed_netherrack"]
  }

  for (let i = 1; i < 4; i++) {
    for (const [output, inputs] of Object.entries(crushedSets)) {
      for (const input of inputs) {
        allthemods.recipes.exdeorum.compressed_hammer(
          Item.of(output),
          Math.pow(9, i),
          Ingredient.of(`allthecompressed:${input}_${i}x`)
        )
      }
    }
  }

  // Barrel mixing output, input, fluid
  allthemods.recipes.exdeorum.barrel_mixing("minecraft:crying_obsidian", "minecraft:obsidian", "exdeorum:witch_water")
})
