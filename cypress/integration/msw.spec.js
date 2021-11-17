describe(('Running a test using Mock Service Worker in Cypress'), () => {
    before(() => {
        cy.visit('/')
    })
    it('Validates the UI renders when a successful API response is received', () => {
        cy.findByLabelText('Pick A City:').should('be.visible')
        cy.findByRole('heading', {level: 2}).should('be.visible').should('have.text', 'Memphis')

        //we know that this will be the temperature and description because its the data our mock provides
        cy.findByTestId('temperatureWrapper').should('have.text', 'Temperature: 66℉').should('be.visible');
        cy.findByTestId('weatherDescription').should('have.text', 'Description: scattered clouds').should('be.visible')

        //to prove this point we can select another city and expect the same weather data response
        cy.get('select').select('Amsterdam')
        cy.findByRole('heading', {level: 2}).should('be.visible').should('have.text', 'Amsterdam')
        
        //we know that this will be the temperature and description because its the data our mock provides
        cy.findByTestId('temperatureWrapper').should('have.text', 'Temperature: 66℉').should('be.visible');
        cy.findByTestId('weatherDescription').should('have.text', 'Description: scattered clouds').should('be.visible')
    })
})