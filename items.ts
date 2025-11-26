export function highlightItems(jsonData: JSONData): void
{
	// @ts-ignore
	jsonData.forEach((item: any) =>
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
				if (config["ihl_jewel"])
				{
					newName = `<<< Jewel >>>ÿcN`;
				}
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
}
