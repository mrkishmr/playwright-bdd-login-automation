class homePage {
  constructor(page) {
    this.page = page;
    this.logoutButton = page.getByRole('link', { name: 'Log out' });
  }

  async logout() {
    await this.logoutButton.click();
  }

  async isOnLoginPage() {
    return this.page.url().includes('practice-test-login');
  }
}

module.exports = homePage;