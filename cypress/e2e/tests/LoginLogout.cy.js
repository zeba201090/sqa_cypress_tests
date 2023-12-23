describe('Login', () => {
    
  it('should successfully log in', () => {
      cy.visit('http://localhost/orangehrm-5.5/web/index.php/auth/login'); 
      cy.get('input[name="username"]').type('rodoshi');
      cy.get('input[name="password"]').type('orange@HRM22');
      
     
      cy.get('button[type="submit"]').click();
  
      cy.url().should('include', '/dashboard');

    });

    
    it('logs out successfully', () => {

      cy.get('.oxd-userdropdown-icon').click();
      cy.contains('Logout').click();
      cy.url().should('include', '/index.php/auth/login');
      cy.contains('LOGIN Panel').should('be.visible');
    });

  });
  