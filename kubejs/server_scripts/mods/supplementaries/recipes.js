ServerEvents.recipes((allthemods) => {
  allthemods.remove({ id: "supplementaries:faucet" });
  allthemods.remove({ id: 'supplementaries:stone_tile' });

  allthemods.shaped('2x supplementaries:item_shelf', ['###', 'S S'], {
    '#': '#minecraft:wooden_slabs',
    S: '#c:rods/wooden'
  }).id('supplementaries:item_shelf');
});
