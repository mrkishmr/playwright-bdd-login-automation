Feature: Logout Functionality

Scenario: User Logout
    Given user is logged into the website and is on the home page
    When user clicks on logout
    Then user must return to the login page