// priority: 5

PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('first_start')) {
      event.player.stages.add('first_start');
  
      event.player.give(Item.of('eccentrictome:tome'));
      event.player.give(Item.of('ftbquests:book'));
      event.player.give(Item.of('minecraft:cooked_beef', 8));
    }
  });