describe('Write/Read data from json or txt file', () => {

    //check log.json & log.txt file after run the test 
    it('should write data into json', () => {
        cy.writeFile('log.json', {name: 'Berna', age: 29})
    })

    it('should write data into text', () => {
        cy.writeFile('log.txt', "Test Hive")
    })

    it('should read data into json', () => {
        cy.readFile('log.json')
            .its('age')
            .should('eq', 29)
    })
    
    it('should read data into text', () => {
        cy.readFile('log.txt').should('eq','Test Hive')
    })
})