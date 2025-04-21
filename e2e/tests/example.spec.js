// @ts-check
const {test, expect} = require('@playwright/test');

const pwaUrl = 'http://pwa:3000'

test('smoke-test', async ({page}) => {
    await page.goto(`${pwaUrl}/fr/`);
    await page.goto(`${pwaUrl}/en/`);
    await page.goto(`${pwaUrl}/fr/auth/login/`);
});