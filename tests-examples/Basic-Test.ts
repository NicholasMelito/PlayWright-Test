import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('https://localhost:4000/');
});