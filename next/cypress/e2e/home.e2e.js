describe('home page e2e test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should exist the register new client button', () => {
    cy.get('[data-testid="register-btn"]').should('exist');
  });
});
