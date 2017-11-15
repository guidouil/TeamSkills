import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './header.html';

Template.header.events({
  'click #logOut'() {
     Meteor.logout(() => {
        FlowRouter.go('/sign-in');
     });
  },
});
