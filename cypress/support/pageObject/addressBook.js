class addressBook {
    phoneNumber = '#telephone'
    streetAddress1 = '#street_1'
    city = '#city'
    regionId = '#region_id'
    region = '#region'
    zip = '#zip'
    country = '#country'
    emptyPhoneNumber = '#telephone-error'
    emptyStreetName = '#street_1-error'
    emptyCityName = '#city-error'
    emptyRegionId = '#region_id-error'
    emptyZipCode = '#zip-error'
    emptyCountry = '#country-error'
    setAssDefaultBillingAddress = '#primary_billing'
    setAssDefaultShippingAddress = '#primary_shipping'
}

module.exports = new addressBook ()