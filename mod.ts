import { addLightBeam } from "./lightBeam";
import { addAssassinChargesHUD } from "./assassinCharges";

if(config["misc_debug"])
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
const itemRunesFile = 'local\\lng\\strings\\item-runes.json';
//const profileHDFile = 'global\\ui\\layouts\\_profilehd.json';

// Read the files we'll unconditionally iterate over regardless of settings
var itemNamesJson = D2RMM.readJson(itemNamesFile);
var itemNameAffixesJson = D2RMM.readJson(itemNameAffixesFile);
var itemRunesJson = D2RMM.readJson(itemRunesFile);

function highlightGems(jsonData: JSONData)
{
	jsonData.forEach((item) =>
	{
		let newName = null;
		let gemPrefix = null;
		let gemColor = null;
		let itemFirstWord = item.enUS.split(" ")[0];

		switch (itemFirstWord)
		{
			case "Chipped":
				gemPrefix = "-";
				break;
			case "Flawed":
				gemPrefix = "+";
				break;
			case "Flawless":
				gemPrefix = "@";
				break;
			case "Perfect":
				gemPrefix = "O";
				break;
			default: // "Normal" gems don't have a prefix
				gemPrefix = "x";
		}

		switch (item.Key)
		{
			case "gcv": // Chipped Amethyst
			case "gfv": // Flawed Amethyst
			case "gsv": // Amethyst
			case "gzv": // Flawless Amethyst
			case "gpv": // Perfect Amethyst
				gemColor = `ÿc;`
				break;
			case "gcw": // Chipped Diamond
			case "gfw": // Flawed Diamond
			case "gsw": // Diamond
			case "glw": // Flawless Diamond
			case "gpw": // Perfect Diamond
				gemColor = `ÿcF`;
				break;
			case "gcg": // Chipped Emerald
			case "gfg": // Flawed Emerald
			case "gsg": // Emerald
			case "glg": // Flawless Emerald
			case "gpg": // Perfect Emerald
				gemColor = `ÿc:`;
				break;
			case "gcr": // Chipped Ruby
			case "gfr": // Flawed Ruby
			case "gsr": // Ruby
			case "glr": // Flawless Ruby
			case "gpr": // Perfect Ruby
				gemColor = `ÿcU`;
				break;
			case "gcb": // Chipped Sapphire
			case "gfb": // Flawed Sapphire
			case "gsb": // Sapphire
			case "glb": // Flawless Sapphire
			case "gpb": // Perfect Sapphire
				gemColor = `ÿcN`;
				break;
			case "skc": // Chipped Skull
			case "skf": // Flawed Skull
			case "sku": // Skull
			case "skl": // Flawless Skull
			case "skz": // Perfect Skull
				gemColor = `ÿc5`;
				break;
			case "gcy": // Chipped Topaz
			case "gfy": // Flawed Topaz
			case "gsy": // Topaz
			case "gly": // Flawless Topaz
			case "gpy": // Perfect Topaz
				gemColor = `ÿc9`;
				break;
		}

		// Now gemColor is only non-null if it's a gem
		// item-nameaffixes has duplicate entries, e.g. Key = 'Emerald' which is an affix, not an item
		// However, the length of the key of items is always 3, so check for that
		if (gemColor != null && item.Key.length == 3)
		{
			// Make sure this is done *before* renaming the item, otherwise the path will be corrupted
			if (config["lbg_" + item.Key])
			{
				// Get the string "Flawed Amethyst", replace space with underscore, and convert to lowercase.
				// Also replace "sapphire" with "saphire", because someone at Blizzard had dysgraphia and put
				// "saphire" in the filenames, and they also had the courtesy to leave it like that ever since.
				const gemFile = gemsDir + "\\" + item.enUS.replace(" ", "_").toLowerCase().replace("sapphire", "saphire") + ".json";

				// Apply the light beam
				addLightBeam(gemFile);
			}

			newName = `ÿc7[` + gemColor + gemPrefix + `ÿc7] ÿc0` + item.enUS;

			// Update all localizations
			for (let key in item)
			{
				if (key !== 'id' && key !== 'Key')
				{
					item[key] = newName;
				}
			}
		}
	});
}

// More vivid gem names
if (config["ihl_gem"])
{
	highlightGems(itemNamesJson);
	// For whatever braindamaged reason, the normal Sapphire, Emerald, Ruby and Diamond
	// definitions are not in item-names, but in item-nameaffixes instead
	highlightGems(itemNameAffixesJson);
}

// General item highlighting / filtering
itemNamesJson.forEach((item) =>
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
			if(config["ift_potion"])
			{
				newName = "";
			}
			break;
		case "hp5": // Super Healing Potion
			if(config["ift_superhealing"])
			{
				newName = "";
			}
			break;
		case "mp5": // Super Mana Potion
			if(config["ift_supermana"])
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
			if (key !== 'id' && key !== 'Key')
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
	itemNameAffixesJson.forEach((item) =>
	{
		if (item.Key === "gld")
		{
			// Update all localizations
			for (let key in item)
			{
				if (key !== 'id' && key !== 'Key')
				{
					item[key] = "";
				}
			}
		}
	});
}

// Rune highlighting and light beam
itemRunesJson.forEach((item) =>
{
	const runeName = item.Key;
	let newName = null;

	if (config["lbr_" + runeName])
	{
		// Get the string "Pul Rune", get the first word, convert to lowercase, append the rest
		const runeFile = runesDir + "\\" + item.enUS.split(" ")[0].toLowerCase() + "_rune.json";

		// Apply the lightbeam
		addLightBeam(runeFile);
	}

	switch (runeName)
	{
		// Low runes from El to Lem
		case "r01":
		case "r02":
		case "r03":
		case "r04":
		case "r05":
		case "r06":
		case "r07":
		case "r08":
		case "r09":
		case "r10":
		case "r11":
		case "r12":
		case "r13":
		case "r14":
		case "r15":
		case "r16":
		case "r17":
		case "r18":
		case "r19":
			// remove leading 'r', then convert to number to remove any leading zero for first 9 levels
			newName = item.enUS + ` ÿc5[ÿc7` + Number(runeName.substring(1)) + `ÿc5]`;
			break;
			// Lem, Pul, Um, Mal, Ist
		case "r20":
		case "r21":
		case "r22":
		case "r23":
		case "r24":
			newName = `ÿc1*  ÿc@` + item.enUS + ` ÿc0[ÿc1` + runeName.substring(1) + `ÿc0]  ÿc1*`;
			break;
			// Gul, Vex, Ohm, Lo
		case "r25":
		case "r26":
		case "r27":
		case "r28":
			newName = `ÿcA*ÿc1*  ÿc@` + item.enUS + ` ÿc0[ÿc1` + runeName.substring(1) + `ÿc0]  ÿcA*ÿc1*`;
			break;
			// Sur, Ber, Jah, Cham, Zod
		case "r29":
		case "r30":
		case "r31":
		case "r32":
		case "r33":
			newName = `ÿc;*ÿc2*ÿc1*    ÿc@` + item.enUS + ` ÿc0[ÿc2` + runeName.substring(1) + `ÿc0]    ÿc;*ÿc2*ÿc1*`;
			break;
	}

	if (newName != null)
	{
		// Update all localizations
		for (let key in item)
		{
			if (key !== 'id' && key !== 'Key')
			{
				item[key] = newName;
			}
		}
	}
});

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

if(config["misc_debug"])
{
	const timeEnd = new Date().getTime();
	// It thinks timeStart doesn't exist, whatever man
	// @ts-ignore
	const timeDuration = timeEnd - timeStart;
	console.log("[DEBUG] Install took " + timeDuration / 1000 + " seconds");
}
