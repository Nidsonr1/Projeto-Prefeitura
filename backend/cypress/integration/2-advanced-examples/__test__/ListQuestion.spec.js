/// <reference types="Cypress" />

describe('List a Question', () => {
  it("should be able to list the questions", () => {
    cy.request({
      method: 'GET',
      url: '/questions/',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.equal(200)
    })
  });

  
});