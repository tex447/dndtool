Template.spelltracking.onCreated(function(){
  Meteor.subscribe('characters');
});
// Template.Dashboard.onCreated(function(){
//   Meteor.subscribe('wizardslots');
// });
Tracker.autorun(function(){
  Meteor.subscribe('characters');
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
  Meteor.subscribe('rangerslots', function(){
    let rangerStats = Rangerslots.find().fetch();
    Session.set("rangerstats", rangerStats);
  });
  Meteor.subscribe('barbarianslots', function(){
    let barbarianStats = Barbarianslots.find().fetch();
    Session.set("barbarianstats", barbarianStats);
  });
});

Template.spelltracking.events({
  'click .spelllevel1down' (event) {
      let casterslotId = this._id;
      let characterId = Casterslots.findOne({
          _id: casterslotId
      }, {
          fields: {
              character: 1
          }
      }).character;
      let playerLevel = Characters.findOne({
          _id: characterId
      }, {
          fields: {
              level: 1
          }
      }).level;
      Meteor.call('spelllevel1down', this._id, playerLevel);
  },
  'click .spelllevel2down' (event) {
      let casterslotId = this._id;
      let characterId = Casterslots.findOne({
          _id: casterslotId
      }, {
          fields: {
              character: 1
          }
      }).character;
      let playerLevel = Characters.findOne({
          _id: characterId
      }, {
          fields: {
              level: 1
          }
      }).level;
      Meteor.call('spelllevel2down', this._id, playerLevel);
  },
  'click .ragesdown' (event) {
      let casterslotId = this._id;
      let characterId = Casterslots.findOne({
          _id: casterslotId
      }, {
          fields: {
              character: 1
          }
      }).character;
      let playerLevel = Characters.findOne({
          _id: characterId
      }, {
          fields: {
              level: 1
          }
      }).level;
      Meteor.call('ragesdown', this._id, playerLevel);
  },
});

Template.spelltracking.helpers({
    wizardslots() {
        return Wizardslots.find();
    },
    casterslots() {
        let characterId = (this._id);
        let playerLevel = Characters.findOne({
            _id: characterId
        }, {
            fields: {
                level: 1
            }
        }).level;
        switch (playerLevel) {
            case 1:
                // return Casterslots.find({character: characterId});
                var specificCharacter = Casterslots.find({
                    character: characterId
                }).fetch();
                return _(specificCharacter).map(function(thing) {
                    thing.slots = _(thing.slots).find(function(level) {
                        return level.level == '1';
                    });
                    return thing;
                });
            case 2:
                var specificCharacter = Casterslots.find({
                    character: characterId
                }).fetch();
                return _(specificCharacter).map(function(thing) {
                    thing.slots = _(thing.slots).find(function(level) {
                        return level.level == '2';
                    });
                    return thing;
                });
            case 3:
                var specificCharacter = Casterslots.find({
                    character: characterId
                }).fetch();
                return _(specificCharacter).map(function(thing) {
                    thing.slots = _(thing.slots).find(function(level) {
                        return level.level == '3';
                    });
                    return thing;
                });
            case 4:
                var specificCharacter = Casterslots.find({
                    character: characterId
                }).fetch();
                return _(specificCharacter).map(function(thing) {
                    thing.slots = _(thing.slots).find(function(level) {
                        return level.level == '4';
                    });
                    return thing;
                });
            case 5:
                var specificCharacter = Casterslots.find({
                    character: characterId
                }).fetch();
                return _(specificCharacter).map(function(thing) {
                    thing.slots = _(thing.slots).find(function(level) {
                        return level.level == '5';
                    });
                    return thing;
                });
            default:
                console.log("Oops");
        }

    },
    matchy() {
        //Brings in Logged In users ID, sets to a variable
        var userId = Meteor.userId();
        //Sets playerClass to the User's characters player class
        let playerClass = Characters.findOne({
            createdby: userId
        }, {
            fields: {
                dndclass: 1
            }
        }).dndclass;
        //Sets playerlevel to the User's characters level
        let playerLevel = Characters.findOne({
            createdby: userId
        }, {
            fields: {
                level: 1
            }
        }).level;
        //Grab Character's ID
        let characterId = this._id;
        //Determines based off the players class what stats to write into their charctersheet
        switch (playerClass) {
            case "Wizard":
                var wizardStats = Session.get("wizardstats");
                Meteor.call("writeWizardStats", wizardStats, userId, characterId);
                break;
            case "Sorcerer":
                var sorcererStats = Session.get("sorcererstats");
                Meteor.call("writeSorcererStats", sorcererStats, userId, characterId);
                break;
            case "Cleric":
                var clericStats = Session.get("clericstats");
                Meteor.call("writeClericStats", clericStats, userId, characterId);
                break;
            case "Ranger":
            var rangerStats = Session.get("rangerstats");
            Meteor.call("writeRangerStats", rangerStats, userId, characterId);
                break;
            case "Barbarian":
            var barbarianStats = Session.get("barbarianstats");
            Meteor.call("writeBarbarianStats", barbarianStats, userId, characterId);
                break;
            case "Warlock":
                break;
            case "Bard":
                break;
            case "Druid":
                break;
            case "Fighter":
                break;
            case "Monk":
                break;
            case "Paladin":
                break;
            case "Rogue":
                break;
            default:
                console.log("Sorry NO class selected");
        }
    },

});
