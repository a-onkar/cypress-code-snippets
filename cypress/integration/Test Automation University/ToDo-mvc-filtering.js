
describe('Testing ToDo Add & Clear', () => {

    before(() => {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    })

    it('Add items to the list', () => {
        cy.get('.new-todo').type('Learn JavaScript{enter}')
        cy.get('.new-todo').type('Learn Cypress{enter}')
        cy.get('.new-todo').type('Learn POM{enter}')

        cy.get('.todo-list li').should('have.length', 3)
    })

    it('Marking first todo as completed', () => {
        cy.get('.todo-list li:nth-child(1) .toggle').click()
        cy.get('.todo-list li').should('have.length', 3)
    })

    it('Filtering Active ToDos', () => {
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)
    })

    it('Filtering Completed ToDos', () => {
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })

    it('Filtering All ToDos', () => {
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)
    })

})
