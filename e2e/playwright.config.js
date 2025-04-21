// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 0,
    workers: 3,
    reporter: [['html', {open: 'never'}]],
    use: {
        ignoreHTTPSErrors: true,
        trace: 'on',
    },
    projects: [
        {
            name: 'chromium',
            use: {...devices['Desktop Chrome'],},
        },
        {
            name: 'firefox',
            use: {...devices['Desktop Firefox']},
        },
        {
            name: 'webkit',
            use: {...devices['Desktop Safari']},
        },
    ],
});

