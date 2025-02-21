// priority: 0

const poweredshields = [
    'spartanshields:basic_mekanist_basic_shield',
    'spartanshields:basic_mekanist_tower_shield',
    'spartanshields:advanced_mekanist_basic_shield',
    'spartanshields:advnced_mekanist_tower_shield',
    'spartanshields:elite_mekanist_basic_shield',
    'spartanshields:elite_mekanist_tower_shield',
    'spartanshields:ultimate_mekanist_basic_shield',
    'spartanshields:ultimate_mekanist_tower_shield'
]

ServerEvents.tags('item', spartanshields => {
    spartanshields.add('forge:shields/powered', poweredshields);
});

console.info('[KubeJS] Spartan Shields kubejs loaded.')