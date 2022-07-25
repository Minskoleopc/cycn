///<reference types="cypress"/>
describe("verify the login form",function(){

    it('verify the login for orange hrml',function(){

        //cy.visit('/index.php/auth/login')

        let baseUrl = Cypress.config().baseUrl
        let pass = Cypress.config().password
        let username = Cypress.config().username

        //cy.log(baseUrl)
        cy.visit(baseUrl)
        cy.log(pass)
        cy.log(username)


    })



})