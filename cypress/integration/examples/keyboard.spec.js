describe('Search with enter' , () => {

    it('should visit example website' , () => {
        cy.visit('http://zero.webappsecurity.com/' , {timeout:10000})
        cy.url().should('include', 'zero.webappsecurity')
    })  
//alias&variables
    it('should search test words ' , () => {
        cy.get('#searchTerm').click()
        cy.get('#searchTerm').type('Test {enter}')
        cy.get('h2').contains('Search Results:')
        
    })
}) 