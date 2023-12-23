describe('Post Status Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost/orangehrm-5.5/web/index.php/buzz/viewBuzz');
      cy.get('input[name="username"]').type('rodoshi');
      cy.get('input[name="password"]').type('orange@HRM22');
      cy.get('button[type="submit"]').click();
     
    });

    it('Should be able to post a status', ()=>{

       
        cy.contains('Buzz Newsfeed').should('be.visible');
        const statusMessage = "Hello, Cypress! Good Morning.";
          cy.get('.oxd-buzz-post-input').type(statusMessage);
          cy.get('button[type="submit"]').click();

        

    });
});
