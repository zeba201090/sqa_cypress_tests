describe('Search and Filter', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible'); 
  });


  it('should be able to add a member', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
    cy.get('.orangehrm-firstname').type('Anita');
    cy.get('.orangehrm-middlename').type('Doe');
    cy.get('.orangehrm-lastname').type('Smith');
    cy.get('button[type="submit"]').click();

    cy.contains('Successfully Saved').should('be.visible');
    cy.contains('Personal Details').should('be.visible');
  });

  it('should search employees by name', () => {
    cy.contains('PIM').click();
    cy.contains('Employee List').click();

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input').type('Anita Doe');

    cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true });


    cy.contains('Anita Doe').should('be.visible');



  });

  it('should search employees by Id', () => {
    cy.contains('PIM').click();
    cy.contains('Employee List').click();

    cy.get(':nth-child(2) > .oxd-input').type('0285');

    cy.get('.oxd-form-actions > .oxd-button--secondary').click({ force: true });


    cy.contains('Shiva Kani').should('be.visible');

    

  })

 

});
