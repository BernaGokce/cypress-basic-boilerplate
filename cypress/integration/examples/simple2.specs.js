//log, list, click, browser refresh/reload

describe('Visit URL examples' , () => {
    it('should visit google webpage' , () => {
        cy.visit('https://www.swtestacademy.com/' , {timeout:10000})
        cy.url().should('include', 'testacademy')
        cy.log('Website is opened')
    })  

    it('should open blog list page ' , () => {
       cy.get('strong').contains('Discover the Blog!').click()
        
    }) 

})

describe('Bookstore example for travel category', () => {
    it('should visit bookstore webpage', () => {
        cy.visit('https://books.toscrape.com/')
        cy.url().should('include', 'books.toscrape')
    })

    it('should check travel category', () => {
        cy.get('a').contains('Travel').click()
    })

    it('should have 11 item', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('should check poetry category', () => {
        cy.get('a').contains('Poetry').click()
    })

    it('should choose Olio poetry category', () => {
        cy.get('img[alt="Olio"]').click()
    })

    it('Olio price should be £23.88', () => {
        cy.get('.price_color').contains("£23.88")
    })
})

describe('Reload examples' , () => {
    it('should visit google webpage' , () => {
        cy.visit('https://www.swtestacademy.com/' , {timeout:10000})
        cy.url().should('include', 'testacademy')
        cy.log('Before reload')
        cy.reload()
        cy.log('After reload')
    })  
})

