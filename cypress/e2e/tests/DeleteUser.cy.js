import 'cypress-file-upload';


describe('Delete employee', () => {
    beforeEach(() => {
      cy.visit('http://localhost/orangehrm-5.5/web/index.php/auth/login'); 
      cy.get('input[name="username"]').type('rodoshi');
      cy.get('input[name="password"]').type('orange@HRM22');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('be.visible'); 
    });

    

    it('deletes an employee from the table', () => {
      cy.visit('http://localhost/orangehrm-5.5/web/index.php/pim/viewEmployeeList');
  
      cy.get(".table-view tbody tr td:nth-child(2)").contains("Rafaila Rahman").click();
  
      cy.contains("Delete").click();
  
      cy.contains("Are you sure you want to delete this user?").click();
  
      cy.contains("Rafaila Rahman").should("not.exist");
    });
    

    
  });
  