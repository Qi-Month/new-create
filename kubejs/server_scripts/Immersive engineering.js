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

	//铜锭
	e.custom({
		"type": "immersiveengineering:alloy",
		"input0": {
			"tag": "forge:raw_materials/copper"
		},
		"input1": {
			"tag": "minecraft:coals"
		},
		"result": {
			"base_ingredient": {
				"tag": "forge:ingots/copper"
			},
			"conut": 1
		},
		"time": 300
	})

	// 铸铁
	e.custom({
		"type": "immersiveengineering:alloy",
		"input0": {
			"tag": "forge:ingots/iron"
		},
		"input1": {
			"tag": "forge:ingots/iron"
		},
		"result": {
			"base_ingredient": {
				"item": "kubejs:cast_iron_ingot"
			},
			"conut": 1
		},
		"time": 150
	})

	//工程师锤
	shaped("immersiveengineering:hammer", [
		' AB',
		'ECA',
		'CF '
	], {
		A: "kubejs:charred_cobblestone",
		B: "#forge:string",
		C: "#forge:rods/wooden",
		E: '#forge:hammer',
		F: '#forge:saw'
	}).damageIngredient('#kuebjs:tools')

	// 防腐木板
	shaped('8x immersiveengineering:treated_wood_horizontal', [
		'PPP',
		'PEP',
		'PPP'
	], {
		P: '#minecraft:planks',
		E: 'kubejs:embalming_fluid_bucket'
	}).replaceIngredient('kubejs:embalming_fluid_bucket', 'minecraft:bucket')

	//锡锭
	e.custom({
		"type": "immersiveengineering:alloy",
		"input0": {
			"item": 'create:crushed_raw_tin'
		},
		"input1": {
			"tag": "minecraft:coals"
		},
		"result": {
			"base_ingredient": {
				"tag": 'forge:ingots/tin'
			},
			"count": 1
		},
		"time": 300
	})

	//青铜锭
	e.custom({
		"type": "immersiveengineering:alloy",
		"input0": {
			"base_ingredient": {
				"tag": 'forge:ingots/copper'
			},
			"count": 3
		},
		"input1": {
			"tag": 'forge:ingots/tin'
		},
		"result": {
			"count": 4,
			"item": 'thermal:bronze_ingot'
		},
		"time": 300
	})

	// 高炉砖
	shaped('3x immersiveengineering:blastbrick', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: "minecraft:brick",
		B: '#forge:ingots/copper',
		C: 'immersiveengineering:alloybrick'
	}).id('immersiveengineering:crafting/blastbrick')

	//焦炉砖
	shaped('3x immersiveengineering:cokebrick', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: "minecraft:clay_ball",
		B: '#forge:ingots/copper',
		C: "immersiveengineering:alloybrick"
	}).id('immersiveengineering:crafting/cokebrick')

	//矿渣
	e.custom({
		"type": "immersiveengineering:blast_furnace",
		"input": { "tag": "minecraft:logs" },
		"result": { "item": "thermal:coal_coke" },
		"slag": { "item": "immersiveengineering:slag" },
		"time": 200
	})

	// 铁板金属

	compacting('2x immersiveengineering:sheetmetal_iron', [
		'4x kubejs:cast_iron_sheet'
	]).id('immersiveengineering:crafting/sheetmetal_iron')

	// 传送带
	shaped('immersiveengineering:conveyor_basic', [
		'AAA',
		'BCB'
	], {
		A: '#forge:leather',
		B: '#forge:ingots/copper',
		C: 'minecraft:redstone'
	}).id('immersiveengineering:crafting/conveyor_basic')

	//工业机壳
	e.custom({
		"type": "immersiveengineering:metal_press",
		"energy": 2400,
		"input": {
			"base_ingredient": {
				"tag": 'forge:plates/industrial_iron'
			},
			"count": 4
		},
		"mold": 'kubejs:mold_block',
		"result": {
			"item": 'create_dd:industrial_casing'
		}
	})

	//金属模具:块
	e.custom({
		"type": "immersiveengineering:blueprint",
		"category": "molds",
		"inputs": [
			{
				"base_ingredient": {
					"tag": "forge:plates/steel"
				},
				"count": 3
			},
			{
				"item": "immersiveengineering:wirecutter"
			}
		],
		"result": {
			"item": 'kubejs:mold_block'
		}
	})
})