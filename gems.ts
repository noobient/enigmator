import { addLightBeam } from "./lightBeam";

export function highlightGems(jsonData: JSONData, gemsDir: string): void
{
	// @ts-ignore
	jsonData.forEach((item: any) =>
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

			if (config["ihl_gem"])
			{
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
		}
	});
}
