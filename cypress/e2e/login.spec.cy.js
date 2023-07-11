/// <reference types="cypress" />

context("Funcionalidade Login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();
    cy.get("a > .hidden-xs").should("contain", "Welcome");
  });

  it("Deve exibir uma mensagem de erro ao inserir usuário inválido", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("ebac@teste.com");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();
    cy.get(".woocommerce-error > li").should(
      "contain",
      "Erro: a senha fornecida para o e-mail"
    );
  });
});
