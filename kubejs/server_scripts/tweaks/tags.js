// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.shaped('enderio:vat', [

        'ABA',
        'CDC',
        'EFE'], {
        A: 'enderio:dark_steel_ingot',
        B: 'enderio:energized_gear',
        C: 'enderio:pressurized_fluid_tank',
        D: 'enderio:ensouled_chassis',
        E: 'enderio:zombie_electrode',
        F: 'enderio:vacuum_chest'    
        }
    )
    
    allthemods.custom({
    "type": "enderio:vat_fermenting",
    "input": {
        "amount": 1000,
        "tag": "minecraft:lava"
    },
    "left_reagent": "exdeorum:compressed/soul_sand",
    "output": {
        "amount": 100,
        "id": "allthemodium:soul_lava"
    },
    "right_reagent": "allthemods:tendrils/warden",
    "ticks": 200
    })
})
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
