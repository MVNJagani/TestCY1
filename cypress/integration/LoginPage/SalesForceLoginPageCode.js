
class LoginPage{

    static salesforceLoginPage(){

        cy.visit('https://rv--test.my.salesforce.com/');

    }

    static enterUserID(){
        cy.get('#username').type('vedant.jagani@campingworld.com.test')

    }

    static enterPassword(){
        cy.get('#password').type('Welcome2019*')

    }

    static clickOnLoginBtn(){
        cy.get('#Login').click()
    }
}

export default LoginPage;