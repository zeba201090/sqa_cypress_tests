describe('Performance Test', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // Replace with the actual URL
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible'); 
  });

    it('should measure dashboard load time', () => {
      const startTime = new Date().getTime();
    
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    
      const endTime = new Date().getTime();
      const loadTime = endTime - startTime;
        
      cy.log(`Dashboard load time: ${loadTime}ms`);
    });

});
