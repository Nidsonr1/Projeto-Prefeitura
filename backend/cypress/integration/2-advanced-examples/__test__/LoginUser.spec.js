/// <reference types="Cypress" />

const faker = require('faker/locale/pt_BR');
const name = faker.name.findName();
const email = faker.internet.email();
const password = faker.random.alphaNumeric("5")


describe('Login a User', () => {
  it("should be able to login a user", () => {
    cy.request({
      method: 'POST',
      url: '/user/create',
      body: {
        name: name,
        email: email,
        password: password
      },
      failOnStatusCode: false
    }).then((xhr) => {
      expect(xhr.status).to.equal(201)
    });

    cy.request({
      method: 'POST',
      url: '/user/login',
      body: {
        email: email,
        password: password
      }
    }).then((xhr) => {
      expect(xhr.status).to.equal(200);
      expect(xhr.body.name).to.equal(name);
    })
  });

  it("should not be able to login a user if email is not register", () => {
    cy.request({
      method: 'POST',
      url: '/user/login',
      body: {
        email: 'testeNãoExiste@contato.com',
        password: password
      },
      failOnStatusCode: false
    }).then((xhr) => {
      expect(xhr.status).to.equal(404);
      expect(xhr.body.error).to.equal("Email inválido");
    });
  });

  it("should not be able to login a user if email is not register", () => {
    cy.request({
      method: 'POST',
      url: '/user/login',
      body: {
        email: email,
        password: 'passwordWrong'
      },
      failOnStatusCode: false
    }).then((xhr) => {
      expect(xhr.status).to.equal(400);
      expect(xhr.body.error).to.equal("Senha Inválida");
    });
  });
});