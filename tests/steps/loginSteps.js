const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../pages/LoginPage.js');

Given('I navigate to {string}', async function (url) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate(url);
});

Given('I enter username {string}', async function (username) {
  await this.loginPage.enterUsername(username);
});

Given('I enter password {string}', async function (password) {
  await this.loginPage.enterPassword(password);
});

When('I click on the login button', async function () {
  await this.loginPage.clickLogin();
});

Then('I should see the page containing {string}', async function (message) {
  await this.loginPage.verifyMessage(message);
});