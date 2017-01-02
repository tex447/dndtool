Template.addweapon.helpers({
playerinfo() {
  return Characters.find();
},
});

Template.addweapon.events({
  'submit form': function(event) {
    event.preventDefault();
    var characterId = this._id;
    var weaponName = event.target.weaponName.value;
    var attackBonus = event.target.attackBonus.value;
    var attackDamage = event.target.attackDamage.value;
    var attackRange = event.target.attackRange.value;
    var weaponNote = event.target.weaponNote.value;
    var damageType = document.getElementById('damageType').value;
    var weaponNumber = document.getElementById('weaponNumber').value;
    Meteor.call("addWeapon", weaponNumber, characterId, weaponName, attackBonus, attackDamage, attackRange, weaponNote, damageType);
  },
});
