import homepage from "../support/pageObject/homepage"
import registerPage from "../support/pageObject/registerPage"

describe('createUSer', () => {

  function randomName (){
    const randomString = Math.random().toString(36).substring(2,9)
    const name = randomString
    return name
  }

  function randomEmail (){
    const randomString = Math.random().toString(36).substring(2,9)
    const email = randomString + "@mail.com"
    return email
  }

  function randomPassword (){
    const randomString = Math.random().toString(36).substring(2,9)
    const password = randomString
    return password
  }

  let name = randomName()
  let email = randomEmail()
  let password = randomPassword()


  beforeEach(() => {
    cy.visit('')
    cy.verifyTittlePage('.base', 'Home Page')
  })

  it('Success Create Account', () => {
    cy.get('.panel > .header > :nth-child(3) > a').click()
    cy.verifyTittlePage('.base', 'Create New Customer Account')
    cy.get(registerPage.firstName).click().type('QA ' + name)
    cy.get(registerPage.lastName).click().type('Magento')
    cy.get(registerPage.email).click().type(email)
    cy.get(registerPage.password).click().type('Magento_SoftwareTestingBoard')
    cy.get(registerPage.passwordConfirm).click().type('Magento_SoftwareTestingBoard')
    cy.get(registerPage.btnRegister).click()
    cy.wait(1000)
    cy.verifySuccess('.message-success > div', 'Thank you for registering with Main Website Store.')
  })

})