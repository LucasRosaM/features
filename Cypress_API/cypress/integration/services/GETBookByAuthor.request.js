/// <reference types = "cypress" />

const payloadapikey = require('../payloads/api-key.json');
const payloadaut = require('../payloads/param.json');

function BookByAuthor () {
    return cy.request({
       methot: 'GET',      
       url: `lists/best-sellers/history.json?api-key=${payloadapikey.key}&author=${payloadaut.autores[0]}`,
       failOnStatusCode: false
    });
}

 
export { BookByAuthor };
