
// Following example shows How cypress commands ae asynchronous in nature

describe('Cypress commands are Asynchronous', function () {
  it('Example showing Aynchronous nature of Cypress', function () {

    cy.visit("https://the-internet.herokuapp.com/");
    cy.contains('Broken trdt', { timeout: 5000 }).click()                  // Intentionally invalid locator is defined

    cy.log('This Cypress command will not be logged in test runner as Cy has buffer to serialize the cmds')

    console.log('Prints before cliking on the link, which is not found')  // This prints even before above element is clicked, dhowing Asynchronous nature
  })


})