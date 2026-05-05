import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.magicbricks.com/');
  await page.locator("(//a[text()='Buy'])[1]").hover();
  await expect(page.locator("(//div[text()='Popular Choices'])[1]")).toBeVisible();
  await page.locator("(//a[text()='Rent'])[1]").hover();
  await expect(page.locator("(//div[text()='Popular Choices'])[2]")).toBeVisible();
  await page.locator("(//a[text()='Sell'])[1]").hover();
  await expect(page.locator("//div[text()='For Agent & Builder']")).toBeVisible();
  await page.locator("(//a[text()='Home Loans'])[1]").hover();
  await expect(page.locator("//div[text()='Apply Now']")).toBeVisible();
  await page.locator("(//a[text()='Home Interiors'])[1]").hover();
  await expect(page.locator("//div[text()='Explore our services']")).toBeVisible();
  await page.locator("//a[text()='MB Advice']").hover();
  await expect(page.locator("//div[text()='Interior Designers Near You']")).toBeVisible();
  await page.locator("(//a[text()='Help'])[1]").hover();
  await expect(page.locator("(//a[text()='Help Center'])[1]")).toBeVisible();
});