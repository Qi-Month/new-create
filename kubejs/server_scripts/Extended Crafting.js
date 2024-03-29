ServerEvents.recipes(e => {
	// Create
	let {
		compacting,
		crushing,
		cutting,
		deploying,
		emptying,
		filling,
		haunting,
		mechanical_crafting,
		milling,
		mixing,
		pressing,
		sandpaper_polishing,
		sequenced_assembly,
		splashing
	} = e.recipes.create
	// KubeJS
	let {
		shaped,
		shapeless
	} = e.recipes.kubejs
	// Minecraft
	let {
		blasting,
		campfire_cooking,
		crafting_shaped,
		crafting_shapeless,
		smelting,
		smithing_transform,
		smoking,
		stonecutting
	} = e.recipes.minecraft
	let {
		shaped_table,
		shapeless_table
	} = e.recipes.extendedcrafting
	// e.custom({
	// 	"type": "extendedcrafting:shaped_table",
	// 	"pattern": [
	// 		'AAAAA',
	// 		'A   A',
	// 		'A B A',
	// 		'A   A',
	// 		'AAAAA'
	// 	],
	// 	"key": {
	// 		"A": {
	// 			"item": "minecraft:apple"
	// 		},
	// 		"B": {
	// 			"item": "diamond"
	// 		}
	// 	},
	// 	"result": {
	// 		"item": '2x minecraft:stone'
	// 	}
	// })

	//example↑

	// 动力搅拌机
	e.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
			"  A  ",
			"BCACB",
			"DDEDD",
			"BCECB",
			"  F  "
		],
		"key": {
			"A": {
				"tag": "forge:ingots/bronze"
			},
			"B": {
				"tag": "forge:plates/bronze"
			},
			"C": {
				"tag": "minecraft:oak_logs"
			},
			"D": {
				"item": "create:cogwheel"
			},
			"E": {
				"tag": "create:shaft_add"
			},
			"F": {
				"item": "create:whisk"
			}
		},
		"result": {
			"item": "create:mechanical_mixer"
		}
	})


	//动力锟压机
	e.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
			"  A  ",
			"BBABB",
			"FCDCF",
			"BBABB",
			" EEE "
		],
		"key": {
			"A": {
				"tag": 'create:shaft_add'
			},
			"B": {
				"tag": "minecraft:logs"
			},
			"C": {
				"item": "create:cogwheel"
			},
			"D": {
				"item": 'create:large_cogwheel'
			},
			"E": {
				"item": 'kubejs:cast_iron_block'
			},
			"F": {
				"tag": "minecraft:planks"
			}
		},
		"result": {
			"item": 'create:mechanical_press'
		}
	})


	//动力风扇
	e.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
			"ABBBA",
			"BCDCB",
			"BDEDB",
			"BCDCB",
			"ABBBA"
		],
		"key": {
			"A": {
				"item": "create:andesite_casing"
			},
			"B": {
				"tag": "minecraft:planks"
			},
			"C": {
				"item": "create:cogwheel"
			},
			"D": {
				"tag": "create:shaft_add"
			},
			"E": {
				"item": 'create:propeller'
			}
		},
		"result": {
			"item": 'create:encased_fan'
		}
	})

	//机械手
	e.custom({
		"type": "extendedcrafting:shaped_table",
		"pattern": [
			' A ',
			'BCB',
			'FEF',
			'BFB',
			' D '
		],
		"key": {
			"A": {
				"tag": 'create:shaft_add'
			},
			"B": {
				"item": ' create:andesite_casing'
			},
			"C": {
				"tag": 'forge:ingots/brass'
			},
			"D": {
				"item": 'create:brass_hand'
			},
			"E": {
				"tag": 'minecraft:planks'
			},
			"F": {
				"tag": 'forge:ingots/andesite_alloy'
			}
		},
		"result": {
			"item": 'create:deployer'
		}
	})

	//黄铜手
	shaped_table('create:brass_hand', [
		'  AAA',
		' ABBA',
		'ABBA ',
		'CBBA ',
		'CCAA '
	], {
		A: '#forge:plates/brass',
		B: '#forge:ingots/brass',
		C: 'create:andesite_alloy'
	})

	//轧机
	shaped_table('createaddition:rolling_mill', [
		'AABAA',
		'ED DE',
		'EDBDE',
		'CCCCC'
	], {
		A: 'kubejs:cast_iron_sheet',
		B: 'create:shaft',
		C: 'create:andesite_casing',
		D: 'kubejs:carbon_plate',
		E: '#forge:ingots/andesite_alloy'
	})

	shaped_table('6x createaddition:capacitor',[
		' AAA ',
		' ABA ',
		' ACA ',
		'ADEDA',
		'AFAFA'
	],{
		A: '#forge:plates/aluminum',
		B: 'immersiveengineering:wirecoil_copper',
		C: 'immersiveengineering:component_electronic',
		D: 'immersiveengineering:logic_circuit',
		E: 'kubejs:inductive_mechanism',
		F: '#forge:wires/iron'
	})
})