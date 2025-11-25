const langJsonDir = "local\\lng\\strings";

const lightBeamParticleJson = {
	"path": "data/hd/vfx/particles/overlays/object/horadric_light/fx_horadric_light.particles"
}

const lightBeamEntityJson = [
{
	"type": "Entity",
	"name": "droplight",
	"id": 9999996974,
	"components": [
	{
		"type": "TransformDefinitionComponent",
		"name": "component_transform1",
		"position":
		{
			"x": 0.0,
			"y": 0.0,
			"z": 0.0
		},
		"orientation":
		{
			"x": 0.0,
			"y": 0.0,
			"z": 0.0,
			"w": 1.0
		},
		"scale":
		{
			"x": 2.0,
			"y": 2.0,
			"z": 2.0
		},
		"inheritOnlyPosition": false
	},
	{
		"type": "VfxDefinitionComponent",
		"name": "entity_vfx_gousemyideaandshareyourfilthymods",
		"filename": "data/hd/vfx/particles/overlays/common/valkyriestart/valkriestart_overlay.particles",
		"hardKillOnDestroy": false
	}]
},
{
	"type": "Entity",
	"name": "droplight",
	"id": 9999996974,
	"components": [
	{
		"type": "TransformDefinitionComponent",
		"name": "component_transform1",
		"position":
		{
			"x": 0.0,
			"y": 0.0,
			"z": 0.0
		},
		"orientation":
		{
			"x": 0.0,
			"y": 0.0,
			"z": 0.0,
			"w": 5.0
		},
		"scale":
		{
			"x": 2.0,
			"y": 2.0,
			"z": 2.0
		},
		"inheritOnlyPosition": false
	},
	{
		"type": "VfxDefinitionComponent",
		"name": "entity_vfx_gousemyideaandshareyourfilthymods",
		"filename": "data/hd/vfx/particles/overlays/object/horadric_light/fx_horadric_light.particles",
		"hardKillOnDestroy": false
	}]
},
{
	"type": "Entity",
	"name": "droplight",
	"id": 9999996975,
	"components": [
	{
		"type": "TransformDefinitionComponent",
		"name": "component_transform1",
		"position":
		{
			"x": 0.0,
			"y": -5.0,
			"z": 0.0
		},
		"orientation":
		{
			"x": 0.0,
			"y": 0.0,
			"z": 0.0,
			"w": 5.0
		},
		"scale":
		{
			"x": 2.0,
			"y": 2.0,
			"z": 2.0
		},
		"inheritOnlyPosition": false
	},
	{
		"type": "VfxDefinitionComponent",
		"name": "entity_vfx_gousemyideaandshareyourfilthymods",
		"filename": "data/hd/vfx/particles/overlays/object/horadric_light/fx_horadric_light.particles",
		"hardKillOnDestroy": false
	}]
},
{
	"type": "Entity",
	"name": "droplight",
	"id": 9999996976,
	"components": [
	{
		"type": "TransformDefinitionComponent",
		"name": "component_transform1",
		"position":
		{
			"x": 0.0,
			"y": -3.0,
			"z": 0.0
		},
		"orientation":
		{
			"x": 0.0,
			"y": 0.0,
			"z": 0.0,
			"w": 5.0
		},
		"scale":
		{
			"x": 2.0,
			"y": 2.0,
			"z": 2.0
		},
		"inheritOnlyPosition": false
	},
	{
		"type": "VfxDefinitionComponent",
		"name": "entity_vfx_gousemyideaandshareyourfilthymods",
		"filename": "data/hd/vfx/particles/overlays/object/horadric_light/fx_horadric_light.particles",
		"hardKillOnDestroy": false
	}]
}]

function addLightBeam(jsonFile)
{
	// Read the JSON file
	var itemJson = D2RMM.readJson(jsonFile);

	// Extend the JSON with the light beam stuff
	itemJson.dependencies.particles.push(lightBeamParticleJson);

	for (var i in lightBeamEntityJson)
	{
		itemJson.entities.push(lightBeamEntityJson[i]);
	}

	// Write the JSON file
	D2RMM.writeJson(jsonFile, itemJson);
}

function highlightGems(jsonFile)
{
	const jsonFilePath = langJsonDir + "\\" + jsonFile + ".json";
	const gemsDir = "hd\\items\\misc\\gem";

	// Parse the JSON holding the items
	const itemJson = D2RMM.readJson(jsonFilePath);

	itemJson.forEach((item) =>
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
				gemColor = `ÿcQ`;
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
			if (Object.hasOwn(config, "lbg_" + item.Key) && config["lbg_" + item.Key])
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
			for (const key in item)
			{
				if (key !== 'id' && key !== 'Key')
				{
					item[key] = newName;
				}
			}
		}
	});

	D2RMM.writeJson(jsonFilePath, itemJson);
}

// More vivid gem names
if (Object.hasOwn(config, "misc_gemhl") && config["misc_gemhl"])
{
	highlightGems("item-names");
	// For whatever braindamaged reason, the normal Sapphire, Emerald, Ruby and Diamond
	// definitions are not in item-names, but in item-nameaffixes instead
	highlightGems("item-nameaffixes");
}

//Change items in item-names.json (potions, scrolls, charms, jewels)
const itemNamesFilename = 'local\\lng\\strings\\item-names.json';
const itemNames = D2RMM.readJson(itemNamesFilename);

itemNames.forEach((item) =>
{
	const itemtype = item.Key;
	let newName = null;

	// Highlight base item if set to be highlighted, but first check if it actually exists in the config
	if (Object.hasOwn(config, "bth_" + itemtype) && config["bth_" + itemtype])
	{
		newName = item.enUS + ` ÿc;*ÿc2*ÿc1* ÿc@Base ÿc;*ÿc2*ÿc1*`;
	}

	switch (itemtype)
	{
		case "rvl": // Full Rejuvenation Potion
			newName = `Full ÿc;Rejuvenationÿc0 Potion`;
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
		// update all localizations
		for (const key in item)
		{
			if (key !== 'id' && key !== 'Key')
			{
				item[key] = newName;
			}
		}
	}
});
D2RMM.writeJson(itemNamesFilename, itemNames);

// Change gold item label on the ground
if (Object.hasOwn(config, "misc_gold") && config["misc_gold"])
{
	const itemNameAffixesFilename = 'local\\lng\\strings\\item-nameaffixes.json';
	const itemNameAffixes = D2RMM.readJson(itemNameAffixesFilename);

	itemNameAffixes.forEach((item) =>
	{
		const itemtype = item.Key;
		let newName = null;

		// Gold
		if (itemtype === 'gld')
		{
			newName = ``;
		}

		if (newName != null)
		{
			// update all localizations
			for (const key in item)
			{
				if (key !== 'id' && key !== 'Key')
				{
					item[key] = newName;
				}
			}
		}
	});

	D2RMM.writeJson(itemNameAffixesFilename, itemNameAffixes);
}

// Directory containing rune definitions
const runesDir = "hd\\items\\misc\\rune";

//Change high rune names on the ground
const itemRunesFilename = 'local\\lng\\strings\\item-runes.json';
const itemRunes = D2RMM.readJson(itemRunesFilename);

itemRunes.forEach((item) =>
{
	const itemtype = item.Key;
	let newName = null;

	if (Object.hasOwn(config, "lbr_" + itemtype) && config["lbr_" + itemtype])
	{
		// Get the string "Pul Rune", get the first word, convert to lowercase, append the rest
		const runeFile = runesDir + "\\" + item.enUS.split(" ")[0].toLowerCase() + "_rune.json";

		// Apply the lightbeam
		addLightBeam(runeFile);
	}

	switch (itemtype)
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
			newName = item.enUS + ` ÿc5[ÿc7` + Number(itemtype.substring(1)) + `ÿc5]`;
			break;
			// Lem, Pul, Um, Mal, Ist
		case "r20":
		case "r21":
		case "r22":
		case "r23":
		case "r24":
			newName = `ÿc1*  ÿc@` + item.enUS + ` ÿc0[ÿc1` + itemtype.substring(1) + `ÿc0]  ÿc1*`;
			break;
			// Gul, Vex, Ohm, Lo
		case "r25":
		case "r26":
		case "r27":
		case "r28":
			newName = `ÿcA*ÿc1*  ÿc@` + item.enUS + ` ÿc0[ÿc1` + itemtype.substring(1) + `ÿc0]  ÿcA*ÿc1*`;
			break;
			// Sur, Ber, Jah, Cham, Zod
		case "r29":
		case "r30":
		case "r31":
		case "r32":
		case "r33":
			newName = `ÿc;*ÿc2*ÿc1*    ÿc@` + item.enUS + ` ÿc0[ÿc2` + itemtype.substring(1) + `ÿc0]    ÿc;*ÿc2*ÿc1*`;
			break;
	}

	if (newName != null)
	{
		// update all localizations
		for (const key in item)
		{
			if (key !== 'id' && key !== 'Key')
			{
				item[key] = newName;
			}
		}
	}
});

D2RMM.writeJson(itemRunesFilename, itemRunes);

//change on-ground tooltip style to be slightly smaller and less see-through
const profileHDFilename = 'global\\ui\\layouts\\_profilehd.json';
const profileHD = D2RMM.readJson(profileHDFilename);
profileHD.TooltipStyle.inGameBackgroundColor = [0, 0, 0, 0.85],
profileHD.TooltipStyle.backgroundColor = [0, 0, 0, 0.9],
//profileHD.TooltipFontSize = 32,
profileHD.TooltipStyle.inGameShowItemsSelectedBackgroundColor = [0.1, 0.1, 0.2, 1],
D2RMM.writeJson(profileHDFilename, profileHD);
