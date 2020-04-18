

it('Should be able to add new ToDo', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    for (let i = 0; i<= 2; i++) {
        cy.get('.new-todo').should('have.class', 'new-todo').type('Learn JavaScript {enter}')
        cy.get('label').contains('Learn JavaScript').invoke('text').should('equal', 'Learn JavaScript')
        cy.get('.toggle').click()
        cy.get('.clear-completed').click()
    }
})