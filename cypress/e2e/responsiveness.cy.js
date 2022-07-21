describe('Responsiveness', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Navbar logo align', () => {

        cy.viewport('macbook-15')
        cy.get('.navbar').should('have.css', 'justify-content', 'flex-start')

        cy.viewport('iphone-x')
        cy.get('.navbar').should('have.css', 'justify-content', 'center')
    })
})