/// <reference types = "cypress" />

const payloadkey = require('../payloads/api-key.json');
const payloaddata = require('../payloads/param.json')

function Overview(){
    return cy.request({
        method: 'GET',
        url: `lists/overview.json?published_date=${payloaddata.datas[0]}&api-key=${payloadkey.key}`,
        failOnStatusCode: false
    })
}

export { Overview }
