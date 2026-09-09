let $ClientQuestFile = Java.loadClass('dev.ftb.mods.ftbquests.client.ClientQuestFile')
let $Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
let $ATTRpc = Java.loadClass('com.thevortex.allthetweaks.api.ATTRpc')
let $ObjectCompletedEvent = Java.loadClass('dev.ftb.mods.ftbquests.events.ObjectCompletedEvent')
let $EventResult = Java.loadClass('dev.architectury.event.EventResult')

// Quest that stands in for crafting the ATM Star, and the icon it unlocks
let STAR_QUEST = '504DEB70D9DAA547'
let STAR_IMAGE = 'https://raw.githubusercontent.com/AllTheMods/AllTheTweaks/1.21/src/main/resources/assets/allthetweaks/textures/item/atm_star.png'
let ARR_TAG = 'arr'

let ticks = 0
let sinceRecount = 0
let recountQueued = false
let hadLevel = false

function pushQuestProgress() {
	// Quests not received from server yet
	if (!$ClientQuestFile.exists()) return false

	let file = $ClientQuestFile.getInstance()
	let data = file.selfTeamData
	// Quest player data not received from server yet
	if (!data) return false

	let done = 0
	let total = 0

	for (let chapter of file.getAllChapters()) {
		for (let quest of chapter.getQuests()) {
			if (quest.hasTag(ARR_TAG)) continue
			total++
			if (data.isCompleted(quest)) done++
		}
	}

	let starQuest = file.getQuest(file.getID(STAR_QUEST))

	if (starQuest && data.isCompleted(starQuest)) {
		$ATTRpc.setSmallImage(STAR_IMAGE)
	} else {
		$ATTRpc.setSmallImage('')
	}

	if (done > 0) {
		$ATTRpc.setState('Quests')
		$ATTRpc.setProgress(done, total)
	} else {
		$ATTRpc.clearState()
		$ATTRpc.clearProgress()
	}

	return true
}

$ObjectCompletedEvent.QUEST.register(() => {
	recountQueued = true
	return $EventResult.pass()
})

ClientEvents.tick(() => {
	let level = $Minecraft.getInstance().level

	// Recalculate state on world join
	if (level && !hadLevel) recountQueued = true
	hadLevel = !!level

	if (recountQueued && pushQuestProgress()) {
		recountQueued = false
		sinceRecount = 0
	}

	// Only update every 2 seconds for non-event calculations
	ticks++
	if (ticks < 40) return
	ticks = 0

	if (!level) {
		recountQueued = false
		return
	}

	$ATTRpc.setDetails('In ' + String(level.dimension).split(':').pop())

	// Fallback update check every 30s
	sinceRecount++
	if (sinceRecount >= 15) {
		sinceRecount = 0
		pushQuestProgress()
	}
})
