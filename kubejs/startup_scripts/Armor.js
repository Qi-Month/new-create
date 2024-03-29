ItemEvents.armorTierRegistry(e => {
	e.add('radiant', tier => {
		tier.durabilityMultiplier = 35 // 耐久系数,具体得上wiki看公式
		tier.slotProtections = [6, 8, 10, 6] // 护甲值,分别对应[鞋子 裤腿 胸甲 头盔]
		tier.toughness = 4  // 韧性
		tier.knockbackResistance = 0.6  // 防击退,钻石0.3,同时代表着每件各0.3(30%)
		tier.enchantmentValue = 12  // 附魔等级
		tier.repairIngredient = '#forge:ingots/refined_radiance'  // 修复材料(填写#Tag)
		tier.equipSound = 'minecraft:item.armor.equip_diamond'  // 穿戴音效
	})
})
// 物品贴图照常放在item
// 身上的贴图要放在assets\kubejs\textures\models\armor
StartupEvents.registry('item', e => {
	let Item = (
		Name,  // Item ID
		Type, // 类型
		Rarity,  // 稀有度
		Tire,  // 盔甲图层
		Glow  // 是否发光
	) => {
		e.create(Name, Type)
			.rarity(Rarity)
			.tier(Tire)
			.glow(Glow)
	}
	// 光辉套
	Item('radiant_helmet', 'helmet', 'epic', 'radiant', true)
	Item('radiant_chestplate', 'chestplate', 'epic', 'radiant', true)
	Item('radiant_leggings', 'leggings', 'epic', 'radiant', true)
	Item('radiant_boots', 'boots', 'epic', 'radiant', true)
})