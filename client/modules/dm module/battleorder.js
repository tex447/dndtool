Template.Dashboard.onCreated(function() {
    Meteor.subscribe('battleorder');
    Meteor.subscribe('monstermanual');
});

Template.battleorder.events({
'submit form': function(event) {
  event.preventDefault();
  var npcName = event.target.npcName.value;
  var npcHealth = event.target.npcHealth.value;
  Meteor.call("addNpcToBattleOrder", npcName, npcHealth, npcDexterity)
    event.target.npcName.value = "";
    event.target.npcHealth.value = "";
},
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
'click .submitFromMonsterManual'(event) {
var monsterToAdd = Session.get("selectedMonster");
var npcName = Monstermanual.findOne({_id: monsterToAdd}, {fields: {name: 1}}).name;
var npcHealth = Monstermanual.findOne({_id: monsterToAdd}, {fields: {health: 1}}).health;
var npcArmorClass = Monstermanual.findOne({_id: monsterToAdd}, {fields: {ac: 1}}).ac;
Meteor.call("addNpcToBattleOrder", npcName, npcHealth, npcArmorClass);
},
// 'click .loadPc'(event) {
// let characters = Characters.find({},{fields:{charactername:1}}).map(({charactername})=>charactername);
// console.log(characters);
// Meteor.call("loadPc", characters, function(error, result){
//   if(error){
//     console.log("error", error);
//   }
//   if(result){
//   }
// });
// Bert.alert( 'Player Characters loaded Dungeon Master', 'success', 'growl-top-left' );
// },
});
Template.battleorder.helpers({
  items: function() {
      return Battleorder.find({}, {sort: {rank: -1}});
    },
monsterManualList() {
  return Monstermanual.find();
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
