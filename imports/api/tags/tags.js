// Definition of the Tags collection
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Tags = new Mongo.Collection('tags');

Tags.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const tagSchema = new SimpleSchema({
  name: {
    type: String,
  },
  sortName: {
    type: String,
    max: 1,
  },
  usageCounter: {
    type: Number,
    optional: true,
  },
  ownerId: {
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

Tags.attachSchema(tagSchema);
