class RegistrationPage {
        visit() {
        cy.visit('/customer/account/create/');
    }

        fillRegistrationForm(firstName, lastName, email, password) {
        cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#email_address').type(email);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);
    }

     submit() {
        cy.get('button[title="Create an Account"]').click();
    }

    verifySuccess() {
        
       // cy.xpath('//div[@class="message-success success message"]'),{ timeout: 10000 }.text.should('contain', 'Thank you for registering with Main Website Store.');
        //cy.get('.message-success'),{ timeout: 10000 }.should('contain', 'Thank you for registering with Main Website Store.');
    
    }
}

export default new RegistrationPage();  
