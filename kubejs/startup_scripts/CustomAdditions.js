const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

StartupEvents.registry('item', allthemods => {
    allthemods.create('silent_allthemodium_plate').displayName('Silent Allthemodium Plate').glow(true);
    allthemods.create('silent_vibranium_plate').displayName('Silent Vibranium Plate').glow(true);
    allthemods.create('silent_unobtainium_plate').displayName('Silent Unobtainium Plate').glow(true);
})