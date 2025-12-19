/// <reference types="cypress" />

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/auth/login`,
    body: {
      email,
      password,
    },
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('data');
    expect(response.body.data).to.have.property('accessToken');

    // Store token in localStorage
    window.localStorage.setItem('accessToken', response.body.data.accessToken);
  });
});

Cypress.Commands.add('register', (name: string, email: string, password: string) => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/auth/register`,
    body: {
      name,
      email,
      password,
      confirmPassword: password,
    },
  }).then((response) => {
    expect(response.status).to.eq(201);
    expect(response.body).to.have.property('data');
    expect(response.body.data).to.have.property('accessToken');

    // Store token in localStorage
    window.localStorage.setItem('accessToken', response.body.data.accessToken);
  });
});

export {};
