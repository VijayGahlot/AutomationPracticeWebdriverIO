const loginPage = require('../Pages/login')

describe("loginng into the site", function()
{

it("verify login", function(){

    browser.url('/');
    browser.maximizeWindow();
    loginPage.verifyLogin();
    console.log("Login successful")
})
})
