describe('User Login', () => {
  beforeEach(() => {
    cy.visit('/auth/login');
  });

  it('should display login form', () => {
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should show validation errors for empty fields', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('required').should('be.visible');
  });

  it('should show error for invalid credentials', () => {
    cy.get('input[name="email"]').type('wrong@example.com');
    cy.get('input[name="password"]').type('WrongPassword123!');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid').should('be.visible');
  });

  it('should successfully login with valid credentials', () => {
    // First register a user
    const uniqueEmail = `test${Date.now()}@example.com`;
    cy.register('Test User', uniqueEmail, 'Password123!');

    // Clear storage and visit login page
    cy.clearLocalStorage();
    cy.visit('/auth/login');

    // Login with the registered user
    cy.get('input[name="email"]').type(uniqueEmail);
    cy.get('input[name="password"]').type('Password123!');
    cy.get('button[type="submit"]').click();

    // Should redirect to dashboard
    cy.url().should('not.include', '/auth/login');
  });

  it('should navigate to register page', () => {
    cy.contains('Sign up').click();
    cy.url().should('include', '/auth/register');
  });
});
