// @ts-check
import { test, expect } from '@playwright/test';
import { LocalitiesInBnglr } from '../pages/LocalitiesInBnglr';



test.beforeEach(async ({ page }) => {
  await page.goto("https://www.magicbricks.com/");
});
test("1st testcase is HOVER MBAdvice and select LocalitiesInBnglr", async ({page}) => {
  await page.goto("https://www.magicbricks.com/")
  // Create object of your page class
  const locality = new LocalitiesInBnglr(page);
  // Call methods
  await locality.hoverOnMbAdvice();
  const waitforsec = await locality.clickLocalitiesInBnglr();
  await waitforsec.waitForTimeout(2000);
 
});

