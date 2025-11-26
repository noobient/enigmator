import { addLightBeam } from "./lightBeam";

export function highlightRunes(jsonData: JSONData, runesDir: string): void
{
	// @ts-ignore
	jsonData.forEach((item: any) =>
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
}