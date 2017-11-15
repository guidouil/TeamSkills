import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/profile/profile.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'home' });
  },
});

FlowRouter.route('/profile', {
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  name: 'profile',
  action() {
    BlazeLayout.render('App_body', { main: 'profile' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};

// UserAccounts routes
AccountsTemplates.configureRoute('changePwd', { redirect: '/profile' });
AccountsTemplates.configureRoute('enrollAccount', { redirect: '/profile' });
AccountsTemplates.configureRoute('forgotPwd', { redirect: '/profile' });
AccountsTemplates.configureRoute('resetPwd', { redirect: '/profile' });
AccountsTemplates.configureRoute('signIn', { redirect: '/' });
AccountsTemplates.configureRoute('signUp', { redirect: '/profile' });
AccountsTemplates.configureRoute('verifyEmail', { redirect: '/profile' });
AccountsTemplates.configureRoute('resendVerificationEmail');
