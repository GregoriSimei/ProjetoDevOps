// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createFarma', () => {
    const usuario = 'Farmacia' + Math.round(Math.random() * (500 - 1) + 1);
    const bodyReq = {
        usuario: usuario,
        senha: 'farmacia',
        tipo: 'farmacia'
    };

    cy.request({
        method: 'POST',
        url: 'http://localhost:1234/registrar',
        body: bodyReq
    }).then(response => {
        expect(response.status).be.eq(200);
        expect(response.body).has.property('token');
        expect(response.body.token).is.not.null;
        expect(response.body).has.property('user');
        expect(response.body.user).is.not.null;

        Cypress.env('createdFarma', bodyReq);
    });
});

Cypress.Commands.add('createCliente', ()=> {
    const usuario = 'cliente' + Math.round(Math.random() * (500 - 1) + 1);
    const bodyReq = {
        usuario: usuario,
        senha: 'cliente',
        tipo: 'cliente'
    };

    cy.request({
        method: 'POST',
        url: 'http://localhost:1234/registrar',
        body: bodyReq
    }).then(response => {
        expect(response.status).be.eq(200);
        expect(response.body).has.property('token');
        expect(response.body.token).is.not.null;
        expect(response.body).has.property('user');
        expect(response.body.user).is.not.null;

        Cypress.env('createdCliente', bodyReq);
    });
});