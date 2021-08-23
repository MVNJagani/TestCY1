
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
    static clickOnWaffleAppIcon(){
        cy.get('class[class=slds-icon-waffle]').should('be.visible').should('be.enabled').click()
    }
}

export default LoginPage;