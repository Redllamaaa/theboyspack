// priority: 0

ServerEvents.recipes(inventorypets => { 

	// Total Removal
	inventorypets.remove({ output: 'inventorypets:pet_illuminati'});
    inventorypets.remove({ output: 'inventorypets:pet_meta'});


})



console.info('[KubeJS] Inventory Pets kubejs loaded.')