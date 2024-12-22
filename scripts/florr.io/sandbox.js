// **WARNING**
// - This script makes it seem like you have petals that you actually don't.
//   Therefore, if you equip them or use them for crafting more than once, your account will be banned.
// - We do NOT recommend running the script outside of a guest account if you are not a ban speedrunner!
// - Don't forget that we do NOT have any responsibility for any damage to you caused by the script.

(async () => {

	const currentVersionHash = (await (await fetch("https://florr.io")).text()).match(/const\sversionHash\s=\s"(.*)";/)[1];
	if (currentVersionHash !== "3fa83d54eead6c82cbdb82a7c5d15ae3adbe6068") {
		console.error("Versionhash error. (Tell this to kit2d2 on discord)");
		return;
	}

	const kMaxRarities = 9;
	const kMaxPetals = 89;
	const petalInventoryBaseAddress =  2022752;

	for (let petalIndex = 1; petalIndex <= kMaxPetals; petalIndex++) {
		for (let rarityIndex = 0; rarityIndex < kMaxRarities; rarityIndex++) {
			const offset = ((petalIndex * kMaxRarities + rarityIndex) << 2);
			Module.HEAPU32[(petalInventoryBaseAddress + offset) >> 2] = 1;
		}
	}

	console.log("success!");

})();