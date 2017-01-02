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
    var npcSpeed = event.target.npcSpeed.value;
    var npcSkills = event.target.npcSkills.value;
    var npcSenses = event.target.npcSenses.value;
    var npcLanguages = event.target.npcLanguages.value;
    var npcChallenge = event.target.npcChallenge.value;
    var npcAction1 = event.target.npcAction1.value;
    var npcAction2 = event.target.npcAction2.value;
    var npcAction3 = event.target.npcAction3.value;
    var npcReaction1 = event.target.npcReaction1.value;
    var npcRank = 0;
    Meteor.call("addToMonsterManual",npcRank, npcName, npcHealth, npcAc, npcSpeed, npcSkills, npcSenses, npcLanguages, npcChallenge, npcAction1, npcAction2, npcAction3, npcReaction1);
      event.target.npcName.value = "";
      event.target.npcHealth.value = "";
      event.target.npcAc.value = "";
      event.target.npcSpeed.value = "";
      event.target.npcSkills.value = "";
      event.target.npcSenses.value = "";
      event.target.npcLanguages.value = "";
      event.target.npcChallenge.value = "";
      event.target.npcAction1.value = "";
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
