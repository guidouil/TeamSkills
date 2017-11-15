// Definition of the Skills collection
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Skills = new Mongo.Collection('skills');

// Deny all client-side updates on the Skills collection
Skills.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const SkillSchema = new SimpleSchema({
  name: {
    type: String,
  },
  sortName: {
    type: String,
  },
  description: {
    type: String,
    optional: true,
  },
  ownerId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  users: {
    type: Array,
    optional: true,
  },
  'users.$': {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  createdAt: {
    type: Date,
    autoValue: function () {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return { $setOnInsert: new Date() };
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
  },
  updatedAt: {
    type: Date,
    autoValue: function () {
      if (this.isUpdate) {
        return new Date();
      }
    },
    optional: true
  },
});

Skills.attachSchema(SkillSchema);
