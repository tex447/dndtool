
Template.addPcModal.events({
  'click .close-charactercreate': ()=> {
    Session.set('addPcModal', '');
  },
  'submit form': function(event) {
    event.preventDefault();
    var characterId = this._id;
    let playerName = Characters.findOne
    ({_id: characterId}, {fields: {charactername: 1}}).charactername;
    var initRoll = event.target.pcInitRoll.value;
    Meteor.call("addPcInitRolls", playerName, initRoll);
    event.target.pcInitRoll.value = "";
  },
  'click .closeModal': ()=> {
    Session.set('addPcModal', '');
  }
  });


Template.addPcModal.helpers({
  grabcharacters() {
  return Characters.find();

  // Meteor.call("loadPc", characters, function(error, result){
  //   if(error){
  //     console.log("error", error);
  //   }
  //   if(result){
  //   }
  // });
  Bert.alert( 'Player Characters loaded Dungeon Master', 'success', 'growl-top-left' );
  },
});
