
// Needs revision - minor

// Base url: http://todomvc-app-for-testing.surge.sh/

it('Adding delay and time-out', ()=>{
    cy.visit('/?delay-new-todo=5000') // delays the elemtn with classname to appear
    
    cy.get('.new-todo',{timeout:6000}).type('Learn JavaScript {enter}')

})