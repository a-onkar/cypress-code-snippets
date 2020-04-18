describe('Computer database navigation', () => {

    beforeEach(() => {
        cy.visit("computers")
    })

    it('should navigate to different pages', () => {
        cy.get('header a').should('contain', 'Play sample application — Computer database');
        cy.get('a#add').should('be.visible');
        cy.get('a#add').click()
        cy.get('.btn.primary').should('be.visible');
        cy.get('a').contains('Cancel').should('be.visible')
        cy.get('a').contains('Cancel').click()
        

    })

 
});