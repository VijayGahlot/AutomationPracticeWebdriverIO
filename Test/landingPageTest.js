const loginPage = require ('../Pages/login')
//const elementsUtil = require ('../util/elements.util')
const landingPage = require('../Pages/landingPage');
const homePage = require('../Pages/homepage')

describe("Home Page tests", function()
{

it("1.Home page should open, click logo", function(){
    browser.url('/');
    browser.maximizeWindow();
    loginPage.verifyLogin();
    expect(browser.getTitle()).equals("My account - My Store");
    //console.log(browser.getTitle())
    loginPage.verifyLogout()
})
it("2.Verify if Popular tab is active", function () {
    browser.url("/");
    browser.maximizeWindow();
    loginPage.verifyLogin();
    homePage.clickOnLogo()
    homePage.isPopularTabActive();
    expect(homePage.isPopularTabActive()).equals(true);
    loginPage.verifyLogout();
  })
it("3.Three tabs should be available Women, Dresses, Tshirt", function(){
    browser.url('/');
    browser.maximizeWindow();
    loginPage.verifyLogin();
    homePage.tabsAvailable();
    expect(homePage.tabCount()).equals(3);

})

})
