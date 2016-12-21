Template.levelupmodal.helpers({

playerinfo() {
  return Characters.find();
},

});

Template.levelupmodal.events({
  'click .levelUp'(event) {
    let characterId = this._id;
    Meteor.call("levelUp", characterId);
  },
  'click .multiClass'(event) {
    let characterId = this._id;
    console.log(characterId);
    let newClass = document.getElementById("newCharClass").value;
    Meteor.call("multiClass", characterId, newClass);
  },
  'click .multiClassLevelUp'(event) {
    let characterId = this._id;
    Meteor.call("multiClassLevelUp", characterId);
  },
});
