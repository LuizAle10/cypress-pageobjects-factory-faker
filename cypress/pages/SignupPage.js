// A classe no javascript segue o padrão de nomenclatura pascalCAse
//Funções e Variaves segue o padrão CamelCase

class SignupPage {
//função 
    go() { //acessar a pagina de formulario
          cy.visit('/')
  
          cy.get('a[href="/deliver"]').click()
          cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas') //Isso não é validação mas um check point
    }
//função
    fillForm(deliver) {
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="Button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number').type(deliver.address.number)
        cy.get('input[name="address-details').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', deliver.address.street)
        cy.get('input[name="district"]').should('have.value', deliver.address.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.delivery_method).click()


        // se fizer a busca com ^ ex: input[accept^="image"] => estou falando inicia com o texto "imagem"
        // se fizer a busca com $ ex: input[accept$="image"] => estou falando finaliza com o texto "imagem"
        // se fizer a busca com * ex: input[accept*="image"] => estou falando contém  o texto "imagem"


        //Utilizei essa opção pois apresenta element is not visible pois o elemento é style="display: none"
        cy.get('input[accept^="image"]').selectFile({ contents: 'cypress/fixtures/cnh-digital.jpg' }, { force: true })
            .then(input => {
                expect(input[0].files[0].name).to.equal('cnh-digital.jpg') //verificar nome do arquivo importado     
            })
    }
//função
    submit() {
        cy.get('form button[type="submit"]').click()
    }

//função
    modalContentShouldBe(expectedMessage) {
          //Validando mensagem
        //Modal com componente
        cy.get('.swal2-container .swal2-html-container')
          .should('have.text',expectedMessage)
    }

    alertMessageShouldBe(expectedMessage) {
        //Validando span de erro => alert
      // cy.get('.alert-error').should('have.text', expectedMessage)
       cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

}

export default new SignupPage;