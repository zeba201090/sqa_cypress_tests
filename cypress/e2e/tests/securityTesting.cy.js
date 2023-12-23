describe('Security Test', () => {
    
      it('checks for XSS vulnerability', () => {
        const maliciousInput = '<script>alert("XSS Attack!");</script>';
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type(maliciousInput);
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.log('XSS Attack!');
      });
    });