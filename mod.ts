import { addAssassinChargesHUD } from "./assassinCharges";
import { filterGold } from "./gold";
import { highlightGems } from "./gems";
import { highlightItems } from "./items";
import { highlightRunes } from "./runes";

if (config["misc_debug"])
{
	// @ts-ignore
	const timeStart = new Date().getTime();
}

// Dir paths
const stringsDir = "local\\lng\\strings";
const chargesDir = "hd\\overlays\\common";
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
highlightItems(itemNamesJson);

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
	addAssassinChargesHUD(chargesDir);
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
