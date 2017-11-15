// Definition of the Evaluations collection
import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Evaluations = new Mongo.Collection('evaluations');

// Deny all client-side updates on the Evaluations collection
Evaluations.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

const EvaluationSchema = new SimpleSchema({
  skillId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  userId: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
  },
  rating: {
    type: Number,
  },
  comment: {
    type: String,
    optional: true,
  },
  url: {
    type: String,
    optional: true,
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
    denyInsert: true,
    optional: true
  },
});

Evaluations.attachSchema(EvaluationSchema);
