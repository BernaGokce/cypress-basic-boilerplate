// clear&type, checkbox, aliases & variables, clear cookies & local storage
// Time & Date Modification

describe('Login to system' , () => {

    it('should override the current time', () => {
        const date = new Date(2020, 3, 10).getTime() //return a timestamp
        cy.clock(date)
        cy.log(date)
    })
    it('should visit example website' , () => {
        cy.visit('http://zero.webappsecurity.com/login.html' , {timeout:10000})
        cy.url().should('include', 'zero.webappsecurity')
        cy.log('Website is opened')
        cy.clearCookies({log:true})
        cy.clearLocalStorage('your item', {log:true})
    })  
    //alias&variables
    it('should fill username ' , () => {
        cy.get('#user_login').as('username')
        cy.get('@username').clear
        cy.get('@username').type('Invalid Name')  
     }) 

    it('should fill password ' , () => {
       cy.get('#user_password').type('Invalid Pass')  
    }) 

    it('should mark checkbox' , () => {
        cy.get('input[type="checkbox"]').click()    
        cy.wait(5000)
     }) 

    it('should click on login button' , () => {
        cy.get('input[name="submit"]').click()    
    }) 

    it('should display error message' , () => {
        cy.get('.alert-error').contains('Login and/or password are wrong.')  
        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    }) 

})