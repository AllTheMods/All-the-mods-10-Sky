// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.generateData('after_mods', function (allthemods) {

    /**
     * @param {string} value
     * @returns {{item: string}|{tag: string}}
     */
    function ingredientOf (value) {
        if (typeof value === 'string') {
            if (value.charAt(0) === '#') {
                return { tag: value.substring(1) }
            }
            return { item: value }
        }
    }

    /**
     * @readonly
     * @enum {string}
     */
    const Essences = {
        Aureal:     "aureal",
        Blood:      "blood",
        Souls:      "souls",
        Experience: "experience"
    }
    
    function HephaestusRecipe(result, amount, magicCircle) {
        this._result = { item: result, count: amount }
        this._magicCircle = magicCircle
        this._tier = 0
        this._ingredients = []
        this._catalyst = null
        this._essences = {
            Aureal: 0,
            Blood: 0,
            Souls: 0,
            Experience: 0
        }
    }

    HephaestusRecipe.prototype = {
        /**
         * @description Tier of the forge, must be between 1 and 5 (inclusive).
         * @param {number} tier
         */
        tier: function (tier) {
            this._tier = tier
            return this
        },
        /**
         * @description Either item 'minecraft:item' or tag '#minecraft:tag'.
         * @param {string} value
         */
        catalyst: function (value) {
            this._catalyst = ingredientOf(value)
            return this
        },
        /**
         * @description Either item 'minecraft:item' or tag '#minecraft:tag' and the respective amount.
         * @param {string} value
         * @param {number} amount
         */
        ingredient: function (value, amount) {
            let amt = (amount != null ? amount : 1)
            let ing = ingredientOf(value)
            this._ingredients.push({ ingredient: ing, amount: amt })
            return this
        },
        /**
         * @description Amount of essences of this type to be used in the recipe.
         * @param {Essences} value
         * @param {number} amount
         */
        essence: function (value, amount) {
            this._essences[value] = amount
            return this
        },
        /**
         * @description Build the recipe.
         * @param {$KubeDataGenerator} allthemods
         */
        build(allthemods) {
            if (this._result.item == null || this._result.count < 1) {
                throw new Error('Result item must exist and count must be greater than 0')
            }
            if (this._tier < 1 || this._tier > 5) {
                throw new Error('Forge tier must be between 1 and 5 (inclusive)')
            }
            if (this._catalyst == null) {
                throw new Error('Main Ingredient (Catalyst) must exist')
            }
            if (this._ingredients.length < 1 || this._ingredients.length > 8) {
                throw new Error('At least 1 ingredient and no more than 8 ingredients are required')
            }
            allthemods.json('allthemods:forbidden_arcanus/hephaestus_forge/ritual/' + this._result.item.split(':').pop() + '.json', {
                essences: this._essences,
                forge_tier: this._tier,
                inputs: this._ingredients,
                magic_circle: this._magicCircle,
                main_ingredient: this._catalyst,
                result: {
                    type: 'forbidden_arcanus:create_item',
                    result_item: {
                        count: this._result.count,
                        id: this._result.item
                    }
                }
            })
        }
    }

    function create_item(result, amount) {
        return new HephaestusRecipe(result, amount, 'forbidden_arcanus:create_item')
    }

    function upgrade_item(result, amount) {
        return new HephaestusRecipe(result, amount, 'forbidden_arcanus:upgrade_tier')
    }
    
    
    create_item('forbidden_arcanus:elementarium', 1)
        .tier(3)
        .essence(Essences.Aureal, 180)
        .essence(Essences.Blood, 200)
        .essence(Essences.Souls, 3)
        .catalyst('forbidden_arcanus:eternal_stella')
        .ingredient('forbidden_arcanus:dragon_scale', 1)
        .ingredient('forbidden_arcanus:arcane_crystal_dust', 1)
        .ingredient('forbidden_arcanus:golden_dragon_scale', 1)
        .ingredient('forbidden_arcanus:arcane_crystal_dust', 1)
        .ingredient('forbidden_arcanus:silver_dragon_scale', 1)
        .ingredient('forbidden_arcanus:arcane_crystal_dust', 1)
        .ingredient('forbidden_arcanus:aquatic_dragon_scale', 1)
        .ingredient('forbidden_arcanus:arcane_crystal_dust', 1)
        .build(allthemods)

    create_item('forbidden_arcanus:artisan_relic', 1)
        .tier(3)
        .essence(Essences.Aureal, 150)
        .essence(Essences.Blood, 300)
        .essence(Essences.Souls, 4)
        .catalyst('create:blaze_burner')
        .ingredient('justdirethings:blazegold_ingot', 1)
        .ingredient('reliquary:molten_core', 1)
        .ingredient('justdirethings:blazegold_ingot', 1)
        .ingredient('minecraft:obsidian', 1)
        .ingredient('justdirethings:blazegold_ingot', 1)
        .ingredient('minecraft:obsidian', 1)
        .ingredient('justdirethings:blazegold_ingot', 1)
        .ingredient('reliquary:molten_core', 1)
        .build(allthemods)

    create_item('forbidden_arcanus:divine_pact', 1)
        .tier(3)
        .essence(Essences.Aureal, 400)
        .essence(Essences.Blood, 120)
        .essence(Essences.Souls, 8)
        .catalyst('forbidden_arcanus:eternal_stella')
        .ingredient('forbidden_arcanus:quantum_core', 1)
        .ingredient('reliquary:holy_hand_grenade', 1)
        .ingredient('forbidden_arcanus:quantum_core', 1)
        .ingredient('reliquary:holy_hand_grenade', 1)
        .ingredient('forbidden_arcanus:quantum_core', 1)
        .ingredient('reliquary:holy_hand_grenade', 1)
        .ingredient('forbidden_arcanus:quantum_core', 1)
        .ingredient('reliquary:holy_hand_grenade', 1)
        .build(allthemods)
    
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
