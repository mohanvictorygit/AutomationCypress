const { defineConfig } = require('cypress');


module.exports = defineConfig({
  e2e: {
    specPattern: 
    [
      "cypress/e2e/tests/registration.cy.js",
      "cypress/e2e/tests/login.cy.js",
      "cypress/e2e/tests/shop.cy.js",
      "cypress/e2e/tests/wishlist.cy.js",
      "cypress/e2e/tests/validateproductdetals.cy.js"
    
      
    ],
    experimentalRunAllSpecs: true,
     // Ensures session data persists between tests
    //'cypress/e2e/tests/*.cy.js',
    baseUrl: 'https://magento.softwaretestingboard.com',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true
    }
    
  }
  
});
