describe('Login Page', () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("loads the login page correctly", () => {
    cy.get("#title").should("contain.text", "Login");
    cy.get("form").should("exist");
  });

  it("logs in successfully with correct credentials", () => {
    cy.get("#email").type("test@email.com");
    cy.get("#password").type("password123");

    cy.contains("Log In").click();

    cy.contains("Logged in!").should("be.visible");
  });

  it("shows an error when logging in with incorrect credentials", () => {
    cy.get("#email").type("testing@email.com");
    cy.get("#password").type("password");

    cy.contains("Log In").click();

    cy.contains("Invalid credentials.").should("be.visible");

  })
})