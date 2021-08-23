/// <reference types="Cypress" />

import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../LoginPage/SalesForceLoginPage_Code'


Given('Clink on the Home tab',()=>{
    HomePage.clickOnTheHomeTab();
})

When('Click on the New button',()=>{
    HomePage.clickOnNextButton();
})

Then('Click on the Select a record type radio button',()=>{
    HomePage.clickOnTheSelectRecordTypeRadioButton();
})

And('Click on the Next button',()=>{
    HomePage.clickOnNextButton();
})

Then('Populate the Description field',()=>{
    HomePage.populatetheDescriptionfield()

})