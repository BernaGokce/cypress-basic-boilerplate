describe('Scroll', ()=> {

    //check screenshots folder
    it('Scroll Example', () => {
        cy.visit('https://www.meetup.com/tr-TR/TestHive/' , {timeout:10000})
        cy.wait(3000)
        cy.get("span").contains('Tartışmalar (1)').scrollIntoView()
        cy.wait(3000)
        cy.get("a").contains('Test Hive').scrollIntoView()
        
    })
})