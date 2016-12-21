Characters = new Meteor.Collection('characters');

Characters.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});


CharacterSchema = new SimpleSchema({
  charactername: {
    type: String,
    label: "Character Name"
  },
  createdby: {
    type: String,
    label: "createdby",
    autoValue: function() {return this.userId},
    autoform: {type: "hidden"}
  },
  level: {
    type: Number,
    min:0,
    label: "Level"
  },
  dndclass: {
    type: String,
    allowedValues: ["Barbarian","Bard","Cleric","Druid","Fighter","Monk","Paladin","Ranger","Rogue","Sorcerer","Warlock","Wizard"],
    label: "Class"
  },
  alignment: {
    type: String,
    allowedValues: ["Lawful Good","Neutral Good","Chaotic Good","Lawful Neutral","Neutral","Chaotic Neutral","Lawful Evil","Neutral Evil","Chaotic Evil"],
    label: "Alignment"
  },
  hitpoints: {
    type: Number,
    min:0,
    label: "Hit Points"
  },
  armorclass: {
    type: Number,
    min:0,
    label: "Armor Class"
  },
  hitdice: {
    type: String,
    allowedValues: ["d6","d8","d10","d12"],
    label: "Hit Die"
  },
  dexterity: {
    type: Number,
    min: 0,
    label: "Dexterity"
  },
  gold: {
    type: Number,
    min:0,
    label: "Gold"
  },
  arrows: {
    type: Number,
    min: 0,
    label: "Arrows"
  },
  potions: {
    type: Number,
    min: 0,
    label: "Potions"
  },
  rations: {
    type: Number,
    min: 0,
    label: "Rations"
  },
  passiveperception: {
    type: Number,
    min: 0,
    label: "Passive Perception"
  },
  deathsavesucces: {
    type: Number,
    min: 0,
    max: 3,
    autoform: {type: "hidden",
    label:false},
    defaultValue: 0
  },
  deathsavefails: {
    type: Number,
    min: 0,
    max: 0,
    autoform: {type: "hidden",
  label:false},
  defaultValue: 0
  },
secondclass: {
    type: Object,
    autoform: {type: "hidden",
  label:false},
},
"secondclass.class": {
  type: String,
  defaultValue: "None"
},
"secondclass.level": {
  type: Number,
  defaultValue: 0
},
hitdicequantity:{
  type: Number,
  autoform: {type: "hidden",
label:false},
defaultValue: 1
},
minionkill:{
  type: Number,
  autoform: {type: "hidden",
label:false},
defaultValue: 0
},
bosskill:{
  type: Number,
  autoform: {type: "hidden",
label:false},
defaultValue: 0
},
});

Characters.attachSchema( CharacterSchema );
