// first install npm install cypress-xpath
//second add require('cypress-xpath') into support file > index.js

describe('Xpath example', ()=> {


    it('should find element with xpath', () => {
        cy.visit('https://www.meetup.com/tr-TR/TestHive/' , {timeout:10000})
        cy.wait(3000)
        cy.xpath('//*[@id="actionButtonLink"]').should('be.visible')
        cy.xpath('//*[@id="actionButtonLink"]').click()
        cy.wait(3000)
    })
})