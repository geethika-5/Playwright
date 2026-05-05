import { test, expect } from '@playwright/test';
const { readExcelData } =require ('../Utils/readFile.js');
const excelData = readExcelData();
  console.log(excelData);
   const locality = excelData[0].locality;
test('Compare Locality using Excel data', async ({ page }) => {
  await page.goto("https://www.magicbricks.com/");
  await page.locator("//a[text()='MB Advice']").hover();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Compare Localities' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('textbox', { name: 'Enter Locality', exact: true }).fill(locality);
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('button', { name: 'Explore' }).click();
  await page2Promise;
  await page.waitForTimeout(1000);
});
