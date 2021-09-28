/// <reference types="cypress" />

describe('Testes Farmacia', ()=> {

    it('Deve criar um usuario do tipo farmacia', ()=> {
        cy.visit('http://localhost:3000/');

        cy.get('#mat-input-0').type('Farmacia2' + Math.round(Math.random() * (100 - 1) + 1));
        cy.get('#mat-input-1').type('Farmacia');
        cy.get('.mat-select-arrow').click();
        cy.get('#mat-option-1 > .mat-option-text').click();

        cy.route('POST', '**/registrar').as('postFarma');

        cy.get('#mat-register').click();

        cy.wait('@postFarma').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('token');
            expect(xhr.response.body.token).is.not.null;
            expect(xhr.response.body).has.property('user');
            expect(xhr.response.body.user).is.not.null;
        });
    });

    it('Deve acessar a plataforma com um usuario do tipo farmacia', ()=> {
        const farma = Cypress.env('createdFarma')

        cy.visit('http://localhost:3000/');

        cy.get('#mat-input-0').type(farma.usuario);
        cy.get('#mat-input-1').type(farma.senha);
        cy.get('.mat-select-arrow').click();
        cy.get('#mat-option-1 > .mat-option-text').click();

        cy.get('#mat-login').click();
    });

});