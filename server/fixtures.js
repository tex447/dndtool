import { Meteor } from 'meteor/meteor';
import { wizardslots } from '../collections/wizardslots.js';
import { sorcererslots } from '../collections/sorcererslots.js';

Meteor.startup(() => {
  const count = Wizardslots.find().count();
  if (count === 0) {
    Wizardslots.insert({
      level: 1,
      cantrips: 3,
      spelllevel1:2}),
  Wizardslots.insert({
    level: 2,
    cantrips: 3,
    spelllevel1:3}),
  Wizardslots.insert({
    level: 3,
    cantrips: 3,
    spelllevel1:4,
    spelllevel2:2}),
  Wizardslots.insert({
    level: 4,
    cantrips: 4,
    spelllevel1:4,
    spelllevel2:3}),
  Wizardslots.insert({
      level: 5,
      cantrips: 4,
      spelllevel1:4,
      spelllevel2:3,
      spelllevel3:2});
    }
});
Meteor.startup(() => {
  const count = Sorcererslots.find().count();
  if (count === 0) {
    Sorcererslots.insert({
      level: 1,
      cantrips: 4,
      spelllevel1:2}),
  Sorcererslots.insert({
    level: 2,
    cantrips: 4,
    spelllevel1:3}),
  Sorcererslots.insert({
    level: 3,
    cantrips: 4,
    spelllevel1:4,
    spelllevel2:2}),
  Sorcererslots.insert({
    level: 4,
    cantrips: 5,
    spelllevel1:4,
    spelllevel2:3}),
  Sorcererslots.insert({
      level: 5,
      cantrips: 5,
      spelllevel1:4,
      spelllevel2:3,
      spelllevel3:2});
    }
});
Meteor.startup(() => {
  const count = Clericslots.find().count();
  if (count === 0) {
    Clericslots.insert({
      level: 1,
      cantrips: 3,
      spelllevel1:2}),
  Clericslots.insert({
    level: 2,
    cantrips: 3,
    spelllevel1:3}),
  Clericslots.insert({
    level: 3,
    cantrips: 3,
    spelllevel1:4,
    spelllevel2:2}),
  Clericslots.insert({
    level: 4,
    cantrips: 4,
    spelllevel1:4,
    spelllevel2:3}),
  Clericslots.insert({
      level: 5,
      cantrips: 4,
      spelllevel1:4,
      spelllevel2:3,
      spelllevel3:2});
    }
});
Meteor.startup(() => {
  const count = Rangerslots.find().count();
  if (count === 0) {
    Rangerslots.insert({
      level: 1,
      cantrips: 0,
      spelllevel1:0}),
  Rangerslots.insert({
    level: 2,
    cantrips: 0,
    spelllevel1:2}),
  Rangerslots.insert({
    level: 3,
    cantrips: 0,
    spelllevel1:3,
    spelllevel2:0}),
  Rangerslots.insert({
    level: 4,
    cantrips: 0,
    spelllevel1:3,
    spelllevel2:0}),
  Rangerslots.insert({
      level: 5,
      cantrips: 0,
      spelllevel1:4,
      spelllevel2:2,
      spelllevel3:0});
    }
});
// Meteor.startup(() => {
// if(Battleorder.find({}).count() == 0) {
//       for(var i = 1; i <= 10; i++) {
//         Battleorder.insert({
//             title: "Character or NPC" + i,
//             rank: i
//         })
//       }
//     }
//   });
