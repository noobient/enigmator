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

export function addLightBeam(jsonFile: string): void
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
