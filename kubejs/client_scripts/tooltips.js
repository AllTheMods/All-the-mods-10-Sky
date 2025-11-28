// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips((allthemods) => {
  //AllTheModium
  allthemods.add("allthemodium:teleport_pad", [Text.of("Mining Dimension Disabled")])
  //Ars Controle
  allthemods.add("ars_controle:scryers_linkage", [
    Text.of(""),
    Text.of("§7Fake Search Aliases:"),
    Text.of("§7- Entangled"),
    Text.of("§7- Entangled Block")
  ])

  //Forbidden Arcanus
  allthemods.add("forbidden_arcanus:hephaestus_forge_tier_1", [
    Text.of("§c§lShift-Right-Click§r§c the §c§lSmithing Table§r§c with §lMundabitur Dust"),
    Text.of("§c█ = Gilded Chiseled Polished Darkstone with Smithing Table on top"),
    Text.of("§7█ = Polished Darkstone"),
    Text.of("§5█§7 = Gilded Chiseled Polished Darkstone"),
    Text.of("§6█§7 = Chiseled Arcane Polished Darkstone"),
    Text.of("§0███§7███§0███"),
    Text.of("§0█§7███§5█§7███§0█"),
    Text.of("§0█§7█§5█§7███§5█§7█§0█"),
    Text.of("§7████§6█§7████"),
    Text.of("§7█§5█§7█§6█§c█§6█§7█§5█§7█"),
    Text.of("§7████§6█§7████"),
    Text.of("§0█§7█§5█§7███§5█§7█§0█"),
    Text.of("§0█§7███§5█§7███§0█"),
    Text.of("§0███§7███§0███")
  ])
  allthemods.add("forbidden_arcanus:clibano_core", [
    Text.of("§c§lShift-Right-Click§r§c the §c§lClibano Core§r§c with §c§lMundabitur Dust"),
    Text.of("§5█§7 = Polished Darkstone"),
    Text.of("§7█ = Polished Darkstone Bricks"),
    Text.of("§6█§7 = Clibano Core"),
    Text.of("§7Right to Left -> Bottom to Top"),
    Text.of("§5█§7█§5█§0█§7███§0█§5█§7█§5█"),
    Text.of("§7███§0█§7█§0█§7█§0█§7███"),
    Text.of("§5█§7█§5█§0█§7█§6█§7█§0█§5█§7█§5█")
  ])
  allthemods.add("forbidden_arcanus:growing_edelwood", [
    Text.of("§4Obtainable from the Wandering Trader"),
    Text.of("§4Or by using a Corrupt Soul on an Oak Sapling")
  ])
  allthemods.add("forbidden_arcanus:magnetized_darkstone_pedestal", [
    Text.of("§7Use Ferrognetic Mixture on the Darkstone Pedesta")
  ])
  allthemods.add("forbidden_arcanus:soul", [Text.of("§7Use a Soul Extractor on Soul Sand")])
  allthemods.add("forbidden_arcanus:enchanted_soul", [Text.of("§7Use a Splash Aureal Bottle on a normal soul")])
  allthemods.add("forbidden_arcanus:corrupt_soul", [Text.of("§7Rarely spawns when killing mobs")])
  allthemods.add("forbidden_arcanus:blood_test_tube", [
    Text.of("§7Hold a test tube in your off-hand and then kill mobs")
  ])
  allthemods.add("forbidden_arcanus:xpetrified_orb", [
    Text.of("§7Only obtainable via the Black Hole"),
    Text.of("§7To make a Black Hole throw Dark Matter together with Corrupti Dust on the ground"),
    Text.of("§7Feed it enough xp to make it spit out an Xpetrified Orb")
  ])
  allthemods.add("forbidden_arcanus:dragon_scale", [Text.of("§7Dropped by the Ender Dragon")])
  allthemods.add("forbidden_arcanus:crescent_moon", [Text.of("§cUnobtainable")])
  allthemods.add("forbidden_arcanus:soul_crimson_stone", [Text.of("§cWill turn into a Crimson Stone after 1 use")])

  //Mystical Agriculture
  allthemods.add(/mysticalagriculture:.*watering_can/, [
    Text.of("§cDisabled for Fake Player"),
    Text.of("§c(Blocks like Modular Routers, Clickers, etc)")
  ])
  //Occultism
  allthemods.add("kubejs:ritual_dummy/honeycomb", [Text.of("§7Tier: Foliot")])

  //Create
  allthemods.add("create:limestone", [Text.of("Make a Lava Source Block flow on top of Create Honey").gray()])

  allthemods.add("create:scoria", [Text.of("Make a Lava Source Block flow on top of Create Chocolate").gray()])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
