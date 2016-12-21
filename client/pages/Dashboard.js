Template.Dashboard.onCreated(function() {
    Meteor.subscribe('characters');
});
Template.Dashboard.onCreated(function() {
    Meteor.subscribe('spellslots');
});
Template.Dashboard.onCreated(function() {
    Meteor.subscribe('casterslots');
});
Template.Dashboard.onCreated(function() {
    Meteor.subscribe('battleorder');
});

Template.Dashboard.events({
    'click .hitpointsup' (event) {
        Meteor.call('hitpointsup', this._id);
    },
    'click .hitpointsdown' (event) {
        Meteor.call('hitpointsdown', this._id);
    },
    'click .potionsup' (event) {
        Meteor.call('potionsup', this._id);
    },
    'click .potionsdown' (event) {
        Meteor.call('potionsdown', this._id);
    },
    'click .arrowsup' (event) {
        Meteor.call('arrowsup', this._id);
    },
    'click .arrowsdown' (event) {
        Meteor.call('arrowsdown', this._id);
    },
    'click .rationsup' (event) {
        Meteor.call('rationsup', this._id);
    },
    'click .rationsdown' (event) {
        Meteor.call('rationsdown', this._id);
    },
    'click .armorclassup' (event) {
        Meteor.call('armorclassup', this._id);
    },
    'click .armorclassdown' (event) {
        Meteor.call('armorclassdown', this._id);
    },
});
Template.Dashboard.helpers({
    characters() {
        return Characters.find({});
    },
    list() {
        var currentUser = Meteor.userId();
        return Characters.find({
            createdby: currentUser
        }, {
            sort: {
                name: 1
            }
        });
    },
});
