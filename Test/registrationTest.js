const LandingPage = require('../Pages/landingPage');
const elementsUtil = require ('../util/elements.util')
const landingPage = require('../Pages/landingPage');
const registrationPage = require('../Pages/registerationPage');
const { expect } = require('chai');
describe("Sign in & Registration", function()
{

it("Complete Registration, Get Page title, Get logged in Name", function(){

    browser.url('/');
    browser.maximizeWindow();
    landingPage.clickOnSignIn();
    landingPage.signUp();
    registrationPage.enterDatainRegForm();
    expect(browser.getTitle()).equals("My account - My Store");
    console.log("Page title is: ",browser.getTitle());
    expect(registrationPage.loggedInName.getText()).equals ("vijay Gahlot");
    console.log("Logged in name is: ",registrationPage.loggedInName.getText());
    browser.pause(5000);
    console.log("Registration successful")
    })
})
