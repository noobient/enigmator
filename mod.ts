import { addAssassinChargesHUD } from "./assassinCharges";
import { filterGold } from "./gold";
import { highlightGems } from "./gems";
import { highlightRunes } from "./runes";

if (config["misc_debug"])
{
	// @ts-ignore
	const timeStart = new Date().getTime();
}

// Dir paths
const stringsDir = "local\\lng\\strings";
const gemsDir = "hd\\items\\misc\\gem";
const runesDir = "hd\\items\\misc\\rune";

// File paths
const itemNamesFile = stringsDir + "\\item-names.json";
const itemNameAffixesFile = stringsDir + "\\item-nameaffixes.json";
const itemRunesFile = stringsDir + "\\item-runes.json";
//const profileHDFile = "global\\ui\\layouts\\_profilehd.json";

// Read the files we'll unconditionally iterate over regardless of settings
var itemNamesJson = D2RMM.readJson(itemNamesFile);
var itemNameAffixesJson = D2RMM.readJson(itemNameAffixesFile);
var itemRunesJson = D2RMM.readJson(itemRunesFile);

// Gem highlighting
highlightGems(itemNamesJson, gemsDir);
// For whatever braindamaged reason, the normal Sapphire, Emerald, Ruby and Diamond
// definitions are not in item-names, but in item-nameaffixes instead
highlightGems(itemNameAffixesJson, gemsDir);

// Rune highlighting
highlightRunes(itemRunesJson, runesDir);

// General item highlighting / filtering
// @ts-ignore
itemNamesJson.forEach((item: any) =>
{
	let newName = null;

	// Highlight base item if set to be highlighted, but first check if it actually exists in the config
	if (config["bth_" + item.Key])
	{
		newName = item.enUS + ` ÿc;*ÿc2*ÿc1* ÿc@Base ÿc;*ÿc2*ÿc1*`;
	}

	switch (item.Key)
	{
		case "rvl": // Full Rejuvenation Potion
			if (config["ihl_fullrejuv"])
			{
				newName = `ÿc;100% ÿc0Rejuvenation Potion`;
			}
			break;
		case "isc": // Scroll of Identify
		case "tsc": // Scroll of Town Portal"
			if (config["ift_scroll"])
			{
				newName = "";
			}
			break;
		case "gpl": // Strangling Gas Potion
		case "gpm": // Choking Gas Potion
		case "gps": // Rancid Gas Potion
		case "hp1": // Minor Healing Potion
		case "hp2": // Light Healing Potion
		case "hp3": // Healing Potion
		case "hp4": // Greater Healing Potion
		case "mp1": // Minor Mana Potion
		case "mp2": // Light Mana Potion
		case "mp3": // Mana Potion
		case "mp4": // Greater Mana Potion
		case "opl": // Fulminating Potion
		case "opm": // Exploding Potion
		case "ops": // Oil Potion
		case "rvs": // Rejuvenation Potion
		case "vps": // Stamina Potion
		case "wms": // Thawing Potion
		case "yps": // Antidote Potion
			if (config["ift_potion"])
			{
				newName = "";
			}
			break;
		case "hp5": // Super Healing Potion
			if (config["ift_superhealing"])
			{
				newName = "";
			}
			break;
		case "mp5": // Super Mana Potion
			if (config["ift_supermana"])
			{
				newName = "";
			}
			break;
		case "cm1": // Small Charm
			newName = item.enUS + ` ÿc5[ÿc:•ÿc5]`;
			break;
		case "cm2": // Large Charm
			newName = item.enUS + ` ÿc5[ÿc:••ÿc5]`;
			break;
		case "cm3": // Grand Charm
			newName = item.enUS + ` ÿc5[ÿc:•••ÿc5]`;
			break;
		case "jew": // Jewel
			newName = `• Jewel •ÿcN`;
			break;
	}

	if (newName != null)
	{
		// Update all localizations
		for (let key in item)
		{
			if (key !== "id" && key !== "Key")
			{
				item[key] = newName;
			}
		}
	}
});

// Change gold item label on the ground
// We could move this to gems to avoid iterating twice, but
// surprisingly it doesn't yield any performance benefit
if (config["ift_gold"])
{
	filterGold(itemNameAffixesJson);
}

// Change on-ground tooltip style to be less see-through
// const profileHDJson = D2RMM.readJson(profileHDFile);
// // @ts-ignore
// profileHDJson.TooltipStyle.inGameBackgroundColor = [0, 0, 0, 0.85];
// // @ts-ignore
// profileHDJson.TooltipStyle.backgroundColor = [0, 0, 0, 0.9];
// profileHD.TooltipFontSize = 32,
// // @ts-ignore
// profileHDJson.TooltipStyle.inGameShowItemsSelectedBackgroundColor = [0.1, 0.1, 0.2, 1];
// D2RMM.writeJson(profileHDFile, profileHDJson);

// Assassin charges HUD
if (config["ach_enable"])
{
	addAssassinChargesHUD();
}

if (config["misc_skipintro"])
{
	D2RMM.copyFile("hd\\global\\video", "hd\\global\\video", true);
}

// Write our JSON files
D2RMM.writeJson(itemNamesFile, itemNamesJson);
D2RMM.writeJson(itemNameAffixesFile, itemNameAffixesJson);
D2RMM.writeJson(itemRunesFile, itemRunesJson);

if (config["misc_debug"])
{
	const timeEnd = new Date().getTime();
	// It thinks timeStart doesn't exist, whatever man
	// @ts-ignore
	const timeDuration = timeEnd - timeStart;
	console.log("[DEBUG] Install took " + timeDuration / 1000 + " seconds");
}
