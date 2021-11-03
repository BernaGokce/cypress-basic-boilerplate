describe('Login with fixtures' , () => {

    //create user.json file in fixtures folders
    it('should not login to system with invalid credantials', () => {
        cy.visit('http://zero.webappsecurity.com/login.html' , {timeout:10000})
        cy.url().should('include', 'zero.webappsecurity')

        cy.fixture('user').then(user =>{
            const username = user.username
            const password = user.password

            cy.get('#user_login').as('username')
            cy.get('@username').clear
            cy.get('@username').type(username)
            
            cy.get('#user_login').as('password')
            cy.get('@password').type(password)  

            cy.get('input[name="submit"]').click()   
            cy.get('.alert-error').contains('Login and/or password are wrong.')  
        })
    })
  
}) 