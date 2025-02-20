// priority: 0

ServerEvents.recipes(mekanism => { 

	// Removal
	mekanism.remove({ output: 'mekanism:block_steel'});
  })

  ServerEvents.tags('item', mekanism => { 

    mekanism.remove('forge:storage_blocks/steel', 'mekanism:block_steel')
  })


  console.info('[KubeJS] Mekanism recipes loaded.')