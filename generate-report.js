const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/cucumber-report.json',
  output: './reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "Browser": "Edge",
    "Platform": process.platform,
    "Executed": "Local"
  }
};

reporter.generate(options);