// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  /**
   * @param {{item: string, count: number}|{tag: string, count: number}} output
   * @param {string} catalyst
   * @param {number} depthMin
   * @param {number} depthMax
   * @param {number} weight
   */
  function laserDrillOre(output, catalyst, depthMin, depthMax, weight) {
    allthemods
      .custom({
        type: "industrialforegoing:laser_drill_ore",
        output: output,
        rarity: [
          {
            biome_filter: {
              whitelist: [],
              blacklist: []
            },
            dimension_filter: {
              whitelist: [],
              blacklist: []
            },
            depth_min: depthMin,
            depth_max: depthMax,
            weight: weight
          }
        ],
        catalyst: {
          item: catalyst
        }
      })
      .id(`allthemods:industrialforegoing/laser_drill_ore/${output.tag.split(":")[1]}`)
  }

  /**
   * @param {{fluid: string, amount: number}|{tag: string, amount: number}} output
   * @param {string} entity
   * @param {string} catalyst
   * @param {number} depthMin
   * @param {number} depthMax
   * @param {number} weight
   */
  function laserDrillFluid(output, catalyst, depthMin, depthMax, weight) {
    allthemods
      .custom({
        type: "industrialforegoing:laser_drill_fluid",
        output: output,
        rarity: [
          {
            biome_filter: {
              whitelist: [],
              blacklist: []
            },
            dimension_filter: {
              whitelist: [],
              blacklist: []
            },
            depth_min: depthMin,
            depth_max: depthMax,
            weight: weight
          }
        ],
        catalyst: {
          item: catalyst
        }
      })
      .id(`allthemods:industrialforegoing/laser_drill_fluid/${output.fluid.split(":")[1]}`)
  }
  function laserDrillFluidWithEntity(output, entity, catalyst, depthMin, depthMax, weight) {
    allthemods
      .custom({
        type: "industrialforegoing:laser_drill_fluid",
        output: output,
        entity_data: {
          data: {},
          display: "",
          entity: {
            type: entity
          }
        },
        rarity: [
          {
            biome_filter: {
              whitelist: [],
              blacklist: []
            },
            dimension_filter: {
              whitelist: [],
              blacklist: []
            },
            depth_min: depthMin,
            depth_max: depthMax,
            weight: weight
          }
        ],
        catalyst: {
          item: catalyst
        }
      })
      .id(`allthemods:industrialforegoing/laser_drill_fluid/${output.fluid.split(":")[1]}`)
  }

  laserDrillOre({ tag: "c:gems/benitoite", count: 8 }, "industrialforegoing:blue_laser_lens", 5, 256, 5)
  laserDrillOre({ tag: "c:gems/anglesite", count: 8 }, "industrialforegoing:yellow_laser_lens", 5, 256, 5)
  laserDrillOre({ tag: "c:raw_materials/zinc", count: 1 }, "industrialforegoing:white_laser_lens", 15, 256, 8)

  laserDrillFluidWithEntity(
    { fluid: "allthemodium:soul_lava", amount: 10 },
    "minecraft:warden",
    "industrialforegoing:blue_laser_lens",
    -64,
    80,
    3
  )

  laserDrillFluid({ fluid: "pneumaticcraft:oil", amount: 50 }, "industrialforegoing:black_laser_lens", 20, 60, 3)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
