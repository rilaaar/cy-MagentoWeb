Cypress.Commands.add('signInOption', (email, password) => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get('.base').should('contain.text','Home Page')
 })

 Cypress.Commands.add('signInInValid', (email, password) => {
    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(email)
    cy.get('#pass').type(password)
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
    cy.get('.message-error').should('contain.text','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
 })
 
 Cypress.Commands.add('verifyTittlePage', (locator,text) => {
    cy.get(locator).should('include.text', text)
})

Cypress.Commands.add('verifySuccess', (locator,text) => {
    cy.get(locator).should('include.text', text)
})

Cypress.Commands.add('validateComment', (locator,text) => {
    cy.get(locator).should('include.text', text)
})

Cypress.Commands.add('goToAddressPage',()=> {
    cy.get(':nth-child(2) > .customer-welcome > .customer-name > .action').click()
    cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a').click()
    cy.get('.base').should('contain.text','My Account')
    cy.get('.items > :nth-child(6) > a').click()
    cy.get('.base').should('contain.text','Address Book')
    cy.wait(500)
})

Cypress.Commands.add('editFIeld', (locator,text) => {
    cy.get(locator).should('be.visible').click().clear().type(text)
})

Cypress.Commands.add('verifyErrorMessage', (locator,text) => {
    cy.get(locator).should('include.text', text)
})

