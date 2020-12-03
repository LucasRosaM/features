#language: pt

Funcionalidade: Pagamento
  Contexto: Comprar passagem
  Dado que já tenha escolhido as passagens
  E preenchido os dados pessoais
  Quando prosseguir 
    
    Esquema de Cenário:Compra com CC ou CD
        Quando inserir no formulario o "<Número do cartão>"
        E preencher o restante dos dados do metodo escolhido
        Então deverá ser redirecionado para a pagina de confirmação

        Exemplos:
          |Número do cartão   |
          |1111 1111 1111 1111|

    Esquema de Cenário:Compra com CC ou CD exception
        Quando inserir no formulario o "<Número do cartão>"
        E preencher o restante dos dados do metodo escolhido
        Então deverá ser exibida a "<mensagem>"
        
        Exemplos:
          |Número do cartão   | mensagem                  |
          |aaaa bbbb cccc dddd|Número do cartão inválido  |
          |                   |Precisamos dessa informação|
    
    Esquema de Cenário: Compra com Paypal
        Quando confirmar no botão comprar
        Então deverá ser redirecionado para o login do paypal

    Esquema de Cenário: Compra com tranferência bancária
        Quando preencher com os dados do "<CPF>", "<Agência>" e "<Conta>"
        Então deverá ser redirecionado para a pagina de confirmação
        
        Exemplos:
          |CPF        | Agência          | Conta        |
          |CPF_Valido | Agência_Valida   | Conta_Valida |
          |CPF_Valido2| Agência_Valida2  | Conta_Valida2|
        
    Esquema de Cenário: Compra com tranferência bancária
        Quando preencher com os dados do "<CPF>", "<Agência>" e "<Conta>"
        Então deverá ser exibida a "<mensagem>"
        
        Exemplos:
          |CPF            | Agência  | Conta    | mensagem              |
          |aaa aaa aaa aa | abcd     | 11aa22bb | Dado invalido         |
          |               |          |          | Informação necessaria |

    Esquema de Cenário: Compra com Mercado Pago
        Quando confirmar no botão comprar
        Então deverá ser redirecionado para a pagina de confirmação