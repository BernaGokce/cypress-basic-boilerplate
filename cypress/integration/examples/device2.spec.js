describe('Login to system' , () => {

    it('should visit example website' , () => {
        cy.viewport('iphone-x')
        cy.visit('http://zero.webappsecurity.com/login.html' , {timeout:10000})
        cy.url().should('include', 'zero.webappsecurity')
        cy.title().should('include', 'Zero - Log in')
    })  
//alias&variables
    it('should fill username ' , () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear
        cy.get('@username').type('Invalid Name')  
        cy.wait(3000)
    })
}) 
