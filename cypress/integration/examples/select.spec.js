describe('Select Example' , () => {
    //create login command(func) in support folder > command.js
        it('should visit w3school', () => {
            cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select' , {timeout:10000})
        })

        it('should select different cars', () => {
            cy.get('#cars').select('Volvo')
            cy.get('#cars').should('have.value', 'volvo')
        })
    })
    