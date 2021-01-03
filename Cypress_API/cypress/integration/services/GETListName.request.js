/// <reference types = "cypress" />

const payloadkey = require('../payloads/api-key.json')

function getListName(){
    return cy.request({
        method: 'GET',
        url: `lists/names.json?api-key=${payloadkey.key}`,
        failOnStatusCode: false
    })
}

export { getListName };