/// <reference types="Cypress" />

const faker = require('faker/locale/pt_BR');
const question = faker.lorem.sentence(3)


describe('Create a Question', () => {
  it("should be able to create a question if does not already exist", () => {
    cy.request({
      method: 'POST',
      url: '/questions/create',
      body: {
        desciption: question,

      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(201)
    })
  });

  it("should not be able to create a question if does exist", () => {
    cy.request({
      method: 'POST',
      url: '/questions/create',
      body: {
        desciption: question,
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(400)
      expect(response.body.error).to.equal("Questão já inserida")
    })
  });
});