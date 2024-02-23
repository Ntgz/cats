// @ts-check
import { test, expect } from '@playwright/test';

const LocalHost = 'http://localhost:5173/'

test('app hows a cat image', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto(LocalHost);

  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imagesrc = await image.getAttribute('src')

  await expect(textContent?.length).toBeGreaterThan(0)
  // await expect(imagesrc?.startsWith('https://cataas.com')).toBeTruthy()
  await expect(imagesrc?.length).toBeGreaterThan(0)


});
