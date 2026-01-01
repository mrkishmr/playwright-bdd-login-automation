const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const HomePage = require('../pages/homePage');

Given('user is logged into the website and is on the home page', async function () {
  await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  await this.page.fill('#username', 'student');
  await this.page.fill('#password', 'Password123');
  await this.page.click('#submit');
});

When('user clicks on logout', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.logout();
});

Then('user must return to the login page', async function () {
  await expect(this.page).toHaveURL(/practice-test-login/);
});