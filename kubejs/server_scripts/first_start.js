// priority: 5

PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('first_start')) {
      event.player.stages.add('first_start');
  
      event.player.give(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{ad_astra:{0:{Count:1b,id:"ad_astra:astrodux"}},irons_spellbooks:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"irons_spellbooks:iss_guide_book"}}},apotheosis:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}}},ae2:{0:{Count:1b,id:"ae2:guide"}},alexscaves:{0:{Count:1b,id:"alexscaves:cave_book"}},alexsmobs:{0:{Count:1b,id:"alexsmobs:animal_dictionary"}}},"eccentrictome:version":1}'));
      event.player.give(Item.of('ftbquests:book'));
      event.player.give(Item.of('minecraft:cooked_beef', 8));
    }
  });