/// <reference types="cypress" />

context('Login ', () => {


    it('Attempt login', () => {

        const submitButton = 'form > .btn';
        const alertMessage = '.alert';

        const wrongUsernameMessage = 'Wrong username or password.'
        const maxAttemptsReachedMessage = 'Max attempts reached! Please try again later!'
        const forbiddenMessage = '403 Forbidden'

        cy.visit('https://smsbump.com/users/login')

        // ignore uncaught exceptions
        Cypress.on('uncaught:exception', (err) => {
        return false
        })

        cy.get('#email').type('itsme@gmail.bg');
        cy.get('#password').type('123456');

        cy.get(submitButton).click();

        
        cy.get(alertMessage).should('contain', wrongUsernameMessage);

        //To reach 3 attempts
        for (let index = 0; index < 3; index++) {
            cy.get(submitButton).click();
            cy.get(alertMessage).should('contain', wrongUsernameMessage);
        }

        cy.get(submitButton).click();
        cy.get(alertMessage).should('contain', maxAttemptsReachedMessage);

        //Much easier to verify with api requests/response verification
        for (let index = 0; index < 21; index++) {
            cy.get(submitButton).click();
            cy.get(alertMessage).should('contain', maxAttemptsReachedMessage);
        }
        
        cy.get(submitButton).click();
        cy.get('h1').should('contain', forbiddenMessage);
        
    })
})