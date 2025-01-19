import homepage from "../support/pageObject/homepage";
import signIn from "../support/pageObject/signIn";

describe('userSignIn', () => {
    beforeEach(() => {
        cy.visit('')
        cy.verifyTittlePage('.base', 'Home Page')
    
      })

    it('Success Sign In with valid account', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.verifyTittlePage('.base', 'Customer Login')
        cy.get(signIn.email).click().type('qa999magento@mail.com')
        cy.get(signIn.password).click().type('Magento_SoftwareTestingBoard')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        cy.wait(500)
        cy.verifySuccess(':nth-child(2) > .greet > .logged-in', 'Welcome, QA')
      })
})