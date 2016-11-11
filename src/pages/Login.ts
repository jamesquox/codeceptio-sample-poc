
/// <reference path="../../steps.d.ts" />
'use strict';

let I;

interface IBase {
  bodyClass : string;
  titleText: string;
}

interface ILogo {
  url : string;
  path : string;
}

interface ISignInForm {
  path : string;
  logo : ILogo;
}

interface IElements {
  base : IBase;
  signInForm : ISignInForm
}


export class Login {

  static _init() {
    //I = require('../steps_file.js')();
  }

  static Elements = class {

    static Base = class {
      static bodyClass: string = ".frontpage";
      static titleText: string = "Log in";
    }

    static SignInForm = class {
      static Path: string = ".form-signin";

      static Logo = class {
        static url: string = "/Content/reco-logo-square-60.png";
        static Path: string = Login.Elements.SignInForm.Path + " img";
      }
    }

  }
}
