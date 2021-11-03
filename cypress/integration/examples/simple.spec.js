//basics, url visit, wait, pause

describe('My First Test', () => {
    it('True == True',() => {
        expect(true).to.equal(true)
    })

    it("5 should equal 5", () => {
        expect(5).to.equal(5)
    })
})

describe('Another describe example', () => {
    it('False == False', () => {
        expect(false).to.equal(false)
    })
})

describe('Visit URL examples' , () => {
    it('should visit google webpage' , () => {
        cy.visit('www.google.com' , {timeout:10000})
    })  

    it('The url should inclde google ' , () => {
        cy.url().should('include', 'google')
        //cy.wait(3000)
        //cy.pause()
    })  

    it('The google logo should be visible' , () => {
        cy.get('.lnXdpd').should('be.visible')
    })  
    
})