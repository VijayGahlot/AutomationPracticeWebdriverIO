const elementsUtil = require ('../util/elements.util')
const { expect } = require('chai')
class registrationPage
{
    get fname() {return $('#customer_firstname')}
    get lname() {return $('#customer_lastname')}
    get password() {return $('#passwd')};
    get addressfname() {return $('#firstname')};
    get addresslname() {return $('#lastname')};
    get address() {return $('#address1')};
    get city() {return $('#city')};
    get drp() {return $('#id_state')};
    get zip() {return $('#postcode')};
    get phone() {return $('#phone_mobile')};
    get otherAddress() {return $('#alias')};
    get registerButton() {return $('#submitAccount')};
    get loggedInName() {return $('.account')}
    

    enterDatainRegForm()
    {
        this.fname.setValue('vijay');
        this.lname.setValue('Gahlot');
        this.password.setValue('Test@1234');
        this.addressfname.setValue('vijay');
        this.addresslname.setValue('gahlot');
        this.address.setValue('123, main street');
        this.city.setValue('New York')
        this.drp.selectByVisibleText('New York')
        this.zip.setValue('10016');
        this.phone.setValue('9876543210')
        this.otherAddress.setValue('123, high street')
        this.registerButton.click();
        

    }

}

module.exports = new registrationPage();