Feature: Login Functionality

Scenario Outline: Login with valid credentials
  Given I navigate to "https://practicetestautomation.com/practice-test-login/"
  And I enter username "<username>"
  And I enter password "<password>"
  When I click on the login button
  Then I should see the page containing "<message>"

Examples:
  | username | password    | message                |
  | student  | Password123 | Logged In Successfully |
  | student  | wrongpass   | Your password is invalid! |
  | wronguser| Password123 | Your username is invalid! |