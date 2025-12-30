const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber-report.json',
  output: './reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
  browser: {
    name: 'Edge',
    version: 'latest'
  },
  platform: {
    name: process.platform
  },
  executed: 'Local'
}
};

reporter.generate(options);