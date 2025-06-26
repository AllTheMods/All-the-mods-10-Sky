// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

RecipeViewerEvents.removeEntries('item', allthemods =>{
    allthemods.remove('#kubejs:olyishidingit')

    allthemods.remove('allthetweaks:greg_star')
    allthemods.remove('allthetweaks:greg_star_block')
    allthemods.remove(/geore:.*_bud/)
    allthemods.remove(/geore:.*_spyglass/)


    for(let i=1; i < 10; i++){
        allthemods.remove(`allthecompressed:greg_star_block_${i}x`)
    }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.