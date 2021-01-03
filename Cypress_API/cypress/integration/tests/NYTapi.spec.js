import * as GETBook from '../services/GETListBook.request.js';
import * as GETBookByAuthor from '../services/GETBookByAuthor.request.js';
import * as GETListsName from '../services/GETListName.request';
import * as GETOverview from '../services/GETOverview.request';

describe('GET List Book', () => {
    it('Lista de livros', () => {
        GETBook.ListBook().should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.not.be.null;
        });
    });
});

describe('GET List by Author', () => {
   it('Lista de Livros do Autor', () => {
       GETBookByAuthor.BookByAuthor().should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.not.be.null;
            
        
       });
    
   });

   it('Nome do primeiro livro', () => {
        GETBookByAuthor.BookByAuthor().should((response) => {
            expect(response.body.results[0].title).to.equal("BEREN AND LÚTHIEN");
        });
    });
});


describe('GET Name Of Lists', () => {
    it('Nome de tipos de listas', () => {
        GETListsName.getListName().should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.not.be.null;

        })
    })
});

describe('GET List Overview', () => {
    it('Visão geral da publicação',() => {
        GETOverview.Overview().should((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.not.be.null;

        });
    });
});