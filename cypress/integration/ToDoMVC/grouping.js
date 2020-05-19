
// Base url: http://todomvc-app-for-testing.surge.sh/


describe('Testing ToDo Add & Clear', ()=>{

    before(()=>{
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    })

    it('Add new todo to the list', () =>{
        cy.get('.new-todo').should('be.enabled').type('Learn Cypress{enter}') 
        cy.get('label').should('have.text', 'Learn Cypress')
        cy.get('.toggle').should('not.be.checked')
        cy.get('.todo-list li').should('have.length', 1)
    })
    
    it('Marking todo as completed', () =>{
        cy.get('.toggle').click()
        cy.get('.toggle').should('be.checked')   
        cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
    })
    
    it('Clearing todo list', () =>{
        cy.contains('Clear').click()
        cy.get('.todo-list').should('not.have.descendants')
    })

})
