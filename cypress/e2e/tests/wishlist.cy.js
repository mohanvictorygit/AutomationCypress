
describe('Magento Checkout - Add to Wishlist and Checkout', () => {
    before(() => {
      // Visit Magento login page
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
      
      // Log in to the account
      cy.get('#email').type('testuser@example.com');
      cy.get('#pass').type('Test@1234');
      cy.get('#send2').click();
      
      // Verify successful login
      //cy.get('.logged-in').should('contain', 'Welcome');
    });
  
    it('Adds a product to Wishlist and checks out from Wishlist', () => {
      // Visit product page
      cy.visit('https://magento.softwaretestingboard.com/radiant-tee.html');
  
      // Add product to Wishlist
      cy.get('.action.towishlist').click();
  
      // Wait for success message
      cy.get('.message-success').should('contain', 'added to your Wish List');
  
      // Go to Wishlist
      cy.visit('https://magento.softwaretestingboard.com/wishlist/');
  
      // Verify item in Wishlist
      cy.get('.product-item-details').should('contain', 'Radiant Tee');
  
      // Move product from Wishlist to Cart
      //cy.get('.towishlist + .tocompare + .tocart').click();
      cy.get('.swatch-attribute-options').first().click(),{ timeout: 20000 }; // Select a size/color
      cy.get('#product-addtocart-button').should('not.be.disabled').click(),{ timeout: 20000 };
      cy.get('.swatch-attribute.color .swatch-option').first().click(),{ timeout: 20000 };
      cy.xpath('//*[@id="wishlist-sidebar"]/li[1]/div/div/div[2]/div[1]/button/span').click(),{ timeout: 20000 };
  
      // Go to Cart
      cy.get('.action.showcart').click();
      cy.get('.viewcart').click();
  
      // Proceed to Checkout
      cy.get('.checkout-methods-items button').click();
  
      // Wait for Checkout Page
      cy.get('#checkout-step-shipping', { timeout: 20000 }).should('be.visible');
  
      // Fill in Shipping Details
      cy.get('input[name="firstname"]').type('John');
      cy.get('input[name="lastname"]').type('Doe');
      cy.get('input[name="street[0]"]').type('123 Main St');
      cy.get('input[name="city"]').type('Dallas');
      cy.get('select[name="region_id"]').select('Texas');
      cy.get('input[name="postcode"]').type('75001');
      cy.get('input[name="telephone"]').type('1234567890');
  
      // Select Shipping Method
      cy.get('input[name="ko_unique_1"]').check(); 
  
      // Click "Next"
      cy.get('.button.action.continue').click();
  
      // Wait for Payment Page
      cy.get('#checkout-step-payment', { timeout: 20000 }).should('be.visible');
  
      // Place the Order
      cy.get('.action.primary.checkout').click();
  
      // Validate Order Confirmation
      cy.get('.checkout-success', { timeout: 20000 }).should('contain', 'Thank you for your purchase!');
    });
  });
  