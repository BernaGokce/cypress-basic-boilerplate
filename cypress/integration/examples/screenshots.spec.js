describe('Screenshots', ()=> {

    //check screenshots folder
    it('Full Page Screenshots', () => {
        cy.visit('https://www.meetup.com/tr-TR/TestHive/' , {timeout:10000})
        cy.screenshot({ capture: 'fullPage'})
    })

    it('Snapshots', () => {
        cy.get("a").contains('Test Hive').screenshot()
        
    })
})