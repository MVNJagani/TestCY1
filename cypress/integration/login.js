
import {LoginPage} from '../pages/login_pages'

const loginPage = new LoginPage()

it('login test', function(){

        loginPage.navigate('https://rv--test.my.salesforce.com/');
        loginPage.enterUsername('vedant.jagani@campingworld.com.test');
        loginPage.enterPassword('Welcome2019*');
        loginPage.clickLoginBtn();
        
        })
