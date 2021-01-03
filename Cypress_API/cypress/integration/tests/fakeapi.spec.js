import * as addBook from '../services/POSTBooks.request'
//O teste para a segunda API
describe('POST Books', () => {
    it('Adicionar um novo livro', () => {
        addBook.addBook().should((response) => {
            expect(response.status).to.eq(200);
        });
    });
});