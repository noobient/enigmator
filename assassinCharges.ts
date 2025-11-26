// Assassin Charges HUD to be used by Mosaic Sin builds.
// Original credits go to Bonesy, then Warren1001 for slight texture editing and reordering of icons.
// Adapted to D2RMM by ispeaknousa.
// Rewritten to procedural JSON generation and integrated into Enigmator by Noobient.

const entityJson = {
	"type":"Entity",
	"name":"entity_root",
	"id":0,
	"components":[
		{
			"type":"VfxDefinitionComponent",
			"name":"component_vfx",
			"filename":"",
			"hardKillOnDestroy":true
		},
		{
			"type":"TransformDefinitionComponent",
			"name":"entity_root_TransformDefinition",
			"position":{
				"x":0.0,
				"y":0.0,
				"z":0.0
			},
			"inheritOnlyPosition":true
		}
	]
}

const chargesJsonDir = "hd\\overlays\\common";

// filename prefix
// charge icon prefix
// entity ID 1
// entity ID 2 for level 1
// entity ID 2 for level 2
// entity ID 2 for level 3
// charge order index starting from 1
var chargeTypes: string[][]=
[
	[ "other", "phnx", "201238954", "201238954", "1037577841", "1018592639", "1" ],
	[ "cold", "cold", "2337602525", "2846492227", "3682896650", "1077384344", "2" ],
	[ "steal", "cobra", "1322619066", "1322619066", "2158892417", "1591210754", "3" ],
	[ "lightning", "claw", "2217683865", "2217683865", "2181987240", "3339063977", "4" ],
	[ "fire", "fire", "2846492227", "2846492227", "3682896650", "1077384344", "5" ],
	[ "damage", "tiger", "304314862", "304314862", "1174273717", "2010153596", "6" ]
]

// Override JS array sorting to adjust charge icon order by user preference
// This is great because it cannot break if the user sets duplicate values
function sortCharges(a: string[], b: string[])
{
	var aIndex = Number(a[6]);
	var bIndex = Number(b[6]);

	if (aIndex === bIndex)
	{
		return 0;
	}
	else
	{
		return (aIndex < bIndex) ? -1 : 1;
	}
}

// Print charge order for debugging
function printChargeOrder()
{
	var chargeOrder = "";

	for (var i = 0; i < chargeTypes.length; i++)
	{
		chargeOrder += i + 1 + ". " + chargeTypes[i][0] + " (" + (chargeTypes[i][1]) + ") ";
	}

	console.log("[DEBUG] Assassing Charges HUD order: " + chargeOrder);
}

// Apply icon order if set
for (var i = 0; i < chargeTypes.length; i++)
{
	// array is indexed from 0, our icons from 1
	var y = i + 1;

	if (Object.hasOwn(config, "ach_icon" + y))
	{
		// It complains that the value can be null, but it really can't
		// @ts-ignore
		var index = chargeTypes.findIndex(arr => arr.includes(config["ach_icon" + y].toString()));
		chargeTypes[index][6] = y.toString();
	}
}

if (config["misc_debug"])
{
	printChargeOrder();
}

// Reorder the charges array accordingly
chargeTypes.sort(sortCharges);

if (config["misc_debug"])
{
	printChargeOrder();
}

// Sprite positioning
var yValue = 0.0;

if (config["ach_ypos"])
{
	yValue = Number(config["ach_ypos"]);
}
else
{
	yValue = 100.15;
}

var xValue = 155.0;
var zValue = 148.0;
// x and z coordinates are increased / decreased by this value per charge type
const axisStep = 1.9;

export function addAssassinChargesHUD(): void
{
	// Generate the JSON files for 3 levels of 6 charge types 
	for (var i = 0; i < chargeTypes.length; i++)
	{
		for (var x = 1; x <= 3; x++)
		{
			// Construct the JSON file path
			var chargeJsonFile = chargesJsonDir + "\\progressive_" + chargeTypes[i][0] + "_" + x + ".json";
			// Read the JSON
			var chargeJson = D2RMM.readJson(chargeJsonFile);
			// Empty the textures node
			// @ts-ignore
			chargeJson.dependencies.textures = [];
			// Update 1st entity ID, make sure to avoid quotes
			// @ts-ignore
			chargeJson.entities[0].id = Number(chargeTypes[i][2]);
			// Ensure bool is actually bool instead of int, readJson() bug?
			// @ts-ignore
			chargeJson.entities[0].components[0].hardKillOnDestroy = Boolean(chargeJson.entities[0].components[0].hardKillOnDestroy);
			// Add the entity JSON parts
			// @ts-ignore
			chargeJson.entities.push(entityJson);
			// Fix 2nd entity ID, make sure to avoid quotes
			// @ts-ignore
			chargeJson.entities[1].id = Number(chargeTypes[i][x+2]);
			// Fill 2nd entity filename
			// @ts-ignore
			chargeJson.entities[1].components[0].filename = "data/hd/vfx/particles/charge_icons/" + chargeTypes[i][1] + x + ".particles";
			// Generate coordinates
			// @ts-ignore
			chargeJson.entities[1].components[1].position.x = xValue;
			// @ts-ignore
			chargeJson.entities[1].components[1].position.y = yValue;
			// @ts-ignore
			chargeJson.entities[1].components[1].position.z = zValue;
			// Write the changes
			D2RMM.writeJson(chargeJsonFile, chargeJson);
		}

		// Ugly hack to avoid values like 142.29999999999998 using xValue += axisStep
		xValue = Number((xValue + axisStep).toFixed(1));
		zValue = Number((zValue - axisStep).toFixed(1));
	}

	// Copy VFX files
	D2RMM.copyFile("hd\\vfx\\particles\\charge_icons", "hd\\vfx\\particles\\charge_icons", true);
	D2RMM.copyFile("hd\\vfx\\textures\\graphic", "hd\\vfx\\textures\\graphic", true);
}
