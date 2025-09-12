
ServerEvents.recipes(allthemods => {

    allthemods.shaped('enderio:vat', [

        'ABA',
        'CDC',
        'EFE'], {
        A: 'enderio:end_steel_ingot',
        B: 'enderio:vibrant_gear',
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
        "amount": 250,
        "id": "allthemodium:soul_lava"
    },
    "right_reagent": "c:nuggets/nether_star",
    "ticks": 200
    })
})