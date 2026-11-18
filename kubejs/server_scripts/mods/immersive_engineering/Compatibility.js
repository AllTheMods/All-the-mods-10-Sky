// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  allthemods.replaceInput(
    { id: "immersiveengineering:crafting/toolupgrade_revolver_bayonet" },
    "immersiveengineering:sword_steel",
    "mekanismtools:steel_sword"
  );
  allthemods.replaceInput({ id: 'immersiveengineering:crafting/ingot_steel_to_storage_steel' }, '#c:ingots/steel',
    Ingredient.of('#c:ingots/steel').except('#c:ingots/biosteel'));
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
