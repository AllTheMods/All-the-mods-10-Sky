ItemEvents.modification(allthemods => {
    allthemods.modify('geore:coal_block', item =>
        item.burnTime = 16000
    )
})