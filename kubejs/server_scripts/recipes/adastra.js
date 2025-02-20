// priority: 0

ServerEvents.recipes(adastra => { 

	// Total Removal
	adastra.remove({ id: 'ad_astra:iron_rod'});
	adastra.remove({ output: 'ad_astra:steel_ingot'});
	adastra.remove({ output: 'ad_astra:steel_block'});
	adastra.remove({ output: 'ad_astra:steel_nugget'});
	adastra.remove({ output: 'ad_astra:steel_rods'});

})

ServerEvents.tags('item', adastra => { 

    adastra.remove('forge:plates/iron', 'ad_astra:iron_plate')
	adastra.remove('forge:rods/iron', 'ad_astra:iron_rod')
	adastra.remove('forge:rods/steel', 'ad_astra:steel_rod')
	adastra.remove('forge:storage_blocks/steel', 'ad_astra:steel_block')
	adastra.remove('forge:plates/steel', 'ad_astra:steel_plate')
	adastra.remove('forge:ingots/steel', 'ad_astra:steel_ingot')
	adastra.remove('forge:nuggets/steel', 'ad_astra:steel_nugget')
	adastra.remove('forge:rods/steel', 'ad_astra:steel_rod')

})


console.info('[KubeJS] Ad Astra recipes loaded.')