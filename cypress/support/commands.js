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

Cypress.Commands.add('login', (email, password) => {
  cy.contains('Log in').click();

  if(email){
    cy.get('#mail').type(email);
  };
  if(password){
    cy.get('#pass').type(password);
  };

  cy.contains('Submit').click();
});

Cypress.Commands.add('descriptionNewBook', () => {
  cy.get('#title').type('War and Peace');
  cy.get('#description').type('Novel');
  cy.get('#authors').type('Tolstoi');
  cy.contains('Submit').click();
});

Cypress.Commands.add('emailOrPassword', (value) => {
  if(value === '#mail'){
    cy.get('#mail').then((i) => {
      expect(i[0].checkValidity()).to.be.false;
      expect(i[0].validationMessage).to.be.eql('Заполните это поле.');
    });
  };
  if(value === '#pass'){
    cy.get('#pass').then((i) => {
      expect(i[0].checkValidity()).to.be.false;
      expect(i[0].validationMessage).to.be.eql('Заполните это поле.');
    });
  };
});

Cypress.Commands.add('screenSize', (size) => {
  if (Cypress._.isArray(size)) {
    cy.viewport(size[0], size[1])
  } else {
    cy.viewport(size)
  }
});