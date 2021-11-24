/// <reference types="Cypress" />

const faker = require('faker/locale/pt_BR');
const name = faker.name.findName();
const email = faker.internet.email();
const password = faker.random.alphaNumeric("5")


describe('Create a User', () => {
  it("should be able to create a user if does not already exist", () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3333/user/create',
      body: {
        name: name,
        email: email,
        password: password
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(201)
    })
  });

  it("should not be able to create a user if does exist", () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3333/user/create',
      body: {
        name: name,
        email: email,
        password: password
      },
      failOnStatusCode: false
    }).then((xhr) => {
      expect(xhr.status).to.equal(400)
      expect(xhr.body.error).to.equal("Usuário já cadastrado")
    })
  });
});