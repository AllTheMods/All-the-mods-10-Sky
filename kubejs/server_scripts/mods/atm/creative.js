ServerEvents.recipes((allthemods) => {
  // Pulsating Black Hole
  allthemods.shaped("allthetweaks:pulsating_black_hole", ["asd", "fgh", "jkl"], {
    a: "allthecompressed:oak_log_5x",
    s: "allthecompressed:iron_block_5x",
    d: "allthecompressed:dirt_5x",
    f: "allthecompressed:redstone_block_5x",
    g: "allthecompressed:cobblestone_7x",
    h: "allthecompressed:gold_block_5x",
    j: "allthecompressed:obsidian_5x",
    k: "allthecompressed:gravel_5x",
    l: "allthecompressed:sand_5x"
  })

  // Nexium Emitter
  allthemods.shaped("allthetweaks:nexium_emitter", ["A B", " CF", "GED"], {
    A: "powah:player_transmitter_nitro",
    B: "ae2wtlib:wireless_universal_terminal",
    F: "mekanism:module_gravitational_modulating_unit",
    D: "create:mechanical_arm",
    E: "ae2:singularity",
    C: "xnet:wireless_router",
    G: "oritech:superconductor"
  })

  // Dragon Soul
  allthemods.shaped("allthetweaks:dragon_soul", ["CDA", "XNY", "BGE"], {
    C: "mysticalagradditions:dragon_scale",
    D: "occultism:soul_gem",
    A: "minecraft:dragon_egg",
    N: "actuallyadditions:ender_star",
    B: "minecraft:dragon_head",
    G: "productivebees:inactive_dragon_egg",
    E: "ars_nouveau:summon_focus",
    X: "draconicevolution:chaotic_core",
    Y: "draconicevolution:chaotic_energy_core"
  })

  // Philosopher's Fuel
  allthemods.shaped("allthetweaks:philosophers_fuel", ["ABC", "DEF", "IHI"], {
    A: "generatorgalore:ender_generator",
    B: "ironfurnaces:unobtainium_furnace",
    C: "justdirethings:coalblock_t4",
    D: "actuallyadditions:empowered_canola_seed",
    E: "mysticalagradditions:insanium_coal_block",
    F: "forbidden_arcanus:deorum_block",
    H: "draconicevolution:reactor_core",
    I: "enderio:sentient_ender"
  })

  // Improbable Probability Device
  allthemods.shaped("allthetweaks:improbable_probability_device", ["AFA", "CFE", "BFD"], {
    A: "mekanism:pellet_antimatter",
    B: "enderio:vibrant_capacitor_bank",
    C: "megacells:cell_component_16m",
    D: "oritech:large_storage_block",
    E: "rftoolsutility:flight_module",
    F: "powah:battery_nitro[powah:energy_stored=2000000000L]"
  })

  // Withers Compass
  allthemods.shaped("allthetweaks:withers_compass", ["DCD", "ABA", "DED"], {
    A: "generatorgalore:netherstar_generator_8x",
    B: "industrialforegoing:wither_builder",
    C: 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither"]',
    D: "reliquary:witherless_rose",
    E: "actuallyadditions:player_interface"
  })

  // Oblivion Shard
  allthemods.shaped("allthetweaks:oblivion_shard", [" AB", "ACA", "BA "], {
    A: Ingredient.of(["ae2:quantum_entangled_singularity", "advanced_ae:shattered_singularity"]),
    C: "oritech:nuke",
    B: "justdirethings:paradoxmachine"
  })
})
