describe('Add Employee with login details', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible');
  });

  it('should be able to add a member with login details', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
    cy.get('.orangehrm-firstname').type('Edington');
    cy.get('.orangehrm-middlename').type('Doe');
    cy.get('.orangehrm-lastname').type('Smith');

    cy.get('.oxd-switch-input').click();

    cy.contains('Username').should('be.visible');


cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Edinburggg');

cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('alexa22Smith@#$');


cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('alexa22Smith@#$');

cy.contains('Save').click();
    // cy.contains('Successfully Saved').should('be.visible');
    // cy.contains('Personal Details').should('be.visible');

    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
    cy.contains('Logout').click();

    cy.get('input[name="username"]').type('Edinburggg');
    cy.get('input[name="password"]').type('alexa22Smith@#$');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible');

  
  });
});


