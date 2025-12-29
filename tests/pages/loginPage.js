const { expect } = require('@playwright/test');

class loginPage {
  constructor(page) {
    this.page = page;

    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.submitButton = '#submit';
    this.errorMessage = '#error';
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async enterUsername(username) {
    await this.page.fill(this.usernameInput, username);
  }

  async enterPassword(password) {
    await this.page.fill(this.passwordInput, password);
  }

  async clickLogin() {
    await this.page.click(this.submitButton);
  }

  async verifyMessage(expectedText) {
    const bodyText = await this.page.textContent('body');

    if (bodyText.includes(expectedText)) {
      return;
    }

    if (await this.page.locator(this.errorMessage).isVisible()) {
      const errorText = await this.page.textContent(this.errorMessage);
      expect(errorText).toContain(expectedText);
      return;
    }

    throw new Error(`Expected message "${expectedText}" not found`);
  }
}

module.exports = loginPage;