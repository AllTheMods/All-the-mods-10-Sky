// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags("item", (allthemods) => {
  // Environmental Core's Obsidian Plate is 4 obsidian -> 8 plates. Keep it out of c:plates/obsidian so it
  // can't stand in for Create's Sturdy Sheet (Schedule, Railway Casing). recipes.js points the
  // Environmental Tech recipes at the plate item directly.
  allthemods.remove("c:plates/obsidian", "envirocore:obsidian_plate")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
