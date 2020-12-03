#language: pt

Funcionalidade: Autenticação
  Contexto: Abrir login
  Dado que esteja na home
  Quando abrir login

    Esquema do Cenário: Realizar login
        Quando realizar login com "<email>" e "<senha>"
        Então o nome do usuário deverá ser exibido no header

        Exemplos:
          |email           | senha |
          |fulano@test.com | 12345 |
          |ciclano@test.com| 54321 |
        
    Esquema do Cenário: Realizar login exception
        Quando realizar login com "<email>" e "<senha>"
        Então deverá ser exibida a mensagem "<mensagem>"

        Exemplos:
          |email           | senha  | mensagem          |
          |fulano@test.com | errada | senha incorreta   |
          |ciclano@test.com|        | senha obrigatória |

    Esquema do Cenário: Login pelo numero do pedido 
        Quando selecionar "Acesso com numero" 
        E realizar login com "<email>" e "<numeroPedido>"
        Então o nome do usuário deverá ser exibido no header

        Exemplos:
          |email           | numeroPedido |
          |fulano@test.com | 111.222.333 |
          |ciclano@test.com| 222.222.444 |
        
    Esquema do Cenário: Login pelo numero do pedido exception
        Quando selecionar "Acesso com numero" 
        E realizar login com "<email>" e "<numeroPedido>"
        Então deverá ser exibida a mensagem "<mensagem>"

        Exemplos:
          |email           | numeroPedido  |         mensagem            |
          |fulano@test.com |    errado     | Não encotramos seu pedido   |
          |ciclano@test.com|               | Digite o numero do pedido   |
  
  Cenário: Realizar cadastro
    Dado que esteja na home
    Quando abrir login
    E selecionar cadastro
    E realizar cadastro
    Então o nome do usuário deverá ser exibido no header

