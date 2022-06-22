describe('home page', ()=> {
    it('app deve estar online', ()=> {
        //cy.viewport(1440, 900) //essa resolução é boa
        cy.viewport(1920, 1080) //resolução full hd
        cy.visit('https://buger-eats.vercel.app')
        cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })


})