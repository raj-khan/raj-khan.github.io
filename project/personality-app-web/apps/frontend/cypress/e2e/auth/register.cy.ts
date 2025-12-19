describe('User Registration', () => {
  beforeEach(() => {
    cy.visit('/auth/register');
  });

  it('should display registration form', () => {
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="password"]').should('be.visible');
    cy.get('input[name="confirmPassword"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should show validation errors for empty fields', () => {
    cy.get('button[type="submit"]').click();
    cy.contains('required').should('be.visible');
  });

  it('should show error for invalid email format', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('Password123!');
    cy.get('input[name="confirmPassword"]').type('Password123!');
    cy.get('button[type="submit"]').click();

    cy.contains('valid email').should('be.visible');
  });

  it('should show error for weak password', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('weak');
    cy.get('input[name="confirmPassword"]').type('weak');
    cy.get('button[type="submit"]').click();

    cy.contains('at least 8 characters').should('be.visible');
  });

  it('should show error when passwords do not match', () => {
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('Password123!');
    cy.get('input[name="confirmPassword"]').type('DifferentPassword123!');
    cy.get('button[type="submit"]').click();

    cy.contains('do not match').should('be.visible');
  });

  it('should successfully register a new user', () => {
    const uniqueEmail = `test${Date.now()}@example.com`;

    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type(uniqueEmail);
    cy.get('input[name="password"]').type('Password123!');
    cy.get('input[name="confirmPassword"]').type('Password123!');
    cy.get('button[type="submit"]').click();

    // Should redirect to dashboard or show success message
    cy.url().should('not.include', '/auth/register');
  });

  it('should show error for existing email', () => {
    // Assuming there's already a user with this email
    cy.get('input[name="name"]').type('Test User');
    cy.get('input[name="email"]').type('existing@example.com');
    cy.get('input[name="password"]').type('Password123!');
    cy.get('input[name="confirmPassword"]').type('Password123!');
    cy.get('button[type="submit"]').click();

    cy.contains('already exists').should('be.visible');
  });
});
