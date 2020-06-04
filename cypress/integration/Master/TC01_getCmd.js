describe('Understanding get command', () => {

    it('Basic get command usage', () => {
        cy.visit('https://parabank.parasoft.com/')

        /* filter one or more elements and yield */

        cy.get('input[name="username"]').type('john')
        
        cy.get('input[name="password"]').type('demo')
        
        // cy.get('input[type="submit"]').click()

    })

   

    it('Using Alias in get', () => {

        cy.get('input[name="username"]').as('userName')
        cy.get('@userName').clear().type('john')

    })

    it('Using Options in get', () => {

        cy.get('input[name="password"]', {log: true})  // If change to false, you won't find an entry in execution browser window
    })

    
})