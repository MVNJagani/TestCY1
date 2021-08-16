
//./node_modules/.bin/cypress open --> Run from CyPress page
//./node_modules/.bin/cypress run  --> you can run scripts from terminal will execute from Example folder
//./node_modules/.bin/cypress run  -- spec "file --> copy relative path"--> you can run scripts from terminal will execute from Example folder
//./node_modules/.bin/cypress run  --browser chrome --> it will run in chrome browser
// install plugin:  npm install --save-dev @4tw/cypress-drag-drop

export class LoginPage{

  loginPage_username = '#username'
  loginPage_password = '#password'
  loginBtn = '#Login'

  navigate(url){
    cy.visit(url)

  }
  enterUsername(username){
    cy.get(this.loginPage_username).type(username)

  }
  enterPassword(password){
    cy.get(this.loginPage_password).type(password)

  }
  clickLoginBtn(){
    cy.get(this.loginBtn).click()

  }

  
}
