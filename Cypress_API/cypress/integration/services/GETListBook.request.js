/// <reference types = "cypress" />

const payloadapikey = require('../payloads/api-key.json');
const payloadgen = require('../payloads/param.json');

function ListBook () {
    return cy.request({
       methot: 'GET',      
       url: `lists.json?list=${payloadgen.genero[0]}&api-key=${payloadapikey.key}`,
       failOnStatusCode: false
    });
}

 
export { ListBook };
