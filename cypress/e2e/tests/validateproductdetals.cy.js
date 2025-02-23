describe('Test Case (D): Search and Validate Results', () => {
  
    beforeEach(() => {
      // // Step 1: Visit Homepage
      cy.visit('https://magento.softwaretestingboard.com/'); 
      
    });
  
    it('Should search for a product and validate results', () => {
      const searchTerm = 'Radiant Tee'; // Change search term as needed
  
      // Step 2: Enter search term in the search box
      //cy.get('#search').should('be.visible').type(`${searchTerm}{enter}`);
      cy.xpath('//*[@id="search"]').should('be.visible').type(`${searchTerm}{enter}`);
  
      // Step 3: Validate the search results page loads
      cy.url().should('include', 'catalogsearch/result'); 
      cy.get('.page-title').should('contain.text', searchTerm); 
  
      // Step 4: Ensure at least one search result appears
      cy.get('.products-grid .product-item').should('have.length.greaterThan', 0);
  
      // Step 5: Validate first product details
      cy.get('.products-grid .product-item').first().within(() => {
        cy.get('.product-item-name').should('contain.text', searchTerm);
        cy.get('.price').should('be.visible'); // Ensure price is displayed
      });
    });
  });
  