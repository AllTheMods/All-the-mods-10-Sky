ServerEvents.recipes((allthemods) => {
  const inputs = ["exdeorum:crushed_netherrack"];
  const outputs = ["minecraft:red_sand"];

  inputs.forEach((input, index) => {
    allthemods
      .custom({
        type: "immersiveengineering:crusher",
        input: Ingredient.of(input).toJson(),
        result: {
          item: outputs[index],
          count: 1,
        },
        energy: 1600,
      })
      .id(
        `kubejs:immersiveengineering/crusher/${outputs[index].split(":")[1]}`
      );
  });
});
