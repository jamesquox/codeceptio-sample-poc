/// <reference path="../../steps.d.ts" />
import { Login } from "../pages/Login.ts";

Feature('Login');

Scenario('test something', (I) => {

    Login.Elements.SignInForm.Path
    
    I.login('','');
    I.amOnPage('/');
    I.see('Please sign in!', '');
    I.click(".btn", '');
});
