Meteor.publish('allUsers', function(){
  if(Roles.userIsInRole(this.userId, 'gamemaster')) {
  return Meteor.users.find({});
}
});

Meteor.publish('characters', function(){
 var currentUserId = this.userId;
  if(Roles.userIsInRole(this.userId, 'player')) {
  return Characters.find({createdby: currentUserId});
 }
 if(Roles.userIsInRole(this.userId, 'gamemaster')) {
 return Characters.find();
}
});

Meteor.publish('wizardslots', function(){
  // var currentUserId = this.userId;
  // if(Roles.userIsInRole(this.userId, 'gamemaster' || 'player')) {
  return Wizardslots.find({});
// }
});

Meteor.publish('sorcererslots', function(){
  // var currentUserId = this.userId;
  // if(Roles.userIsInRole(this.userId, 'gamemaster' || 'player')) {
  return Sorcererslots.find({});
// }
});

Meteor.publish('clericslots', function(){
  // var currentUserId = this.userId;
  // if(Roles.userIsInRole(this.userId, 'gamemaster' || 'player')) {
  return Clericslots.find({});
// }
});

Meteor.publish('rangerslots', function(){
  // var currentUserId = this.userId;
  // if(Roles.userIsInRole(this.userId, 'gamemaster' || 'player')) {
  return Rangerslots.find({});
// }
});

Meteor.publish('casterslots', function(){
  var currentUserId = this.userId;
   if(Roles.userIsInRole(this.userId, 'player')) {
   return Casterslots.find({player: currentUserId});
  }
  if(Roles.userIsInRole(this.userId, 'gamemaster')) {
  return Casterslots.find();
}
 });

Meteor.publish('battleorder', function() {
  if(Roles.userIsInRole(this.userId, 'gamemaster')) {
  return Battleorder.find( {}, { sort: { order: 1 }});
};
});
