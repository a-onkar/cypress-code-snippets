// Example shows how to use commands: title() , location() , hash() , url() , reload() , go()


describe('Learning URL related commands - QA Milestone', () => {


    it('Login', () => {
        cy.visit('https://react-redux.realworld.io/#/login')

        cy.title().should('eq', 'Conduit')  // Verifying title using assertions

        cy.location('protocol').should('equal', 'https:') // Verify the protocol is HTTPS

        cy.get('input[type="email"]').should('be.enabled').clear().type('anandteerthonkar@gmail.com')
        cy.get('input[type="password"]').should('be.enabled').clear().type('Test123!')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Your Feed').should('be.visible')
    })


    it('Create a Post', () => {
        cy.contains('New Post').click()

        cy.hash().should('include', '#/editor')  // Verifying hash from url - using hash()
        cy.location('hash').should('include', '#/editor') // Verifying hash from url - using location()

        cy.get('input[placeholder="Article Title"]').should('be.enabled').type('Learning Cypress')
        cy.get('input[placeholder="What\'s this article about?"]').should('be.enabled').type('Using URL related commands')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('Wrote the article')
        cy.contains('Publish Article').click()

        cy.url().should('include', 'article')  // url() - Extracts url of the current page

        cy.get(':nth-child(4) > .nav-link').click()
        cy.contains('My Articles').should('be.visible')
        cy.scrollTo('bottom')
    })


    it.skip('Mark an article as Favorite', () => {
        cy.get(':nth-child(4) > .nav-link').click()
        cy.contains('My Articles').should('be.visible')
        // cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn > .ion-heart').wait(1000)
        cy.get('.ion-heart').click()
        cy.contains('Favorited Articles').click()
        cy.url().should('include', 'favorites')

        // cy.get(':nth-child(1) > .article-meta > .pull-xs-right > .btn > .ion-heart').click()
        cy.get('.ion-heart').click()
        cy.reload()   //reload the current page

        cy.contains('No articles are here... yet.').should('be.visible')

        cy.go('back')  // or cy.go(-1)
        cy.go('forward') // or cy.go(1)
    })



})