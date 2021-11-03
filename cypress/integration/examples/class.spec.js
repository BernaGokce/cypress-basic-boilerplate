class BasePage {
    static loadHomePage() {
        cy.visit('https://www.meetup.com/tr-TR/TestHive/' , {timeout:10000})
    }

    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage {
    static scrollToBottom() {
        cy.get("span").contains('Tartışmalar (1)').scrollIntoView()
    }

    static scrollToTop() {
        cy.get("a").contains('Test Hive').scrollIntoView()
    } 
}

describe('Scroll', ()=> {

    before(function() {
        HomePage.loadHomePage()
        //runs before all tests
    })

    after(function() {
        //runs after all tests
    })

    beforeEach(function() {
        //runs before each it blocks
    })

    afterEach(function() {
        //runs after each it blocks
    })
    it('Scroll Example', () => {
      HomePage.wait(3000)
      HomePage.scrollToBottom()
      HomePage.wait(3000)
      HomePage.scrollToTop()
        
    })

    it.skip('example 1', () => {
        HomePage.wait(3000)
        HomePage.scrollToBottom()
        HomePage.wait(3000)
        HomePage.scrollToTop()
          
    })

    it.only('example 2', () => {
        HomePage.wait(3000)
        HomePage.scrollToBottom()
        HomePage.wait(3000)
        HomePage.scrollToTop()
          
    })
})