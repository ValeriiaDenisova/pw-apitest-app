import { test, expect } from '@playwright/test';
import tags from '../test-date/tags.json'

test.beforeEach(async ({ page }) => {
  await page.route('**/api/tags', async route => {

    await route.fulfill({
      body: JSON.stringify(tags)
    });
  })

  await page.goto('https://conduit.bondaracademy.com/')
  await page.waitForTimeout(1000);
})

test('has title', async ({ page }) => {
  await expect(page.locator('.navbar-brand')).toHaveText('conduit');
});


