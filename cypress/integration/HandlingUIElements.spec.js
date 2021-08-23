// YOU TUBE LINK: https://www.youtube.com/watch?v=9W8eyijS0N4

/// <reference types="Cypress" />

describe('Test Suite name', function ()
{
    it('Verify Input box and Radio buttons', function ()
    {
        cy.visit("http://demo.guru99.com/test/newtours/") // Webpage
        cy.title().should('eq','Welcome: Mercury Tours') // title verification

        cy.get('input[name=username]').should('be.visible').should('be.enabled').type('admin') // User name
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type('admin') // Password

        cy.get('input[name=submit]').should('be.enabled').click() // Login button

        cy.title().should('eq','Login: Mercury Tours') // title verification

        cy.get('a[style=margin-left: 5px;color: #0000ee;text-decoration: underline;]').click() // FLight link

        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') // Radio button

        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() // 2nd radio button

        cy.get('name=findFlights').should('be.visible').click() // Continue button


        


    })
})