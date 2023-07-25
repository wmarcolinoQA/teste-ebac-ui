/// <reference types="cypress" />

describe("Funcionalidade Página de Produtos", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/produtos");
  });

  it("Deve selecionar um produto da lista", () => {
    cy.get('[class="product-block grid"]').last().click();
  });

  it.only("Deve adicionar um produto ao carrinho", () => {
    var quantidade = 2;

    cy.get('[class="product-block grid"]')
      .contains("Ariel Roll Sleeve Sweatshirt")
      .click();
    cy.get(".button-variable-item-S").click();
    cy.get(".button-variable-item-Purple").click();
    cy.get(".input-text").clear().type(quantidade);
    cy.get(".single_add_to_cart_button").click();

    cy.get(".dropdown-toggle > .mini-cart-items").should("contain", quantidade);
    cy.get(".woocommerce-message").should(
      "contain",
      quantidade +
        " x Ariel Roll Sleeve Sweatshirt foram adicionados no seu carrinho."
    );
  });
});
