Feature: Sauce Demo cart
    As a standard_user
    I want to add products to my cart
    So I can see them in my shopping list

  Background:
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I should be in the inventory page

  @ui
  Scenario Outline: User should be able to add products to their cart
    When I add "<product>" product to the cart
    And I continue to the cart
    Then I should be in the cart page
    And I should see the product in the cart list

    Examples:
      | product                           |
      | Sauce Labs Backpack               |
      | Sauce Labs Bike Light             |
      | Test.allTheThings() T-Shirt (Red) |
      | Sauce Labs Fleece Jacket          |
