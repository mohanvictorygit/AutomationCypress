class ShopPage {
    addToCart(productName, size, qty) {
      cy.visit('/'); // Visit homepage
      cy.get('.product-item').contains(productName).click(); // Find product by name
      //cy.get('.swatch-option[aria-label="M"]').click({ force: true }); // Select size
      cy.get('.swatch-attribute-options').first().click(); // Select a size/color
      cy.get('#product-addtocart-button').should('not.be.disabled').click();
      cy.get('.swatch-attribute.color .swatch-option').first().click();


      cy.get('#qty').clear().type(qty); // Set quantity

      cy.get('#product-addtocart-button',{ timeout: 10000 }).click({ force: true }); // Click Add to Cart
    }
  

    proceedToCheckout() {
      cy.visit('/checkout/cart/'),{ timeout: 30000 };
      
      //cy.get('.checkout-methods-items button').filter(':visible').click({ force: true });
      cy.get('.checkout-methods-items button').first().click();

    
    }
  
    placeOrder(Email,FName,LName,Company,Street1,Street2,
      City,Region,PostCode,Country,Telephone) {

  
      
          // Wait for the checkout form to load
         // cy.get('.checkout').click();
          //cy.get('#checkout-step-shipping', { timeout: 10000 }).should('be.visible');
      
          cy.visit('/checkout/#shipping'),{ timeout: 30000 }; 
          

          // Enter shipping details
          
          
            cy.get('input#customer-email:visible').should('exist')
            .click({ force: true },{ timeout: 30000 })
            .type(Email);
  
            cy.get('input[name="firstname"]').type(FName);
            cy.get('input[name="lastname"]').type(LName);
            cy.get('input[name="company"]').type(Company);
            cy.get('input[name="street[0]"]').type(Street1);
            cy.get('input[name="street[1]"]').type(Street2);
            cy.get('input[name="city"]').type(City);
            cy.get('select[name="region_id"]').select(Region); 
            cy.get('input[name="postcode"]').type(PostCode);
            cy.get('select[name="country_id"]').select(Country);
            cy.get('input[name="telephone"]').type(Telephone);
        

          
          
          // Select shipping method
          cy.get('input[name="ko_unique_1"]').check(); // Adjust selector if needed
      
          // Click the "Next" button to proceed
          cy.get('.button.action.continue').click();
      
          // Verify that the Payment section loads
          cy.get('#checkout-step-payment', { timeout: 10000 }).should('be.visible');

          cy.get('.action.primary.checkout', { timeout: 20000 }).should('be.visible')
          .click({ force: true });
       
    }
  }
  
  export default new ShopPage();
  