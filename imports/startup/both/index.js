import { AccountsTemplates } from 'meteor/useraccounts:core';

AccountsTemplates.configure({
  // FlowRouter
  defaultLayoutType: 'blaze',
  defaultLayout: 'App_body',
  defaultLayoutRegions: {},
  defaultContentRegion: 'main',
  hideSignUpLink: false,

  // Behavior
  confirmPassword: true,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
  overrideLoginErrors: true,
  sendVerificationEmail: false,
  lowercaseUsername: false,
  focusFirstInput: true,

  // Appearance
  showAddRemoveServices: true,
  showForgotPasswordLink: true,
  showLabels: true,
  showPlaceholders: true,
  showResendVerificationEmailLink: true,

  // Client-side Validation
  continuousValidation: true,
  negativeFeedback: false,
  negativeValidation: true,
  positiveValidation: true,
  positiveFeedback: true,
  showValidating: true,

  // Privacy Policy and Terms of Use
  // privacyUrl: 'privacy',
  // termsUrl: 'terms-of-use',

  // Redirects
  homeRoutePath: '/',
  // redirectTimeout: 4000,
});
