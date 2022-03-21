const report = require('multiple-cucumber-html-reporter')
report.generate({
  jsonDir: 'cypress/reports/cucumber-json', // ** Path of .json file **//
  reportPath: 'cypress/reports', // ** Path of .html file **//
  pageTitle: 'THG: Cucumber Report',
  reportName: 'THG: Feature Report',
  displayDuration: true,
  displayReportTime: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '94',
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10',
    },
  },
  openReportInBrowser: true,
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'THG' },
      { label: 'Release', value: '0.0.1' },
      { label: 'Cycle', value: '12345' },
      { label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST' },
      { label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST' },
    ],
  },
})
