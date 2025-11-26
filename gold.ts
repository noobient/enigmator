export function filterGold(jsonData: JSONData): void
{
	// @ts-ignore
	jsonData.forEach((item: any) =>
	{
		if (item.Key === "gld")
		{
			// Update all localizations
			for (let key in item)
			{
				if (key !== "id" && key !== "Key")
				{
					item[key] = "";
				}
			}
		}
	});
}
