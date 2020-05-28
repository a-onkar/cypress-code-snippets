

Cypress.Commands.add("Login", ()=>{
    cy.visit('https://react-redux.realworld.io/#/login')
    cy.title().should('eq', 'Conduit')  // Verifying title using assertions
    // Verify the protocol is HTTPS
    cy.location('protocol').should('equal', 'https:')
    cy.get('input[type="email"]').should('be.enabled').clear().type('anandteerthonkar@gmail.com')
    cy.get('input[type="password"]').should('be.enabled').clear().type('Test123!')
    cy.get('.btn').contains('Sign in').should('be.visible').click()
    cy.contains('Your Feed').should('be.visible')
})




