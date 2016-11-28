Template.Dashboard.onCreated(function(){
  Meteor.subscribe('characters');
});
Tracker.autorun(function(){
  Meteor.subscribe('wizardslots', function(){
    let wizardStats = Wizardslots.find().fetch();
    Session.set("wizardstats", wizardStats);
  });
  Meteor.subscribe('sorcererslots', function(){
    let sorcererStats = Sorcererslots.find().fetch();
    Session.set("sorcererstats", sorcererStats);
  });
  Meteor.subscribe('clericslots', function(){
    let clericStats = Clericslots.find().fetch();
    Session.set("clericstats", clericStats);
  });
  Meteor.subscribe('barbarianslots', function(){
    let barbarianStats = Barbarianslots.find().fetch();
    Session.set("barbarianstats", barbarianStats);
  });
});
Template.Dashboard.onCreated(function() {
    Meteor.subscribe('casterslots');
});
Template.playermodule.onCreated(function(){
  Meteor.subscribe('casterslots');
  Meteor.subscribe('characteritems');
});
Template.playermodule.helpers({
  wizardslots() {
    return Wizardslots.find();
  },
  characteritems() {
    let characterId = this._id;
    return Characteritems.find({character: characterId});
  },
  casterslots() {
    let characterId = (this._id);
    let playerLevel = Characters.findOne
    ({_id: characterId}, {fields: {level: 1}}).level;
    switch (playerLevel) {
      case 1:
      // return Casterslots.find({character: characterId});
      var specificCharacter = Casterslots.find({character: characterId}).fetch();
      return _(specificCharacter).map(function(thing){
        thing.slots = _(thing.slots).find(function(level){
          return level.level == '1';
        });
        return thing;
    });
      case 2:
      var specificCharacter = Casterslots.find({character: characterId}).fetch();
      return _(specificCharacter).map(function(thing){
        thing.slots = _(thing.slots).find(function(level){
          return level.level == '2';
        });
        console.log(thing);
        return thing;
      });
      case 3:
      var specificCharacter = Casterslots.find({character: characterId}).fetch();
      return _(specificCharacter).map(function(thing){
        thing.slots = _(thing.slots).find(function(level){
          return level.level == '3';
        });
        return thing;
      });
      case 4:
      var specificCharacter = Casterslots.find({character: characterId}).fetch();
      return _(specificCharacter).map(function(thing){
        thing.slots = _(thing.slots).find(function(level){
          return level.level == '4';
        });
        return thing;
      });
      case 5:
      var specificCharacter = Casterslots.find({character: characterId}).fetch();
      return _(specificCharacter).map(function(thing){
        thing.slots = _(thing.slots).find(function(level){
          return level.level == '5';
        });
        return thing;
      });
      default:
        console.log("Oops");
    }
  },
});
Template.playermodule.events({
    'click .deathsuccessup'(event) {
      Meteor.call("deathsuccessup", this._id);
    },
    'click .deathsuccessdown'(event) {
      Meteor.call("deathsuccessdown", this._id);
    },
    'click .deathfailup'(event) {
      Meteor.call("deathfailup", this._id);
    },
    'click .deathfaildown'(event) {
      Meteor.call("deathfaildown", this._id);
    },
    'submit form': function(event) {
      event.preventDefault();
      // let characterId = this._id;
      var newGold = event.target.gold.value;
      Meteor.call("updategold", this._id, newGold);
      event.target.gold.value = "";
    },
    'click .levelUp'(event) {
      let characterId = this._id;
      Meteor.call("levelUp", characterId);
    },
    'click .addItemToSatchel'(event) {
      let item = document.getElementById('itemToAddToSatchel').value;
      let characterId = this._id;
      Meteor.call("addItemToSatchel", item, characterId);
      document.getElementById("itemToAddToSatchel").value = "";
    },
    'click .removeItem'(event) {
      let itemIdToRemove = Session.get("selecteditem");
      Meteor.call("removeItem", itemIdToRemove)
    },
    'click .itemselection'(event) {
      var selectedItem = this._id;
      Session.set("selecteditem", selectedItem);
    },
});
