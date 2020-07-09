const landingPage = require("../Pages/landingPage");
class loginPage {
  get emailField() {
    return $("#email");
  }
  get passwordField() {
    return $("#passwd");
  }
  get loginButton() {
    return $("#SubmitLogin");
  }
  get logoutButton() {
    return $(".logout");
  }

  verifyLogin() {
    landingPage.clickOnSignIn();
    this.emailField.setValue("Vijay@gahlot.com");
    this.passwordField.setValue("Test@1234");
    this.loginButton.click();
  }
  verifyLogout() {
    this.logoutButton.click();
  }
}

module.exports = new loginPage();
