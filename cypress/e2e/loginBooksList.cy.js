const sizes = ['iphone-5', 'macbook-15'];

describe('testing the library', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  sizes.forEach((size) => {
  it(`visible page, screen ${size}`, () => { 
    cy.screenSize(size);
    cy.contains('Books list').should('be.visible');
  });

  it(`login email and password, screen ${size}`, () => {
    cy.screenSize(size);
    cy.login('test@test.com', 'test');
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
  });

  it(`add new book, screen ${size}`, () => {
  cy.screenSize(size);
    cy.login('test@test.com', 'test'); 
    cy.contains('Add new').click();
    cy.descriptionNewBook();
    cy.contains('War and Peace').should('be.visible');
  });

  it(`add book to favorite, screen ${size}`, () => {
  cy.screenSize(size);
    cy.login('test@test.com', 'test');
    cy.contains('Add to favorite').click();
    cy.contains('Favorites').click();
    cy.contains('War and Peace').should('be.visible');
  });

  it(`remove books from favorites, screen ${size}`, () => {
  cy.screenSize(size);
    cy.login('test@test.com', 'test');
    cy.contains('Favorites').click();
    cy.contains('Delete from favorite').click();
    cy.contains('Please add some book to favorit on home page!').should('be.visible');
  });

  it(`see download book, screen ${size}`, () => {
  cy.screenSize(size);
    cy.login('test@test.com', 'test');
    cy.contains('War and Peace').click();
    cy.contains('Dowload book').should('be.visible');
  });

  context("negative test", () => {

  it(`login negative email, screen ${size}`, () => {
  cy.screenSize(size);
    cy.login(null, 'test');
    cy.emailOrPassword('#mail');
  });

  it(`login negative password, screen ${size}`, () => {
  cy.screenSize(size);
    cy.login('test@test.com', null);
    cy.emailOrPassword('#pass');
  });
  });
});
});