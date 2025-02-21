// priority: 0

ServerEvents.recipes(silentgear => { 

	// Total Removal
	silentgear.remove({ output: 'silentgear:iron_rod'});

})

ServerEvents.tags('item', silentgear => { 

    silentgear.remove('forge:rods/iron', 'silentgear:iron_rod');

})


console.info('[KubeJS] Silent Gear kubejs loaded.')