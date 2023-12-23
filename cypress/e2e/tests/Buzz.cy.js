describe('Like post and upload photo', () => {
    before(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('be.visible');
    });

    it('Should be able to like a status', ()=>{
      
        cy.get('.oxd-sheet').each((post, index) => {
          const postText = post.find('.orangehrm-buzz-post-body-text').text();
          const timestamp = post.find('.orangehrm-buzz-post-time').text();
          
          cy.log(`Post ${index + 1}: ${postText} - ${timestamp}`);
        });
          
      });
  
      // File Upload
  
      it('adds an employee with an image', () => {
        cy.contains('Buzz').click();
        cy.contains('Share Photos').click();
      
        cy.fixture('profile.jpg', 'base64').then((fileContent) => {
          cy.get('.orangehrm-photo-upload-area > .oxd-icon')
            .attachFile({
              fileContent,
              fileName: 'profile.jpg',
              mimeType: 'image/jpg'
            });
        });
      
        cy.get('form').submit();
      
        // Confirm the photo is visible
       cy.should('have.attr', 'src').and('include', 'profile.jpg');
       
      
      });

    });