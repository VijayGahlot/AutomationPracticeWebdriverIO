const LandingPage = require("../Pages/landingPage");
const elementsUtil = require("../util/elements.util");
const landingPage = require("../Pages/landingPage");
const registrationPage = require("../Pages/registerationPage");
const loginPage = require("../Pages/login");
const homePage = require("../Pages/Homepage");
const dressMenuPage = require("../Pages/DressMenu");
const { expect } = require("chai");

describe("Dress Menu and prices Page Test", function () {
  it("Go To Dresses page, The Dresses Page should open", function(){
      browser.url('/');
      browser.maximizeWindow();
      loginPage.verifyLogin();
     dressMenuPage.clickOnDresses();
     expect(browser.getTitle()).equals("Dresses - My Store");
     //console.log("Page Title is: ",browser.getTitle());
     loginPage.verifyLogout()

  })

   it("Go To Dresses page, No Checkbox should be selected", function(){
      browser.url('/');
      browser.maximizeWindow();
      loginPage.verifyLogin();
      dressMenuPage.clickOnDresses();
      dressMenuPage.checkBoxesSelection();
      loginPage.verifyLogout()

  })

  it("Go To Dresses page,  All items should appear in Grid view", function(){
      browser.url('/');
      browser.maximizeWindow();
      loginPage.verifyLogin();
      dressMenuPage.clickOnDresses();
      dressMenuPage.gridSelected();
      loginPage.verifyLogout()

  })

      it("Click the list view option,  All items should appear in List view", function(){
          browser.url('/');
          browser.maximizeWindow();
          loginPage.verifyLogin();
          dressMenuPage.clickOnDresses();
          dressMenuPage.selectListView();
          loginPage.verifyLogout()

      })

      it("Click the list view option,  Price should be visible for all the results", function(){
          browser.url('/');
          browser.maximizeWindow();
          loginPage.verifyLogin();
          dressMenuPage.clickOnDresses();
          dressMenuPage.selectListView();
          dressMenuPage.getPriceAvailable();
          loginPage.verifyLogout();

      })

      it("Click on Summer dresses , The page should say summer dresses", function(){
          browser.url('/');
          browser.maximizeWindow();
          loginPage.verifyLogin();
          dressMenuPage.clickOnDresses();
          dressMenuPage.selectSummerDresses();
          expect(browser.getTitle()).equals("Summer Dresses - My Store");
          loginPage.verifyLogout()

      })

      it("Click on Summer dresses ,  All results should contain the word summer dress", function(){
          browser.url('/');
          browser.maximizeWindow();
          loginPage.verifyLogin();
          dressMenuPage.clickOnDresses();
          dressMenuPage.selectSummerDresses();
          dressMenuPage.selectListView();
          expect(dressMenuPage.verifySummerDresses()).equals(true);
          browser.pause(5000);
          loginPage.verifyLogout()

  })
});
