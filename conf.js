// conf.js
exports.config = {
  framework: 'jasmine',
  specs: ['**/**.js'],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  chromeOptions: ["--headless", "--disable-gpu", "--no-sandbox"],
  jasmineNodeOpts: {
    showColors: true,
  }
};
