// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $DyeColor = Java.tryLoadClass('net.minecraft.world.item.DyeColor')

ServerEvents.recipes(allthemods => {

    $DyeColor.values().map(dc => dc.getName()).forEach(color => {
        allthemods.shapeless(`4x ae2:${color}_covered_cable`,    [`ae2:${color}_covered_dense_cable`]).id(`allthemods:ae2/${color}_dense_covered_to_normal`);
        allthemods.shapeless(`4x ae2:${color}_smart_cable`,      [`ae2:${color}_smart_dense_cable`])  .id(`allthemods:ae2/${color}_smart_covered_to_normal`);
        allthemods.shapeless(`ae2:${color}_covered_dense_cable`, [`4x ae2:${color}_covered_cable`])   .id(`allthemods:ae2/${color}_covered_to_dense`);
        allthemods.shapeless(`ae2:${color}_smart_dense_cable`,   [`4x ae2:${color}_smart_cable`])     .id(`allthemods:ae2/${color}_smart_to_dense`);
    })

    allthemods.shapeless(`4x ae2:fluix_covered_cable`, [`ae2:fluix_covered_dense_cable`]).id(`allthemods:ae2/dense_to_normal`);
    allthemods.shapeless(`4x ae2:fluix_smart_cable`, [`ae2:fluix_smart_dense_cable`]).id(`allthemods:ae2/smart_dense_to_smart_normal`);

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.