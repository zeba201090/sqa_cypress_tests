describe('Employee Profile Update Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost/orangehrm-5.5/web/index.php/auth/login'); 
      cy.get('input[name="username"]').type('rodoshi');
      cy.get('input[name="password"]').type('orange@HRM22');
      cy.contains('Dashboard').should('be.visible');
    });
      
    it('edits an employee\'s details', () => {
      cy.visit('http://localhost/orangehrm-5.5/web/index.php/pim/viewEmployeeList');
  
      cy.contains('alexa doea').click();
  
      cy.get('.orangehrm-firstname').type('Sami');
      cy.get('.orangehrm-lastname').type('Nayeem');
      cy.contains('Save').click();
      cy.contains('Save').click();
    });
  });
  