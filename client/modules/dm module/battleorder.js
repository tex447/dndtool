Template.Dashboard.onCreated(function() {
    Meteor.subscribe('battleorder');
    Meteor.subscribe('monstermanual');
});

function battleList() {
};

Template.battleorder.events({
'submit form': function(event) {
  event.preventDefault();
  var npcName = event.target.npcName.value;
  var npcHealth = event.target.npcHealth.value;
  Meteor.call("addNpcToBattleOrder", npcName, npcHealth, npcDexterity)
    event.target.npcName.value = "";
    event.target.npcHealth.value = "";
},
'click .addPcModal'(event) {
  Modal.show('addPcModal');
},
'click .addCombatRoundTracker'(event) {
  Meteor.call('addCombatRoundTracker');
  var battleOrder = Battleorder.find({name: {$exists: true}}, {sort: {rank: -1}}).fetch();
  Session.set("battleorder", battleOrder);
  var charNumber = 0;
  Session.set("characternumber", charNumber);

},
'click .killCombatTracker'(event) {
  Meteor.call('killCombatTracker', this._id);
},
// 'click .roundUp'(event) {
//   Meteor.call('roundUp', this._id);
//   var battleOrder = Battleorder.find({name: {$exists: true}}, {sort: {rank: -1}}).fetch();
//   Session.set("battleorder", battleOrder);
//   Session.set("characternumber", 0);
//   console.log(battleOrder);

'click .killNpc'(event) {
Meteor.call('whoToKill', this._id);
},
'click .npcHealthDown'(event) {
  Meteor.call('npcHealthDown', this._id);
},
'click .npcHealthUp'(event) {
  Meteor.call('npcHealthUp', this._id);
},
'click .monsterselection'(event) {
  var selectedMonster = this._id;
  Session.set("selectedMonster", selectedMonster);
},
'click .nextPlayer'(event) {
  var battleOrder1= Session.get("battleorder");
  var orderLength= battleOrder1.length;
  var charNumber = Session.get("characternumber")

  if(charNumber < orderLength) {
  var charNumber = Session.get("characternumber") + 1;
Session.set("characternumber", charNumber);
} else {
  Meteor.call('roundUp', this._id);
  var battleOrder = Battleorder.find({name: {$exists: true}}, {sort: {rank: -1}}).fetch();
  Session.set("battleorder", battleOrder);
  Session.set("characternumber", 0);
  //build code to increment roud up by 1 and start it over
}
},
'click .submitFromMonsterManual'(event) {
var monsterToAdd = Session.get("selectedMonster");
var monster = Monstermanual.findOne({_id: monsterToAdd}, {fields: {_id: 0}});
var npcName = Monstermanual.findOne({_id: monsterToAdd}, {fields: {name: 1}}).name;
// var npcArmorClass = Monstermanual.findOne({_id: monsterToAdd}, {fields: {ac: 1}}).ac;
var monsterQuantity = document.getElementById('monsterQuantity').value;
Meteor.call("addMonsterToBattleOrder", monster, monsterQuantity, npcName);
},
});

Template.battleorder.helpers({
items: function() {
      return Battleorder.find({name: {$exists: true}}, {sort: {rank: -1}});
},
combatround() {
  return Battleorder.find({round: {$exists: true}});
},
monsterManualList() {
  return Monstermanual.find();
},
combatroundstats(){
//Get the array, set it to a set/get
var statsArray = Session.get("battleorder");
var whichCharacter = Session.get("characternumber");
return statsArray[whichCharacter];
},
});


Template.battleorder.rendered = function() {
    this.$('#items').sortable({
        stop: function(e, ui) {
          // get the dragged html element and the one before
          //   and after it
          el = ui.item.get(0)
          before = ui.item.prev().get(0)
          after = ui.item.next().get(0)

          // Here is the part that blew my mind!
          //  Blaze.getData takes as a parameter an html element
          //    and will return the data context that was bound when
          //    that html element was rendered!
          if(!before) {
            //if it was dragged into the first position grab the
            // next element's data context and subtract one from the rank
            newRank = Blaze.getData(after).rank - 1
          } else if(!after) {
            //if it was dragged into the last position grab the
            //  previous element's data context and add one to the rank
            newRank = Blaze.getData(before).rank + 1
          }
          else
            //else take the average of the two ranks of the previous
            // and next elements
            newRank = (Blaze.getData(after).rank +
                       Blaze.getData(before).rank)/2

          //update the dragged Item's rank
          Battleorder.update({_id: Blaze.getData(el)._id}, {$set: {rank: newRank}})
        }
    })
  };
