# AutomationCypress
Automation in Cypress

Website URL: **https://magento.softwaretestingboard.com/**

Created the project with POM Framework. 
**Page objects are maintainted in the named pageObjects folder under the “Cypress” folder,** which is used to store  
 loginPage.js,RegistrationPage.js and ShopPage.js.

The RegistrationPage.js consists of all the methods that are related to the RegistartionPage of the website. 
The Login.js consists of all the methods that are related to the Login of the website. 
The ShopPage.js consists of all the methods that are related to the ShopPage of the website. 

Using the “e2e” folder to layer out the resources related to testing. Creating folder named “tests” inside the e2e folder, which is used to store actual test cases written in Cypress.

**All the Test cases are available under the e2e/tests for the respective pages:**
The below script are created under the e2e/tests folder:
1. registration.cy.js
2. login.cy.js
3. shop.cy.js
4. wishlist.cy.js
5. validateproductdetails.cy.js


**All the Test data are maintained in the Fixture file**
The Fixture data is loaded, while running the test cases.
In the Cypress/fixtures folders below fixture files created as part of the project.
1. products.json
   Test data for the products are stored in the JSON path and it is fetched dynamically during the execution.
2. testData.json
   Test data for the First Name, Last Name and Password are available in the testData.JSON file and it is fetched during the registartion test cases.
3. userData.json
   Created the custom random email address to fecth the email address uniquely and used whereever it is required.
   Test data for the Email Address is stored in the userData.JSON file.
   
   
**Repositary Name**: AutomationCypress
**Test Case (A):** Registration on flow with login validation 
**Test Case (B):** Place order with multiple products (apply price calculation on checks) 
**Test Case (C):** Add products in Wishlist and checkout from wishlist 
**Test Case (D):** Search and validate results

**Reports:**
Reports are generated using the **mochawesome** Reports.

**Configuration:**
All the project related config is stored in the cypress.config.js

**Packages.JSON**
All the external npm packages that tests need to run are specified in the package. json file.


