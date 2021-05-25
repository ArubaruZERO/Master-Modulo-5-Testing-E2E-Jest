describe('Login form specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });
  it('should show an alert with a message when type invalid credentials', () => {
    // Arrage
    const user = 'admin';
    const password = '1234';
    cy.on('windows:alert', cy.stub().as('alertStub'));

    //Act
    cy.visit('/');
    cy.findByLabelText('User').as('userInput');
    cy.findByLabelText('Password').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    //Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);
  });
  it('should navigate to the next url when type credential are correct', () => {
    //Arrange
    const user = 'admin';
    const password = 'test';

    //Act
    cy.visit('/');
    cy.findByLabelText('User').as('userInput');
    cy.findByLabelText('Password').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);

    cy.findByRole('button', { name: 'Login' }).click();

    //Assert

    cy.url().should('eq', 'http://localhost:8080/#/submodule-list');
  });
});
