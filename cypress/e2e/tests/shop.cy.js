import ShopPage from '../../pageObjects/ShopPage'

before(function () {
  cy.fixture('userData.json').then((user) => {
    this.registeredEmail=user.email;
    //expect(data).to.have.property('registeredEmail');
  });

});

it('Places order with multiple products', () => {

  const randomEmail = `testuser_${Date.now()}@example.com`;
  cy.writeFile('cypress/fixtures/userData.json', { email: randomEmail });

  cy.fixture('products.json').then((data) => {
    const products = data.products; // Get product list

    if (!Array.isArray(products)) {
      throw new Error('Products data is not an array');
    }

    products.forEach(product => {
      ShopPage.addToCart(product.name, product.size, product.qty); // Use extracted data
    });

    ShopPage.proceedToCheckout();
    ShopPage.placeOrder(randomEmail,'John','Peter','Tech','123 Test Street','Suite101',
      'Austin','Texas','73301','United States','1234567890');
    //cy.get('.checkout-success').should('be.visible');
  });
});
