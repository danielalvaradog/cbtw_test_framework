module.exports = {
    default: {
      require: [
        'features/step-definitions/**/*.steps.ts',
        'support/**/*.ts'
      ],
      requireModule: ['ts-node/register'],
      format: [
        'progress-bar',
        'html:reports/cucumber-report.html'
      ],
      worldParameters: {
        baseURL: 'https://www.saucedemo.com'
      }
    }
  }
  