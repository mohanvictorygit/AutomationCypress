class LoginPage {
     visit() {
        cy.visit('/customer/account/login/');
    }

     login(email, password) {
        cy.get('#email').type(email);
        cy.get('#pass').type(password);
        cy.xpath("(//*[@id='send2'])[1]").click();
    }

     verifyLogin(firstName) {
        
        //cy.get('li.greet.welcome').text.should('contain', 'Welcome, ${firstName}');
    }
}

export default new LoginPage();
