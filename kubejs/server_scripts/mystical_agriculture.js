//priority 221
ServerEvents.recipes( nadien => {
           // essence crafting for custom seeds
           function essenceCircle(result, essenceType) {
            nadien.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`ultimate_utilities:mysticalagriculture/${essenceType}_essence_crafting`)
            }
            essenceCircle('allthemodium:allthemodium_ingot', 'allthemodium')
            essenceCircle('allthemodium:vibranium_ingot', 'vibranium')
            essenceCircle('allthemodium:unobtainium_ingot', 'unobtainium')     
            essenceCircle('hostilenetworks:prediction_matrix', 'predicciondematrix')
            essenceCircle('extendedcrafting:redstone_ingot', 'redstoneingot')
            essenceCircle('avaritia:crystal_matrix_ingot', 'crystal_matrix')
            essenceCircle('industrialforegoing:pink_slime_ingot', 'pink_slime')
            essenceCircle('ars_nouveau:source_gem', 'source_gem')
            essenceCircle('immersiveengineering:plate_duroplast', 'duroplast')
            essenceCircle('fluxnetworks:flux_dust', 'flux_dust')
            essenceCircle('draconicevolution:chaos_shard' , 'chaos_shard')  
            essenceCircle('create:andesite_alloy' , 'andesite_alloy')
            essenceCircle('megacells:sky_steel_ingot', 'sky_steel_ingot')
            essenceCircle('mekanism_extras:ingot_naquadah', 'naquadah')
            essenceCircle('occultism:spirit_attuned_gem', 'spirit_gem')
            essenceCircle('mysticalagriculture:prosperity_shard', 'prosperity_shard')
            essenceCircle('create:polished_rose_quartz', 'cuarzorosa')
            essenceCircle('8x extendedae:entro_ingot', 'entro')
            essenceCircle('4x extendedcrafting:ender_ingot', 'ender_ingot')
            essenceCircle('8x justdirethings:celestigem', 'celestigem')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')
            // essenceCircle(, '')


     //remove gaia crux
     nadien.remove({ id: "mysticalagradditions:gaia_spirit_crux" })

    //remove infinite crux
    nadien.remove({ id: 'mystical_extended_tier:infinity_crux'})

    //remove nether star crux
    nadien.remove({ id: 'mysticalagradditions:nether_star_crux' })

    //remove nitro crystal crux
    nadien.remove({ id: 'mysticalagradditions:nitro_crystal_crux' })

 //ornium essence
 nadien.replaceInput({id: 'mysticalextendedtier:ornium_essence'}, 'mysticalagriculture:supremium_essence', 'mysticalagradditions:insanium_essence')

function addInfustion(seed, item, essence) {
        nadien.custom(
            {
                type: 'mysticalagriculture:infusion',
                input: {
                    item:  'mysticalagriculture:prosperity_seed_base'
                },
                ingredients: [
                    {
                        item: item
                    },
                    {
                        item: essence
                    },
                    {
                        item: item
                    },
                    {
                        item: essence
                    },
                    {
                        item: item
                    },
                    {
                        item: essence
                    },
                    {
                        item: item
                    },
                    {
                        item: essence
                    }
                ],
                result: {
                    id: seed
                }
            }
        ).id(seed.replace(':', ':infusion/'))}

      addInfustion('mysticalagriculture:draconium_seeds', 'draconicevolution:draconium_block', 'mysticalagriculture:supremium_essence') 

})