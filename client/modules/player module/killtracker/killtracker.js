Template.killTracker.helpers({
playerinfo() {
  return Characters.find();
},
});

Template.killTracker.events({
  'click .minionKill'(event) {
    let characterId = this._id;
    Meteor.call("incMinionKill", characterId);
  },
  'click .bossKill'(event) {
    let characterId = this._id;
    Meteor.call("incBossKill", characterId);
  },
});
