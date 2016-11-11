/// <reference path="../steps.d.ts" />

Feature('Login');

Scenario('test something', (I) => {
    I.login();
    I.amOnPage('/');
    I.see('Please sign in!');
    I.click(".btn");
});
