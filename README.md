# Playwright BDD Login Automation

This repository is a beginner-level test automation project created to practice and understand QA automation fundamentals using Playwright with Cucumber (BDD) in JavaScript.

The project focuses on test design, basic automation structure, and applying core QA concepts such as positive and negative testing, rather than covering complex application functionality.

---

## Project Objective

The primary goals of this project are to:

- Learn and apply Behavior Driven Development (BDD) concepts using Gherkin syntax
- Automate basic authentication workflows such as login and logout
- Practice writing clear, readable, and maintainable test scenarios
- Understand the integration between Playwright and Cucumber
- Generate and share test execution reports
- Integrate automated tests with a CI pipeline

---

## Technology Stack

- Playwright
- Cucumber (BDD)
- JavaScript (Node.js)
- Microsoft Edge
- cucumber-html-reporter
- GitHub Actions

---

## Project Structure

├── features/
│ ├── login.feature
│ └── logout.feature
│
├── steps/
│ ├── login.steps.js
│ └── logout.steps.js
│
├── pages/
│ ├── loginPage.js
│ └── logoutPage.js
│
├── support/
│ ├── hooks.js
│ └── world.js
│
├── reports/
│ └── cucumber-report.html
│
├── cucumber.js
├── playwright.config.js
├── generate-report.js
└── README.md

---

## Functional Coverage

### Login
The following login scenarios are automated:

- Login with valid credentials
- Login with invalid username
- Login with invalid password
- Validation of success and error messages

### Logout
- Successful logout after a valid login session

---

## Sample BDD Scenario

Scenario Outline: Login with different credential combinations
  Given I navigate to the login page
  And I enter username "<username>"
  And I enter password "<password>"
  When I click on the login button
  Then I should see the page containing "<message>"

Examples:
  | username  | password    | message                    |
  | student   | Password123 | Logged In Successfully     |
  | student   | wrongpass   | Your password is invalid! |
  | wronguser | Password123 | Your username is invalid! |

How to Run the Tests

Install dependencies
npm install

Execute tests
npx cucumber-js

Test Reporting
A JSON report is generated after test execution

Browser Configuration
Tests are executed on Microsoft Edge

Browser configuration is managed through Playwright

The framework can be extended to support additional browsers if required

CI Integration
Integrated with GitHub Actions
Tests are executed automatically on code changes
Stable and clean builds are tagged for reference

QA Practices Applied

This project applies the following QA best practices:

Behavior Driven Development (BDD)

Positive and negative test scenario coverage
Scenario Outline for data-driven testing
Page Object Model for improved maintainability
Clear separation of test logic and test data
Reproducible test execution using CI

Limitations and Future Scope

This project intentionally keeps the scope limited to focus on core learning objectives.

Current limitations include:

Functional coverage limited to login and logout scenarios
No cross-browser execution
No parallel test execution
No advanced test data management

These areas provide clear opportunities for future enhancements as the framework evolves.

Author

M R Kishan
QA Engineer
