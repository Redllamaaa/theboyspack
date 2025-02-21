// priority: 0

const scalearmor = [
    'iceandfire:armor_red_chestplate',
    'iceandfire:armor_red_helmet',
    'iceandfire:armor_red_leggings',
    'iceandfire:armor_red_boots',
    'iceandfire:armor_bronze_chestplate',
    'iceandfire:armor_bronze_helmet',
    'iceandfire:armor_bronze_leggings',
    'iceandfire:armor_bronze_boots',
    'iceandfire:armor_green_chestplate',
    'iceandfire:armor_green_helmet',
    'iceandfire:armor_green_leggings',
    'iceandfire:armor_green_boots',
    'iceandfire:armor_gray_chestplate',
    'iceandfire:armor_gray_helmet',
    'iceandfire:armor_gray_leggings',
    'iceandfire:armor_gray_boots',
    'iceandfire:armor_blue_chestplate',
    'iceandfire:armor_blue_helmet',
    'iceandfire:armor_blue_leggings',
    'iceandfire:armor_blue_boots',
    'iceandfire:armor_white_chestplate',
    'iceandfire:armor_white_helmet',
    'iceandfire:armor_white_leggings',
    'iceandfire:armor_white_boots',
    'iceandfire:armor_sapphire_chestplate',
    'iceandfire:armor_sapphire_helmet',
    'iceandfire:armor_sapphire_leggings',
    'iceandfire:armor_sapphire_boots',
    'iceandfire:armor_silver_chestplate',
    'iceandfire:armor_silver_helmet',
    'iceandfire:armor_silver_leggings',
    'iceandfire:armor_silver_boots',
    'iceandfire:armor_electric_chestplate',
    'iceandfire:armor_electric_helmet',
    'iceandfire:armor_electric_leggings',
    'iceandfire:armor_electric_boots',
    'iceandfire:armor_amythest_chestplate',
    'iceandfire:armor_amythest_helmet',
    'iceandfire:armor_amythest_leggings',
    'iceandfire:armor_amythest_boots',
    'iceandfire:armor_copper_chestplate',
    'iceandfire:armor_copper_helmet',
    'iceandfire:armor_copper_leggings',
    'iceandfire:armor_copper_boots',
    'iceandfire:armor_black_chestplate',
    'iceandfire:armor_black_helmet',
    'iceandfire:armor_black_leggings',
    'iceandfire:armor_black_boots'
];

const tidearmor = [
    'iceandfire:tide_blue_helmet',
    'iceandfire:tide_blue_chestplate',
    'iceandfire:tide_blue_leggings',
    'iceandfire:tide_blue_boots',
    'iceandfire:tide_bronze_helmet',
    'iceandfire:tide_bronze_chestplate',
    'iceandfire:tide_bronze_leggings',
    'iceandfire:tide_bronze_boots',
    'iceandfire:tide_deepblue_helmet',
    'iceandfire:tide_deepblue_chestplate',
    'iceandfire:tide_deepblue_leggings',
    'iceandfire:tide_deepblue_boots',
    'iceandfire:tide_green_helmet',
    'iceandfire:tide_green_chestplate',
    'iceandfire:tide_green_leggings',
    'iceandfire:tide_green_boots',
    'iceandfire:tide_purple_helmet',
    'iceandfire:tide_purple_chestplate',
    'iceandfire:tide_purple_leggings',
    'iceandfire:tide_purple_boots',
    'iceandfire:tide_red_helmet',
    'iceandfire:tide_red_chestplate',
    'iceandfire:tide_red_leggings',
    'iceandfire:tide_red_boots',
    'iceandfire:tide_teal_helmet',
    'iceandfire:tide_teal_chestplate',
    'iceandfire:tide_teal_leggings',
    'iceandfire:tide_teal_boots'

];

ServerEvents.tags('item', iceandfire => {
    iceandfire.add('forge:armors/scale', scalearmor);
    iceandfire.add('forge:armors/tide', tidearmor);
});

console.info('[KubeJS] Ice & Fire: Dragons kubejs loaded.')

