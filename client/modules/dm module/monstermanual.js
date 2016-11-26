Template.monstermanual.onCreated(function() {
    Meteor.subscribe('battleorder');
    Meteor.subscribe('monstermanual');
});


Template.monstermanual.helpers({
items: function() {
      return Battleorder.find({}, {sort: {rank: -1}});
},
monsterManualList() {
  return Monstermanual.find();
},
});

Template.monstermanual.events({
  'submit form': function(event) {
    event.preventDefault();
    var npcName = event.target.npcName.value;
    var npcHealth = event.target.npcHealth.value;
    var npcAc = event.target.npcAc.value;
    Meteor.call("addToMonsterManual", npcName, npcHealth, npcAc)
      event.target.npcName.value = "";
      event.target.npcHealth.value = "";
      event.target.npcAc.value = "";
  },
  'click .monsterselection'(event) {
    var selectedMonster = this._id;
    Session.set("selectedMonster", selectedMonster);
  },
'click .removeMonsterFromManual'(event) {
  var monsterToRemove = Session.get("selectedMonster");
  Meteor.call("removeMonsterFromManual", monsterToRemove);
},
});
