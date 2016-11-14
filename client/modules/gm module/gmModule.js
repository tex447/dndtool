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
  'click .killPc'(event) {
  Meteor.call('killPc', this._id);
  },


});
