const elementsUtil = require ('../util/elements.util')
class landingPage
{
    get signInButton() { return $('.login')} 
    get createEmail() {return $('#email_create')}
    get signUpButton () {return $('#SubmitCreate')}

   clickOnSignIn()
    {
        this.signInButton.waitForDisplayed()
        this.signInButton.click();
    }

    signUp()
    {
        //element.waitForDisplayed()
        this.createEmail.setValue('abc@def113.com')
        this.signUpButton.click();

    }
   
}
module.exports = new landingPage();