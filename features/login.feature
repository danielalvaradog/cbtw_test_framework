Feature: Sauce Demo Login
    As a standard_user
    I want to login to the saucedemo store
    So I can access my account

@ui
Scenario: User should be able to login with valid credentials 
    Given I am on the login page
    When I login with "standard_user" and "secret_sauce"
    Then I should be in the inventory page


@ui
Scenario: User should see the error message when login with invalid credentials
    Given I am on the login page
    When I login with "invalid" and "credentials"
    Then I should see an error message