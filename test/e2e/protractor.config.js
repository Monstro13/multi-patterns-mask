exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capability: [{
        browserName: 'chrome'
    }],
    specs: ['main.test.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};