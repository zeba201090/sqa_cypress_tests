describe('Invalid Login Test', () => {

    it('displays an error message for invalid login', () => {
        cy.visit('http://localhost/orangehrm/web/index.php/auth/login');
  
        cy.get('input[name="username"]').type('invalideuser');
        cy.get('input[name="password"]').type('invalidpass');
        cy.get('button[type="submit"]').click();
    
        cy.get('.oxd-alert--error')
          .should('be.visible')
          .and('contain', 'Invalid credentials');
      });
    });