///<reference types = "cypress"/>
//Aqui estou usando uma segunda api, pois a anterior só permite metodos GET
//Utilizar "npm run cypress:open:fakeapi" e não "cypress:open:NYTapi"
const payloadaddbook = require('../payloads/add-book.json')

function addBook(){
    return cy.request({
        method: 'POST',
        url: `v1/Activities`,
        failOnStatusCode: false,
        body: payloadaddbook
    })
}

export { addBook };