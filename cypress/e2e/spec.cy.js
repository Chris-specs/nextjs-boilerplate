describe('Main functionality', () => {

    before(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Sing in', () => {

        cy.get('input, [name="user"]')
            .type('Chris')
            .should('have.value', 'Chris')

        cy.get('button, [type="submit"]')
            .click()
            
        cy.location().should((location) => {
            expect(location.pathname).to.eq('/home')
        })
            
    })
        
    it('Verify if user name has visible', () => {
        cy.get('h2').contains('Chris')
    })
        
    it('Sign out', () => {
            
        cy.get('button')
            .contains('Sign Out')
            .click()

        cy.location().should((location) => {
            expect(location.pathname).to.eq('/')
        })
        
    })
})