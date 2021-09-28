/// <reference types="cypress" />

describe('Testes Cliente', ()=> {

    it('Deve criar um usuario do tipo cliente', ()=> {
        cy.visit('http://localhost:3000/');

        cy.get('#mat-input-0').type('Cliente2' + Math.round(Math.random() * (100 - 1) + 1));
        cy.get('#mat-input-1').type('Cliente2');
        cy.get('.mat-select-arrow').click();
        cy.get('#mat-option-0 > .mat-option-text').click();

        cy.route('POST', '**/registrar').as('postClient');

        cy.get('#mat-register').click();

        cy.wait('@postClient').then((xhr) => {
            expect(xhr.status).be.eq(200);
            expect(xhr.response.body).has.property('token');
            expect(xhr.response.body.token).is.not.null;
            expect(xhr.response.body).has.property('user');
            expect(xhr.response.body.user).is.not.null;
        });
    });

    it('Deve acessar a plataforma com um usuario do tipo cliente', ()=> {
        const cliente = Cypress.env('createdCliente')

        cy.visit('http://localhost:3000/');

        cy.get('#mat-input-0').type(cliente.usuario);
        cy.get('#mat-input-1').type(cliente.senha);
        cy.get('.mat-select-arrow').click();
        cy.get('#mat-option-0 > .mat-option-text').click();

        cy.get('#mat-login').click();
    });

    it('Deve acessar a plataforma com um usuario do tipo cliente e realizar a adição de um item no carrinho', ()=> {
        const cliente = Cypress.env('createdCliente')

        cy.visit('http://localhost:3000/');

        cy.get('#mat-input-0').type(cliente.usuario);
        cy.get('#mat-input-1').type(cliente.senha);
        cy.get('.mat-select-arrow').click();
        cy.get('#mat-option-0 > .mat-option-text').click();

        cy.get('#mat-login').click();

        cy.get('body > app-root > app-nav > mat-sidenav-container > mat-sidenav-content > app-list-prod > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-nome.mat-column-nome.ng-star-inserted')
            .then((element) => {
                const textLista = element.text();

                cy.get('body > app-root > app-nav > mat-sidenav-container > mat-sidenav-content > app-list-prod > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-adicionar.mat-column-adicionar.ng-star-inserted > button').click();
                cy.get('body > app-root > app-nav > mat-sidenav-container > mat-sidenav > div > mat-nav-list > a:nth-child(1) > div').click();
                cy.get('body > app-root > app-nav > mat-sidenav-container > mat-sidenav-content > app-compra > div:nth-child(1) > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-item.mat-column-item.ng-star-inserted')
                    .should((textCarrinho) => {
                        expect(textCarrinho.text()).to.eq(textLista);
                    });

            });
    });

    it('Deve realizar uma compra', ()=> {
        const cliente = Cypress.env('createdCliente')

        cy.visit('http://localhost:3000/');

        cy.get('#mat-input-0').type(cliente.usuario);
        cy.get('#mat-input-1').type(cliente.senha);
        cy.get('.mat-select-arrow').click();
        cy.get('#mat-option-0 > .mat-option-text').click();

        cy.get('#mat-login').click();

        cy.get('body > app-root > app-nav > mat-sidenav-container > mat-sidenav-content > app-list-prod > div > div:nth-child(3) > table > tbody > tr:nth-child(1) > td.mat-cell.cdk-cell.cdk-column-adicionar.mat-column-adicionar.ng-star-inserted > button').click();
        cy.get('body > app-root > app-nav > mat-sidenav-container > mat-sidenav > div > mat-nav-list > a:nth-child(1) > div').click();
                
        
        cy.get('.mat-footer-row > .cdk-column-cost')
            .then((fieldValor) => {
                const textValor = fieldValor.text();

                cy.get('[aria-label="Example icon-button with menu icon"] > .mat-button-wrapper > .mat-icon').click();
                cy.get(':nth-child(2) > .mat-focus-indicator').click();
                cy.get('[aria-label="Example icon-button with menu icon"] > .mat-button-wrapper > .mat-icon').click();
                cy.get('[routerlink="/cliente/transacoes"] > .mat-list-item-content').click();

                cy.get('.mat-expansion-panel-header-description')
                    .should((fieldValorCompra) => {
                        expect(fieldValorCompra.text()).contains(textValor);
                    })
            });
        
    });

});
