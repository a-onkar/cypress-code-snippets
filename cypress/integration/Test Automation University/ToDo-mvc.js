

it('Add new ToDo, Assert item, assert checklist', () => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo').should('have.class', 'new-todo').type('Learn JavaScript{enter}') //Add item to ToDo list

    cy.get('label').should('have.text', 'Learn JavaScript') //Assertion: Verifies text of added item using tagname
   
    cy.get('.toggle').should('not.be.checked') //Assertion: Verifies the toggle button is unchecked using class-name

    cy.get('.toggle').click() // MArking todo as completed

    cy.get('.toggle').should('be.checked') //Assertion: Verifies the toggle button is checked

    cy.get('label').should('have.css', 'text-decoration-line', 'line-through') //Assertion: Verifies the item text is strikethrough
    
    cy.contains('Clear').click() //Clears the strikethrough/completed items from todo list

    // Check: No items are there in ToDo list

    cy.get('.todo-list').should('not.have.descendants', 'li')


})