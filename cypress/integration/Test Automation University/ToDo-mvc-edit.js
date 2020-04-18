

it('Add new ToDo, Assert item, assert checklist', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').should('have.class', 'new-todo').type('Learn JavaScript{enter}')

    //    Different ways to validate (Assert) to check if text is present.
    cy.get('label').should('have.text', 'Learn JavaScript') // First way (Recommended)
      cy.get('label').invoke('text').should('equal', 'Learn JavaScript') //Second way

    cy.get('.toggle').should('not.be.checked') // Assertions: The to do item should not be checked

    cy.get('.new-todo').should('have.class', 'new-todo').type('Learn Cypress {enter}') //Enter new todo item

    cy.contains('Learn JavaScript').should('have.text', 'Learn JavaScript') 

    cy.get(':nth-child(1) > .view > label').should('have.text', 'Learn Cypress')

    cy.get(':nth-child(2) > .view > .toggle').should('not.be.checked')
})