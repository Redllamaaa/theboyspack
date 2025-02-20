// priority: 0

ServerEvents.recipes(immersiveengineering => { 

	// Total Removal
	immersiveengineering.remove({ output: 'immersiveengineering:pickaxe_steel'});
	immersiveengineering.remove({ output: 'immersiveengineering:shovel_steel'});
	immersiveengineering.remove({ output: 'immersiveengineering:axe_steel'});
	immersiveengineering.remove({ output: 'immersiveengineering:hoe_steel'});
	immersiveengineering.remove({ output: 'immersiveengineering:sword_steel'});
	immersiveengineering.remove({ output: 'immersiveengineering:armor_steel_helmet'});
	immersiveengineering.remove({ input: 'immersiveengineering:armor_steel_helmet'});
	immersiveengineering.remove({ output: 'immersiveengineering:armor_steel_chestplate'});
	immersiveengineering.remove({ input: 'immersiveengineering:armor_steel_chestplate'});
	immersiveengineering.remove({ output: 'immersiveengineering:armor_steel_leggings'});
	immersiveengineering.remove({ input: 'immersiveengineering:armor_steel_leggings'});
	immersiveengineering.remove({ output: 'immersiveengineering:armor_steel_boots'});
	immersiveengineering.remove({ input: 'immersiveengineering:armor_steel_boots'});
	immersiveengineering.remove({ output: 'immersiveengineering:nugget_steel'});
	immersiveengineering.remove({ output: 'immersiveengineering:ingot_steel'});
	immersiveengineering.remove({ output: 'immersiveengineering:ingot_lead'});
	immersiveengineering.remove({ output: 'immersiveengineering:storage_lead'});
	immersiveengineering.remove({ output: 'immersiveengineering:slab_storage_lead'});
	immersiveengineering.remove({ output: 'immersiveengineering:nugget_lead'});
	immersiveengineering.remove({ output: 'immersiveengineering:ingot_uranium'});
	immersiveengineering.remove({ output: 'immersiveengineering:raw_uranium'});
	immersiveengineering.remove({ output: 'immersiveengineering:raw_block_uranium'});
	immersiveengineering.remove({ output: 'immersiveengineering:raw_lead'});
	immersiveengineering.remove({ output: 'immersiveengineering:raw_block_lead'});
	immersiveengineering.remove({ output: 'immersiveengineering:nugget_uranium'});
	immersiveengineering.remove({ output: 'immersiveengineering:storage_uranium'});
	immersiveengineering.remove({ output: 'immersiveengineering:slab_storage_uranium'});


    // Recipe Edits
    immersiveengineering.remove({ id: 'immersiveengineering:crafting/ingot_steel_to_storage_steel'});
    immersiveengineering.shapeless(
        Item.of('immersiveengineering:storage_steel', 1),
        [
          '9x mekanism:ingot_steel'
        ]
      ).id("theboyspack:crafting/storage_steel")

	immersiveengineering.replaceInput(
		{input: 'immersiveengineering:ingot_steel'},
		'immersiveengineering:ingot_steel',
		'mekanism:steel_ingot'
	)
	immersiveengineering.replaceInput(
		{input: 'immersiveengineering:ingot_uranium'},
		'immersiveengineering:ingot_uranium',
		'mekanism:ingot_uranium'
	)

})

ServerEvents.tags('item', immersiveengineering => { 

    immersiveengineering.remove('forge:ingots/steel', 'immersiveengineering:ingot_steel')
	immersiveengineering.remove('forge:nuggets/steel', 'immersiveengineering:nugget_steel')
	immersiveengineering.remove('forge:dusts/steel', 'immersiveengineering:dust_steel')
	immersiveengineering.remove('forge:ingots/lead', 'immersiveengineering:ingot_lead')
	immersiveengineering.remove('forge:nuggets/lead', 'immersiveengineering:nugget_lead')
	immersiveengineering.remove('forge:dusts/lead', 'immersiveengineering:dust_lead')
	immersiveengineering.remove('forge:storage_blocks/lead', 'immersiveengineering:storage_lead')
	immersiveengineering.remove('forge:ores/lead', 'immersiveengineering:ore_lead')
	immersiveengineering.remove('forge:ores/lead', 'immersiveengineering:deepslate_ore_lead')
	immersiveengineering.remove('forge:storage_blocks/raw_lead', 'immersiveengineering:raw_block_lead')
	immersiveengineering.remove('forge:raw_materials/lead', 'immersiveengineering:raw_lead')
	immersiveengineering.remove('forge:ores/uranium', 'immersiveengineering:ore_uranium')
	immersiveengineering.remove('forge:ores/uranium', 'immersiveengineering:deepslate_ore_uranium')
	immersiveengineering.remove('forge:storage_blocks/raw_uranium', 'immersiveengineering:raw_block_uranium')
	immersiveengineering.remove('forge:raw_materials/uranium', 'immersiveengineering:raw_uranium')
	immersiveengineering.remove('forge:ingots/uranium', 'immersiveengineering:ingot_uranium')
	immersiveengineering.remove('forge:nuggets/uranium', 'immersiveengineering:nugget_uranium')
	immersiveengineering.remove('forge:dusts/uranium', 'immersiveengineering:dust_uranium')
	immersiveengineering.remove('forge:storage_blocks/uranium', 'immersiveengineering:storage_uranium')

})


console.info('[KubeJS] Immersive Engineering recipes loaded.')