import RegistrationPage from '../../pageObjects/RegistrationPage';  

describe('User Registration', function () {
    before(function () {
        cy.fixture('testData.json').then(function(data) {
            this.testData = data;
        });
    });

    it('Registers a new user successfully', function () {
        const randomEmail = `testuser_${Date.now()}@example.com`;
        cy.writeFile('cypress/fixtures/userData.json', { email: randomEmail });

        RegistrationPage.visit();  // 
        RegistrationPage.fillRegistrationForm(this.testData.LastName,this.testData.LastName,randomEmail,this.testData.Password
           
        );
        RegistrationPage.submit();
        RegistrationPage.verifySuccess();
    });
});
