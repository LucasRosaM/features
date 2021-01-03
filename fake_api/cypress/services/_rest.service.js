export default class Rest {
    static get(endpoint){
        return cy.request({
            method: 'GET',
            url: endpoint,
            failOnStatusCode: false
        })
    }

    static post(endpoint, body){
        return cy.request({
            method: 'POST',
            url: endpoint,
            body: body,
            failOnStatusCode: false
        })
    }

    static delete(endpoint,id){
        return cy.request({
            method: 'DELETE',
            url: endpoint,
            failOnStatusCode: false
        })
    }
}