const { test, expect } = require('@playwright/test');

test('Check grades page', async ({ page }) => {
    await page.goto("https://shadowwalker-exam.onrender.com/My-Grades");
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  