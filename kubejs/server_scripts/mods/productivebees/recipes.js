// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((allthemods) => {
  allthemods.remove({ id: 'productivebees:honey_bucket' })
  allthemods.remove({ id: 'productivebees:honey_bucket_from_block' })

  // Super experience combs could only be mixed into a nugget, give them a centrifuge recipe like experience combs (100mB)
  allthemods
    .custom({
      type: "productivebees:centrifuge",
      ingredient: {
        type: "productivebees:component",
        components: {
          "productivebees:bee_type": "productivebees:super_experience"
        },
        items: "productivebees:configurable_honeycomb"
      },
      outputs: [
        {
          item: {
            item: "productivebees:wax"
          }
        }
      ],
      fluid: {
        tag: "c:experience",
        amount: 400
      }
    })
    .id("allthemods:productivebees/centrifuge/honeycomb_super_experience_fluid")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
