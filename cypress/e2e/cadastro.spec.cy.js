import signupPage from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Cadastro', () => {

    /*
    beforeEach(function () {
        cy.fixture('deliver').then((massaDeliver) => { //Uma função que consegue obter uma massa que está na camada de fixture
            this.deliver = massaDeliver
        })
    })
    */

    it('Usuário deve se tornar um entregador', function () {

        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
    })


    it('CPF incorreto', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '000000141aa'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Email incorreto', function () {

        var deliver = signupFactory.deliver()

        deliver.email = '000000141aa'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    //Dessa forma se houver algum erro de validação em algum campo os outros testes não são abortados.
    context('Campos obrigatórios', function () {

        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery-method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' },
        ]

        before(function () {
            signupPage.go()
            signupPage.submit()
        })

        //função que vai percorrer pela lista de mensagens através de um looping
        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })

    })


    /*
    it('exemplo de massa de login' , ()=> {
        var user = {email: "teste@teste.com", password: "pwd123"}

    })
    */

})