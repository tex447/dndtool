Template.gmmodule.onCreated(function(){
  Meteor.subscribe('characters');
});
Template.gmmodule.onCreated(function(){
  Meteor.subscribe('spellslots');
});
Template.gmmodule.onCreated(function() {
    Meteor.subscribe('casterslots');
});
Template.gmmodule.onCreated(function() {
    Meteor.subscribe('battleorder');
});

Template.gmmodule.helpers({
  characters() {
    return Characters.find({});
  },
});

Template.gmmodule.events({
  'click .levelUp'(event) {
    let characterId = this._id;
    Meteor.call("levelUp", characterId);
  },
  'click .killPc'(event) {
  Meteor.call('killPc', this._id);
  },
  'click .longrest' (event) {
    let characterId = this._id;
    let characterClass = Characters.findOne
    ({_id: characterId}, {fields: {dndclass: 1}}).dndclass;
    switch (characterClass) {
      case "Wizard":
          var wizardStats = Session.get("wizardstats");
          Meteor.call("updateWizardStats", wizardStats, characterId);
        break;
      case "Sorcerer":
          var sorcererStats = Session.get("sorcererstats");
          Meteor.call("updateSorcererStats", sorcererStats, characterId);
        break;
      case "Cleric":
          var clericStats = Session.get("clericstats");
          Meteor.call("updateClericStats", clericStats, characterId);
        break;
      case "Ranger":
          var rangerStats = Session.get("rangerstats");
          Meteor.call("updateRangerStats", rangerStats, characterId);
      break;
      case "Barbarian":
          var barbarianStats = Session.get("barbarianstats");
          console.log(barbarianStats);
          Meteor.call("updateBarbarianStats", barbarianStats, characterId);
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
      };
    },


});
