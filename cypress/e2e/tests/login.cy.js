import LoginPage from '../../pageObjects/LoginPage';

describe('User Login', function () {
    before(function () {
        cy.fixture('testData.json').then((data) => {
            this.testData = data;
        });

         // Read registered user credentials from previous test
         cy.fixture('userData.json').then((user) => {
            this.registeredEmail = user.email;
        });
    });
 

    it('should log in with a registered user', function () {

        cy.log("Logging in with email:", this.registeredEmail);
        cy.log("Using password:", this.testData.Password);
         LoginPage.visit();
         LoginPage.login(this.registeredEmail, this.testData.Password);
         LoginPage.verifyLogin(this.testData.FirstName);

         
    });
});
