
/// <reference path="../steps.d.ts" />
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  elements: {

    base: {
      bodyClass: ".frontpage",

      titleText: "Log in",
    },

    signInForm: {
      path: ".form-signin",

      logo: {
        url: "/Content/reco-logo-square-60.png",
        path: this.elements.signInForm.path + " img",
      },

      heading: {
        text: "Please sign in",
        headingClass: ".form-signin-heading",
      },

      userName: {
        name: "UserName",
        type: "email",
        path: this.elements.signInForm.path + ' input[type="' + this.type + '"]'
      },

      password: {
        name: "Password",
        type: "password",
        path: this.elements.signInForm.path + ' input[type="' + this.type + '"]'
      },

      rememberMe: {
        name: "RememberMe",
        type: "checkbox",
        path: this.elements.signInForm.path + ' input[type="' + this.type + '"]'
      },

      btnSignIn: {
        name: "RememberMe",
        type: "submit",
        path: this.elements.signInForm.path + ' button.btn-primary[type="' + this.type + '"]'
      },

      btnCustomerSignUp: {
        text: "Customer Sign Up",
        path: this.elements.signInForm.path + ' a.btn-info[data-toggle="collapse"]'
      },
    }

  },

  signIn: (userName, password, rememberMe) => {
    //auto populate values if not provided
    I
  }
}
