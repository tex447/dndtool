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
    label: "Hit Points"
  },
  armorclass: {
    type: Number,
    label: "Armor Class"
  },
  hitdice: {
    type: String,
    allowedValues: ["d6","d8","d10","d12"],
    label: "Hit Die"
  },
  dexterity: {
    type: Number,
    label: "Dexterity"
  },
  gold: {
    type: Number,
    label: "Gold"
  },
  arrows: {
    type: Number,
    label: "Arrows"
  },
  potions: {
    type: Number,
    label: "Potions"
  },
  rations: {
    type: Number,
    label: "Rations"
  },
  passiveperception: {
    type: Number,
    label: "Passive Perception"
  },
  deathsavesucces: {
    type: Number,
    autoform: {type: "hidden",
    label:false},
    defaultValue: 0
  },
  deathsavefails: {
    type: Number,
    autoform: {type: "hidden",
  label:false},
  defaultValue: 0
  },
});

Characters.attachSchema( CharacterSchema );
