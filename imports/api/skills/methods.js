// Methods related to Skills
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { Skills } from './skills.js';

Meteor.methods({
  insertSkill({ name, description = '' }) {
    if (!Meteor.userId()) {
      throw new Meteor.Error(401, 'You must be connected');
    }
    check(name, String);
    check(description, String);
    const skill = {};
    skill.name = name;
    skill.sortName = name.toLowerCase();
    if (description) {
      skill.description = description;
    }
    skill.ownerId = Meteor.userId();
    return Skills.insert(skill);
  },
});
