import homepage from "../support/pageObject/homepage";
import signIn from "../support/pageObject/signIn";
import addressBook from "../support/pageObject/addressBook";


describe('userEditProfile', () => {

  function randomPhoneNumber (){
    const randomString = Math.random().toString(36).substring(2,9)
    const phoneNumber = randomString
    return phoneNumber
  }
  function randomStreetName (){
    const randomString = Math.random().toString(36).substring(2,9)
    const streetName = randomString
    return streetName
  }
  function randomCityName (){
    const randomString = Math.random().toString(36).substring(2,9)
    const cityName = randomString
    return cityName
  }

  let phoneNumber = randomPhoneNumber()
  let streetName = randomStreetName()
  let cityName = randomCityName()


    beforeEach(() => {
        cy.visit('')
        cy.signInOption('qa999magento@mail.com','Magento_SoftwareTestingBoard')
        cy.goToAddressPage('')
      })

    // POSITIVE TEST SCENARIO 
    it('Success add new address', () => {
      cy.get('.column > .actions-toolbar > div.primary > .action').click()
      cy.editFIeld(addressBook.phoneNumber, '02183827481')
      cy.editFIeld(addressBook.streetAddress1, streetName)
      cy.editFIeld(addressBook.city, cityName)
      cy.get(addressBook.regionId).select('Alaska')
      cy.editFIeld(addressBook.zip, '12345-9876')
      cy.get(addressBook.country).select('Turkey')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.verifySuccess('.message-success > div', 'You saved the address.')
     })

     it('Success add new address and Use as my default billing address', () => {
      cy.get('.column > .actions-toolbar > div.primary > .action').click()
      cy.editFIeld(addressBook.phoneNumber, '02183827481')
      cy.editFIeld(addressBook.streetAddress1, streetName)
      cy.editFIeld(addressBook.city, cityName)
      cy.get(addressBook.regionId).select('Alaska') 
      cy.editFIeld(addressBook.zip, '12345-9876')
      cy.get(addressBook.country).select('Turkey')
      cy.get(addressBook.setAssDefaultBillingAddress).check({ force: true })
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.verifySuccess('.message-success > div', 'You saved the address.')
    })

    it('Success add new address and Use as my default shipping address', () => {
      cy.get('.column > .actions-toolbar > div.primary > .action').click()
      cy.editFIeld(addressBook.phoneNumber, '02183827481')
      cy.editFIeld(addressBook.streetAddress1, streetName)
      cy.editFIeld(addressBook.city, cityName)
      cy.get(addressBook.regionId).select('Alaska')
      cy.editFIeld(addressBook.zip, '12345-9876')
      cy.get(addressBook.country).select('Turkey')
      cy.get(addressBook.setAssDefaultShippingAddress).check({ force: true })
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.verifySuccess('.message-success > div', 'You saved the address.')
    })

    it('Success Change Billing Address', () => {
      cy.get('.box-address-billing > .box-actions > .action > span').click()
      cy.verifyTittlePage('.base', 'Edit Address')
      cy.editFIeld(addressBook.phoneNumber, '02183827481')
      cy.editFIeld(addressBook.streetAddress1, streetName)
      cy.editFIeld(addressBook.city, cityName)
      cy.editFIeld(addressBook.region, 'Kuala Lumpur')
      cy.editFIeld(addressBook.zip, '12345-9876')
      cy.get(addressBook.country).select('Tonga')
      cy.validateComment('.info > span', 'default billing address')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.verifySuccess('.message-success > div', 'You saved the address.')
    })

    it('Success Change Shipping Address', () => {
      cy.get('.box-address-shipping > .box-actions > .action > span').click()
      cy.verifyTittlePage('.base', 'Edit Address')
      cy.editFIeld(addressBook.phoneNumber, '02183827481')
      cy.editFIeld(addressBook.streetAddress1, streetName)
      cy.editFIeld(addressBook.city, cityName)
      cy.editFIeld(addressBook.region, 'Kuala Lumpur')
      cy.editFIeld(addressBook.zip, '12345-9876')
      cy.get(addressBook.country).select('Tonga')
      cy.validateComment('.info > span', 'default shipping address')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.verifySuccess('.message-success > div', 'You saved the address.')
    })

    it('Success Delete Address', () => {
      cy.get(':nth-child(1) > .actions > .delete > span').click()
      cy.validateComment('#modal-content-16 > div', 'Are you sure you want to delete this address?')
      cy.get('.action-primary').click()
      cy.verifySuccess('.message-success > div', 'You deleted the address.')
    }) 

    it('Success Cancel Delete Address', () => {
      cy.get(':nth-child(1) > .actions > .delete > span').click()
      cy.validateComment('#modal-content-16 > div', 'Are you sure you want to delete this address?')
      cy.get('.action-secondary').click()
      cy.verifyTittlePage('.block-addresses-list > .block-title > strong', 'Additional Address Entries')
    }) 

    it('Success Edit Address from List', () => {
      cy.get(':nth-child(1) > .actions > .edit > span').click()
      cy.verifyTittlePage('.base', 'Edit Address')
      cy.editFIeld(addressBook.phoneNumber, '02183827481')
      cy.editFIeld(addressBook.streetAddress1, streetName)
      cy.editFIeld(addressBook.city, cityName)
      cy.editFIeld(addressBook.region, 'Jakarta')
      cy.editFIeld(addressBook.zip, '12345-9876')
      cy.get(addressBook.country).select('Thailand')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.verifySuccess('.message-success > div', 'You saved the address.')
    })



    // NEGATIVE TEST SCENARIO
    it('Empty the Field Mandatory when add new address', () => {
      cy.get('.column > .actions-toolbar > div.primary > .action').click()
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.validateComment(addressBook.emptyPhoneNumber, 'This is a required field.')
      cy.validateComment(addressBook.emptyStreetName, 'This is a required field.')
      cy.validateComment(addressBook.emptyCityName, 'This is a required field.')
      cy.validateComment(addressBook.emptyRegionId, 'Please select an option.')
      cy.validateComment(addressBook.emptyZipCode, 'This is a required field.')
    })

    it('Input invalid format in Zip/Portal code', () => {
     cy.get('.column > .actions-toolbar > div.primary > .action').click()
     cy.editFIeld(addressBook.zip, '123459876999') 
     cy.verifyErrorMessage('.message > span', 'Provided Zip/Postal Code seems to be invalid. Example: 12345-6789; 12345. If you believe it is the right one you can ignore this notice.')
   })

   it('Empty the Field Mandatory when edit address', () => {
    cy.get(':nth-child(1) > .actions > .edit > span').click()
    cy.verifyTittlePage('.base', 'Edit Address')
    cy.editFIeld(addressBook.phoneNumber, ' ')
    cy.editFIeld(addressBook.streetAddress1, ' ')
    cy.editFIeld(addressBook.city, ' ')
    cy.editFIeld(addressBook.region, ' ')
    cy.editFIeld(addressBook.zip, ' ')
    cy.get(addressBook.country).select([0])
    cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
    cy.validateComment(addressBook.emptyPhoneNumber, 'This is a required field.')
    cy.validateComment(addressBook.emptyStreetName, 'This is a required field.')
    cy.validateComment(addressBook.emptyCityName, 'This is a required field.')
    cy.validateComment(addressBook.emptyCountry, 'Please select an option.')
    cy.validateComment(addressBook.emptyZipCode, 'This is a required field.')
  })
  
})