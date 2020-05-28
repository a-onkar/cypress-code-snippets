// This example shows how to use custom command. 


describe('Learning URL related commands - QA Milestone', () => {

    before(() => {
        cy.Login()      // The login function is defined in custom commands
    })

    it('Create a Post', () => {
        cy.contains('New Post').click()
        cy.hash().should('include', '#/editor')
        cy.location('hash').should('include', '#/editor')

        cy.get('input[placeholder="Article Title"]').should('be.enabled').type('Learning Cypress')
        cy.get('input[placeholder="What\'s this article about?"]').should('be.enabled').type('Using URL related commands')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Wrote the article')
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')

        cy.get(':nth-child(4) > .nav-link').click()
        cy.contains('My Articles').should('be.visible')
        cy.scrollTo('bottom')
    })


})