


class HomePage{

    static clickOnTheHomeTab(){       
       cy.get('.dndItem[title="Home"]').click();
    }

    static clickOnNewButton(){
        cy.get('.forceActionLink[title="New"]').click();
    }
    static clickOnTheSelectRecordTypeRadioButton(){
        cy.get ('* div.changeRecordTypeOptionLeftColumn > span').click();
    }

    static clickOnNextButton(){
        cy.get('').click();
        
    }
    static populatetheDescriptionfield(){
        cy.get('').type('')

    }
}

export default HomePage