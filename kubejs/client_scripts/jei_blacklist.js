/**
 * JEI Item Hiding Event Handler
 */
JEIEvents.hideItems(event => {
    event.hide([
  
      // Minecraft
      'minecraft:barrier',
      'minecraft:jigsaw',
      'minecraft:light',
      'minecraft:structure_block',
      'minecraft:structure_void',
  
      // FTB Quests
      'ftbquests:barrier',
      'ftbquests:stage_barrier',
      'ftbquests:detector',
      'ftbquests:loot_crate_opener',
      'ftbquests:screen_1',
      'ftbquests:screen_3',
      'ftbquests:screen_5',
      'ftbquests:screen_7',
      'ftbquests:task_screen_configurator',

      // Immersive Engineering
      'immersiveengineering:pickaxe_steel',
      'immersiveengineering:shovel_steel',
      'immersiveengineering:axe_steel',
      'immersiveengineering:hoe_steel',
      'immersiveengineering:sword_steel',
      'immersiveengineering:armor_steel_helmet',
      'immersiveengineering:armor_steel_chestplate',
      'immersiveengineering:armor_steel_leggings',
      'immersiveengineering:armor_steel_boots',
      'immersiveengineering:nugget_steel',
      'immersiveengineering:ingot_steel',
      'immersiveengineering:dust_steel',
      'immersiveengineering:dust_lead',
      'immersiveengineering:ingot_lead',
      'immersiveengineering:nugget_lead',
      'immersiveengineering:raw_lead',
      'immersiveengineering:raw_block_lead',
      'immersiveengineering:storage_lead',
      'immersiveengineering:ore_lead',
      'immersiveengineering:deepslate_ore_lead',
      'immersiveengineering:slab_storage_lead',
      'immersiveengineering:dust_uranium',
      'immersiveengineering:raw_uranium',
      'immersiveengineering:raw_block_uranium',
      'immersiveengineering:ingot_uranium',
      'immersiveengineering:nugget_uranium',
      'immersiveengineering:ore_uranium',
      'immersiveengineering:deepslate_ore_uranium',
      'immersiveengineering:ore_uranium',
      'immersiveengineering:storage_uranium',
      'immersiveengineering:slab_storage_uranium',

      // Mekanism
      'mekanism:block_steel',

      // Ad Astra
      'ad_astra:iron_rod',
      'ad_astra:iron_plate',
      'ad_astra:steel_ingot',
      'ad_astra:steel_nugget',
      'ad_astra:steel_plate',
      'ad_astra:steel_rod',
      'ad_astra:steel_block',

    ]);
  });