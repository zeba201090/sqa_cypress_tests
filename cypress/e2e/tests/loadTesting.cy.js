describe('Load Test', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('be.visible'); 
    });

    it('should simulate multiple users accessing dashboard', () => {
        const numUsers = 100; 
    
        for (let i = 0; i < numUsers; i++) {
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    
          cy.log(`User ${i + 1} loaded the dashboard`);
        }
      });
});