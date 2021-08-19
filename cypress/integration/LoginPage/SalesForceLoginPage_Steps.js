/// <reference types="Cypress" />

import {Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './SalesForceLoginPageCode'



Given ('Open the Salesforce web page',()=>{
    LoginPage.salesforceLoginPage();
})

When ('Enter user name',()=>{
    LoginPage.enterUserID();
})

Then ('Enter password',()=>{
    LoginPage.enterPassword();
})

And ('click on the login button',()=>{
    LoginPage.clickOnLoginBtn();
    
})