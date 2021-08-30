
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
        cy.wait(50000)
    }
    static clickOnUserImage(){
      cy.get('.uiImage').find('[title=User]').trigger('mouseover').click({ force: true});
      cy.wait(50000)
    }

    static clickLogout(){
        cy.get('.profile-card-toplinks').find('a').first.click()
    }
}

export default LoginPage;