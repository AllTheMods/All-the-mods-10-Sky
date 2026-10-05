# Changelog

## Beta 5

### Mods

- Added:
  - [Apple Skin](https://www.curseforge.com/minecraft/mc-mods/appleskin) 
  - [Applied Flux](https://www.curseforge.com/minecraft/mc-mods/applied-flux) 
  - [Applied Mekanistics](https://www.curseforge.com/minecraft/mc-mods/applied-mekanistics)
  - [Camol](https://www.curseforge.com/minecraft/mc-mods/camol)
  - [Dark Mode Everywhere](https://www.curseforge.com/minecraft/mc-mods/dark-mode-everywhere)
  - [Extreme sound muffler](https://www.curseforge.com/minecraft/mc-mods/extreme-sound-muffler)
  - [Little Big Redstone](https://www.curseforge.com/minecraft/mc-mods/little-big-redstone)
  - [Load My F***ing Tags](https://www.curseforge.com/minecraft/mc-mods/lmft)
  - [Lootr](https://www.curseforge.com/minecraft/mc-mods/lootr)

- Removed:
  - [Showcase Item](https://www.curseforge.com/minecraft/mc-mods/showcase-item)

- Updated
  - Bookshelf (21.1.65 -> 21.1.66)
  - Crash Assistant (1.9.6 -> 1.9.7)
  - Crystalix (1.4.0 -> 1.5.0)
  - Cucumber Library (8.0.12 -> 8.0.13)
  - Extended Crafting (7.0.5 -> 7.0.6)
  - FTB Library (2101.1.1.15 -> 2101.1.16)
  - Mystical Agriculture (8.0.17 -> 8.0.18)
  - Productive Bees (13.7.3 -> 13.7.4)
  - Productive Metalworks (1.9.5 -> 1.9.6)
  - Sophisticated Storage (1.4.40.1181 -> 1.4.41.1186)

### Recipes

- Added:
  - Crafting:
    - All compact machines
  - Smelting:
    - `mysticalagriculture:soulstone`

### Tags

- Added:
  - `@exmachinis` to `#allthemods:tick_acceleration_blacklist`
  - `#allthemods:tick_acceleration_blacklist` to `#justdirethings:tick_speed_deny`
  - `#allthemods:tick_acceleration_blacklist` to `#tiab:un_acceleratable`

### Config

- Load My F***ing Tags:
  - Disable in-game error message

- Extreme Reactors
  - General:
    - `fuelUsageMultiplier = 1.0 -> 0.8`
    - `powerProductionMultiplier = 1.0 -> 3.0`
  - Reactor:
    - `reactorPowerProductionMultiplier = 1.0 -> 2.0`
  - Turbine:
    - `turbineAeroDragMultiplier = 1.0 -> 0.8`
    - `turbineCoilDragMultiplier = 1.0 -> 1.2`
    - `turbineFluidPerBladeMultiplier = 1.0 -> 1.5`
    - `turbineMassDragMultiplier = 1.0 -> 1.2`
    - `turbinePowerProductionMultiplier = 1.0 -> 4.0`

## Beta 4

### Mods

- Added:
  - [Crafting Tweaks](https://www.curseforge.com/minecraft/mc-mods/crafting-tweaks)
  - [Transfer Labels](https://www.curseforge.com/minecraft/mc-mods/transfer-labels)
  - [Utility Vest](https://www.curseforge.com/minecraft/mc-mods/utility-vest)

- Removed:
  - [Snad](https://www.curseforge.com/minecraft/mc-mods/snad)
  - [Ore Excavation](https://www.curseforge.com/minecraft/mc-mods/ore-excavation)

- Updated:
  - Ars Nouveau (5.9.2 -> 5.9.4)
  - Corail Tombstone (9.3.4 -> 9.4.0)
  - Functional Storage: (1.4.3 -> 1.5.0)
  - Geores (6.0.8 -> 6.0.9)
  - Kotlin for Forge: (5.8.0 -> 5.9.0)

- DO NOT UPDATE:
  - Iris Shaders (1.8.8)

### Recipes

- Added:
  - Crafting:
    - `minecraft:netherite_upgrade_smithing_template`
  - Compressed Hammering:
    - 1-9x Compressed -> 1-9x Compressed (Gravel, Sand)
    - 1-3x Compressed -> 9/81/729 Blocks (Blackstone, Deepslate, Netherrack, Sand, End Stone)
  - Functional Storage Compression:
    - Pebbles to full blocks
    - Ore Chunks to Ore Blocks
  - Powah:
    - Bulk ae2 certus charging

- Removed:
  - Crafting:
    - `actuallyadditions:crafter_on_a_stick`: duplicate with Crafting on a Stick
  - Sieving:
    - All the Pebbles

### Config

- Squat Grow:
  - Block the following:
    - `minecraft:grass_block`
    - `minecraft:grass`
    - `minecraft:short_grass`
    - `minecraft:tall_grass`
    - `minecraft:netherrack`
    - `minecraft:warped_nylium`
    - `minecraft:crimson_nylium`
    - `minecraft:sunflower`
    - `minecraft:rose_bush`
    - `minecraft:pink_petals`
    - `#chipped:moss_block`
    - `#c:budding_blocks`

### Other
- Made Refined Storage inaccessible for now
- Lots of work with recipe schemas
- Hide some more items from JEI to reduce duplicates or prevent confusion about unobtainable items

## Beta 3

### Mods

- Added:
  - [Crafting on a Stick](https://www.curseforge.com/minecraft/mc-mods/crafting-on-a-stick)
  - [Euphoria Patches](https://www.curseforge.com/minecraft/mc-mods/euphoria-patches)
  - [Klee Slabs](https://www.curseforge.com/minecraft/mc-mods/kleeslabs)
  - [Nolijium](https://www.curseforge.com/minecraft/mc-mods/nolijium)
  - [Zume](https://www.curseforge.com/minecraft/mc-mods/zume)

- Removed:
  - [Mod Name Tooltip](https://www.curseforge.com/minecraft/mc-mods/mod-name-tooltip)
  - [Productive Tree + Mekanism Compatibility](https://www.curseforge.com/minecraft/mc-mods/productive-tree-mekanism-compatibility)
  - [Simple Discord Rich Presence](https://www.curseforge.com/minecraft/mc-mods/simple-discord-rich-presence)

- Updated:
  - Ars Elemental (0.7.4.1 -> 0.7.4.3)
  - Ars Nouveau (5.9.2 -> 5.9.3)
  - Immersive Engineering (12.4.0-192 -> 12.4.0-193)
  - Integrated Crafting (1.2.2-331 -> 1.2.2-333)
  - Integrated Terminals (1.6.14-522 -> 1.6.14-524)
  - Iron's Spells 'n Spellbooks (3.12.3 -> 3.13.0)
  - Modonomicon (1.114.2 -> 1.114.4)
  - Occultism (1.180.0 -> 1.181.0)
  - Productive Bees (13.7.2 -> 13.7.3)
  - Productive Metalworks (1.9.4 -> 1.9.5)
  - Silent Gear (4.0.23 -> 4.0.24)

- DO NOT UPDATE:
  - Iris Shaders (1.8.8)

### Recipes

- Added:
  - ExDeorum Sieving:
    - `minecraft:torchflower_seeds` via **Dirt** in any but **String** & **Flint**
    - `minecraft:cactus` via **Sand** in **Diamond Meshes**

- Removed:
  - Crafting:
    - All `pickletweaks` paxels: Duplicates with Mekanism
    - `extendedcrafting:handheld_table`: Duplicate with Crafting on a Stick

- Changed:
  - Crafting:
    - `crystalix:crystalix_wand`: Duplicate with Construction Sticks

### Tags

- Added: 
  - `minecraft:diamond_block` to `#chisel_chipped_integration:gems/diamond`: Broken craft from block to diamond
  - `productivemetalworks:molten_emerald` to `c:molten_emerald`: Missing tag

### Configs

- Better Compatibility Check:
  - Proper versioning

- Crash Assistant:
  - Proper names in the crash message

- Cucumber lib:
  - `tagTooltips = false`: remove duplicate tag tooltips

- FTB Essentials:
  - Disable /rtp

### Other

- Added GitHub Issue Templates
- Added Complementary Shaders

## Beta 2

### Mods

- Added:
  - [Construction Sticks](https://www.curseforge.com/minecraft/mc-mods/construction-sticks)
  - [Keybind Bundles](https://www.curseforge.com/minecraft/mc-mods/keybind-bundles)
  - [Keybinds Purger](https://www.curseforge.com/minecraft/mc-mods/keybindspurger)

### Recipes

- Added:
  - ExDeorum Sieving (Iron, Gold, Diamond, Netherite):
      - `create:veridium`
      - `create:crimsite`
      - `create:asurine`
      - `xycraft_world:kivi`
  - Xycraft Extractor:
      - `create:veridium`
      - `create:crimsite`
      - `create:asurine`
  - AE2 Inscriber:
    - `ae2:silicon_press`
    - `ae2:calculation_processor_press`
    - `ae2:engineering_processor_press`
    - `ae2:logic_processor_press`
    - `advanced_ae:quantum_processor_press`

- Removed:
  - Growth Accelerator Tiers:
    - `growth_accelerator_tiers:cranked_growth_accelerator`: Dupe with mod recipe
    - `growth_accelerator_tiers:boosted_growth_accelerator`: Dupe with mod recipe
    - `growth_accelerator_tiers:directional_growth_accelerator`: Dupe with mod recipe

  - Modern Industrialization:
    - `modern_industrialization:replicator`: Unbalanced and OP

### Tags

- Removed:
  - `#mysticalagriculture:seeds` from `#tombstone:seeds`: Prevent MA seeds from appearing in the seedbags
  - `#mysticalagriculture:seeds` from `#c:seeds`: Prevent MA seeds from appearing in the seedbags

### Configs

- Almost Unified:
  - Fully added and configured the almost unified config
  
- Mekanism:
  - `holidays = false`: Disable Holidays to remove the chat startup message

- Utilitarian:
  - Block all remaining startup messages

- Skyblock Builder:
  - Added the `default.nbt` template as a selectable option to generate an island from

### Other

- Removed the Angel Block and Creeper from the `simple_life.nbt` template file
- Removed the Starter Chest from the `default.nbt` template
- Added Tooltips:
  - `create:limestone`: Explains how to create it via fluid interactions
  - `create:scoria`: Explains how to create it via fluid interactions

