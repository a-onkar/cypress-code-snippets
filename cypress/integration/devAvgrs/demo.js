describe('Demo fail', () => {

    beforeEach(() => {
        cy.visit("computers")
    })

    it('failed test case', () => {
        cy.get('header a').should('contain', 'Play sample application — Computer database');
        cy.get('a#add').should('be.visible');
        cy.get('a#add1').click()
        cy.get('.btn.primary').should('be.visible');
        cy.get('a').contains('Cancel').should('be.visible')
        cy.get('a').contains('Cancel').click()
        

    })

 
});