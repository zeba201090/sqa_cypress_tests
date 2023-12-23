describe("Generate Report Test", () => {
    it("should generate a report from OrangeHRM", () => {
      cy.visit("https://opensource-demo.orangehrmlive.com");
      
      // Click the login link
      cy.contains("Login").click();
  
      // Fill in the login inputs
      fillInputs({
        username: "admin",
        password: "admin123",
      });
  
      // Click the login button
      cy.get('.oxd-button').click();
  
      cy.contains("Dashboard").should("be.visible");
  
    
  
      cy.contains("PIM").click();
  
      cy.contains("Reports").click();

      cy.get('.orangehrm-header-container > .oxd-button').click();

      cy.get(':nth-child(2) > .oxd-input').type('sample testing report 2');


      // cy.get(':nth-child(3) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
      
      // cy.contains('Employee Name').click();
      
      
      cy.get(':nth-child(3) > .oxd-grid-4 > .orangehrm-report-criteria > :nth-child(2) > :nth-child(2) > .oxd-icon-button').click();

      cy.get(':nth-child(5) > .oxd-grid-4 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
      
      cy.contains('Personal').click();
      
      
      cy.get(':nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > .oxd-input-field-bottom-space > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input')
      .click();
      cy.contains('Employee Id').click();
      
      
      
      cy.get(':nth-child(5) > .oxd-grid-4 > .orangehrm-report-criteria > :nth-child(2) > :nth-child(2) > .oxd-icon-button').click();

      cy.get('.oxd-switch-input').click();

      
      cy.contains('Save').click();

      cy.contains('Successfully Saved').should('be.visible');
      cy.contains('sample testing report').should('be.visible');



      

  //     cy.get(':nth-child(2) > .oxd-input').type('Report for testing');

  //     // Select the filters for the report.
  //     selectOption("Employee Name", "John Doe");
  //     selectOption("Department", "IT");
  //     selectOption("Job Title", "Software Engineer");
  
  //     // Click the generate report button.
  //     cy.contains("Generate Report").click();
  
  //     // Verify that the report is generated.
  //     cy.contains("Employee List Report").should("exist");
   });
   });
  
  function fillInputs(inputs) {
    cy.wrap(Object.entries(inputs)).each(([key, value]) => {
      cy.get(`input[name="${key}"]`).clear().type(value);
    });
  }
  
  // function clickLink(linkText) {
  //   cy.contains(linkText).click();
  // }
  
  // function selectOption(selectLabel, optionValue) {
  //   cy.get(`label:contains('${selectLabel}')`).next('select').select(optionValue);
  // }
  