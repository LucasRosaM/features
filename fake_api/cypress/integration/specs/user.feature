# language: pt
@feature_books
Funcionalidade: Livros 

    @get_all_books
    Cenario: (Get) Todos os livros
      Quando buscar por todos os livros
      Entao deve retornar uma resposta com o status 200
    
    @post_books
    Esquema do Cenário: (Post) Criar um livro
      Quando criar um novo livro com '<titulo>' e '<descricao>'
      Entao deve retornar uma resposta com status 200
    
        Exemplos:
            | titulo | descricao        |
            | livro1 | esse é um livro  |
            | livro2 | outro livro      |
    @delete_book
    Cenario: (Delete) Deletar um livro
      Quando apagar livro com o id 1
      Entao deve retornar o status 200
    