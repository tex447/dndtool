Meteor.methods({
  hitpointsup(id) {
    Characters.update(id, {
      $inc: {'hitpoints': 1}
    });
  },
  hitpointsdown(id) {
    Characters.update(id, {
      $inc: {'hitpoints': -1}
    });
  },
  potionsup(id) {
    Characters.update(id, {
      $inc: {'potions': 1}
    });
  },
  potionsdown(id) {
    Characters.update(id, {
      $inc: {'potions': -1}
    });
  },
  arrowsup(id) {
    Characters.update(id, {
      $inc: {'arrows': 1}
    });
  },
  arrowsdown(id) {
    Characters.update(id, {
      $inc: {'arrows': -1}
    });
  },
  rationsup(id) {
    Characters.update(id, {
      $inc: {'rations': 1}
    });
  },
  rationsdown(id) {
    Characters.update(id, {
      $inc: {'rations': -1}
    });
  },
  armorclassup(id) {
    Characters.update(id, {
      $inc: {'armorclass': 1}
    });
  },
  armorclassdown(id) {
    Characters.update(id, {
      $inc: {'armorclass': -1}
    });
  },
  spelllevel1down(id, playerLevel) {
    switch (playerLevel) {
      case 1:
      Casterslots.update({_id: id,'slots.level': 1},{$inc:{'slots.$.spelllevel1': -1}});
      case 2:
      Casterslots.update({_id: id,'slots.level': 2},{$inc:{'slots.$.spelllevel1': -1}});
      case 3:
      Casterslots.update({_id: id,'slots.level': 3},{$inc:{'slots.$.spelllevel1': -1}});
      case 4:
      Casterslots.update({_id: id,'slots.level': 4},{$inc:{'slots.$.spelllevel1': -1}});
      case 5:
      Casterslots.update({_id: id,'slots.level': 5},{$inc:{'slots.$.spelllevel1': -1}});
    };
  },
  spelllevel2down(id, playerLevel) {
    switch (playerLevel) {
      case 1:
      Casterslots.update({_id: id,'slots.level': 1},{$inc:{'slots.$.spelllevel2': -1}});
      case 2:
      Casterslots.update({_id: id,'slots.level': 2},{$inc:{'slots.$.spelllevel2': -1}});
      case 3:
      Casterslots.update({_id: id,'slots.level': 3},{$inc:{'slots.$.spelllevel2': -1}});
      case 4:
      Casterslots.update({_id: id,'slots.level': 4},{$inc:{'slots.$.spelllevel2': -1}});
      case 5:
      Casterslots.update({_id: id,'slots.level': 5},{$inc:{'slots.$.spelllevel2': -1}});
    };
  },
  writeWizardStats(wizardStats, userId, characterId) {
    if (typeof Casterslots.findOne({character: characterId}) !== 'object') {
      Casterslots.insert({
          player: userId,
          character: characterId,
          slots: wizardStats,
        });
    }
},
updateWizardStats(wizardStats, characterId) {
    Casterslots.update({character: characterId}, {$set: {slots: wizardStats}});
},
writeSorcererStats(sorcererStats, userId, characterId) {
  if (typeof Casterslots.findOne({character: characterId}) !== 'object') {
    Casterslots.insert({
        player: userId,
        character: characterId,
        slots: sorcererStats,
      });
  }
},
updateSorcererStats(sorcererStats, characterId) {
    Casterslots.update({character: characterId}, {$set: {slots: sorcererStats}});
},
writeClericStats(clericStats, userId, characterId) {
  if (typeof Casterslots.findOne({character: characterId}) !== 'object') {
    Casterslots.insert({
        player: userId,
        character: characterId,
        slots: clericStats,
      });
  }
},
updateClericStats(clericStats, characterId) {
    Casterslots.update({character: characterId}, {$set: {slots: clericStats}});
},
writeRangerStats(rangerStats, userId, characterId) {
  if (typeof Casterslots.findOne({character: characterId}) !== 'object') {
    Casterslots.insert({
        player: userId,
        character: characterId,
        slots: rangerStats,
      });
  }
},
updateRangerStats(rangerStats, characterId) {
    Casterslots.update({character: characterId}, {$set: {slots: rangerStats}});
  },
addNpcToBattleOrder(npcName, npcHealth, npcDexterity) {
  Battleorder.insert({
    title: npcName,
    rank: npcDexterity,
    health: parseInt(npcHealth),
  });
},
whoToKill(whoToKill) {
  Battleorder.remove({_id:whoToKill});
},
npcHealthUp(id) {
  Battleorder.update(id, {$inc: {'health': 1}});
},
npcHealthDown(id) {
  Battleorder.update(id, {$inc: {'health': -1}});
},
addPcInitRolls(playerName, initRoll) {
  Battleorder.insert({
    title: playerName,
    rank: initRoll,
  });
},
killPc(id) {
  Characters.remove({_id: id});
},
updategold(id, newGold) {
  Characters.update({_id: id},
    {$set: {gold: newGold}});
},

});
