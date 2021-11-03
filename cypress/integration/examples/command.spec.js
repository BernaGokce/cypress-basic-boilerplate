describe('Login to system' , () => {
//create login command(func) in support folder > command.js
    it('should not login with wrong credantials', () => {
        cy.visit('http://zero.webappsecurity.com/login.html' , {timeout:10000})
        cy.url().should('include', 'zero.webappsecurity')
        cy.Login('username', 'password')
    })
})
