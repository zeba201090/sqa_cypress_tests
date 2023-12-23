describe('Leave Application', () => {
  beforeEach(() => {

    cy.visit('http://localhost/orangehrm-5.5/web/index.php/auth/login');
    cy.get('input[name="username"]').type('rodoshi');
    cy.get('input[name="password"]').type('orange@HRM22');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible'); 
  });

  it('should add leave entitlements to multiple employee', () => {
    cy.contains('Leave').click();
    cy.contains('Entitlements').click();
    cy.contains('Add Entitlements').click();
    cy.contains('Multiple Employees').click();

    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
    cy.get('.oxd-select-dropdown > :nth-child(2)').click();
    cy.get(':nth-child(2) > .oxd-input').type('5');


   
    cy.contains('Save').click();
    cy.get(':nth-child(6) > .oxd-form-actions > .oxd-button--secondary').click();

    cy.contains('Success').should('be.visible');
  });
});


