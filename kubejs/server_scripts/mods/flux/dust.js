// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $SoundEvents = Java.tryLoadClass('net.minecraft.sounds.SoundEvents')
const $SoundSource = Java.tryLoadClass('net.minecraft.sounds.SoundSource')
const $ParticleTypes = Java.tryLoadClass('net.minecraft.core.particles.ParticleTypes')
const $Block = Java.tryLoadClass('net.minecraft.world.level.block.Block')

const recipes = [
    {
        clickedBlock: 'minecraft:obsidian',
        baseBlock:    'allthecompressed:obsidian_1x',
        inputItem:    'minecraft:redstone',
        outputItem:   'fluxnetworks:flux_dust',
        resultBlock:  'minecraft:cobblestone'
    }
];

recipes.forEach(recipe => {

    NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.PlayerInteractEvent$LeftClickBlock", event => {

        // Don't ask questions or you'll scare it
        /** @type {$PlayerInteractEvent$LeftClickBlock_} */
        let allthemods = event

        let level = allthemods.getLevel()
        let pos = allthemods.getPos()
        let block = level.getBlockState(allthemods.getPos()).getBlock();
        let base = level.getBlockState(allthemods.getPos().offset(0, -2, 0)).getBlock();
        /**@type {$Player_} */
        let player = allthemods.getEntity()
        let heldItem = allthemods.getItemStack()

        if (!heldItem.isEmpty() || player.isFake()) return
        if (base.getId() !== recipe.baseBlock) return


        let count = 0;
        level.getEntitiesWithin(AABB.ofBlock(pos.below()))
            .filter(entity => entity.type === 'minecraft:item' && entity.item.item.getId() === recipe.inputItem)
            .forEach(entity => {
                if (count < 512) {
                    count += entity.item.count
                    entity.discard()
                }
            });

        if (count === 0) return

        const stack = Item.of(recipe.outputItem).withCount(count);
        $Block.popResource(level, pos, stack);
        level.setBlock(pos, 'minecraft:air', 3)

        let replacement = pos.below();
        if (level.random.nextDouble() > Math.pow(0.9, count >> 3)) {
            level.setBlock(replacement, recipe.resultBlock, 3)
        } else {
            level.setBlock(replacement, recipe.clickedBlock, 3)
        }
        level.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, $SoundEvents.DRAGON_FIREBALL_EXPLODE, $SoundSource.BLOCKS, 1.0, 1.0);
        level.addParticle($ParticleTypes.LAVA, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 0, 0, 0);
    })
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10: To the Sky.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.