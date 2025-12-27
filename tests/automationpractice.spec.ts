
import path from 'path';
import { test, expect } from '../fixture-file/fixture-file';
import { testData } from '../test-data/qa-data';
import { TestCasesScreen } from '../page-object.po.ts/testcases.po';


test.beforeEach(async ({ page }) => {
  await page.goto(testData.url);
});

test('Test Case 1: Register User', async ({homepage,newusersignup,enteracctinfo}) => {
  await homepage.homePageFunctionality();
  await newusersignup.newUserSignUpFunctionality(testData.name);
  await enteracctinfo.enteractinfofunctionality(testData.name,testData.password,testData.dob.day,testData.dob.month,testData.dob.year);
  await enteracctinfo.enteradressfuntionality(testData.name,testData.firstName,testData.lastName,testData.companyName,testData.address,testData.country,testData.state,testData.city,testData.zipCode,testData.mobileNumber);
})

test('Test Case 2: Login User with correct email and password', async ({homepage,logintoaccount,enteracctinfo }) => {
  await homepage.homePageFunctionality()
  await logintoaccount.loginToUrAccountFuctionality(testData.name)
  expect((await enteracctinfo.getloggedinastxt(testData.name).innerText()).trim()).toEqual(`Logged in as ${testData.name}`)
  await enteracctinfo.getDeleteAcctlink().click()
  expect(enteracctinfo.getAcctDeletedTxt()).toBeVisible({ timeout: 5000 })
})

test.skip('Test Case 3: Login User with incorrect email and password', async ({ homepage,logintoaccount }) => {
  await homepage.homePageFunctionality()
  await logintoaccount.loginToUrAccountFuctionality(testData.name)
  expect(logintoaccount.getLoginErrormsg()).toBeVisible({ timeout: 5000 })

})

test.skip('Test Case 4: Logout User', async ({ homepage,logintoaccount,enteracctinfo }) => {
  await homepage.homePageFunctionality()
  await logintoaccount.loginToUrAccountFuctionality(testData.name)
  expect((await enteracctinfo.getloggedinastxt(testData.name).innerText()).trim()).toEqual(`Logged in as ${testData.name}`)
  await enteracctinfo.getLogoutlink().click()
  expect(homepage.getsignUp()).toBeVisible({ timeout: 5000 })

})

test.skip('Test Case 5: Register User with existing email', async ({ homepage,newusersignup }) => {
  await homepage.homePageFunctionality()
  await newusersignup.newUserSignUpFunctionality(testData.name)
  expect(newusersignup.getemailalreadyexisttxt()).toBeVisible({ timeout: 5000 })
})

test.skip('Test Case 6: Contact Us Form',async({contactusscreen})=>{
  await contactusscreen.contactusFunctionality(testData.name,testData.email,testData.subject,testData.message)
})
test.skip('Test Case 7: Verify Test Cases Page',async({testcasescreen})=>{
 testcasescreen.testCaseFunctionality()
})

test.skip('Test Case 8: Verify All Products and product detail page',async({page})=>{
await page.locator("//a[text()=' Products']").click()
expect(await page.locator("//h2[text()='All Products']")).toBeVisible({timeout:5000})
await page.locator("//a[text()='View Product']").nth(0).click()
expect(await page.locator("//h2[text()='Blue Top']")).toBeVisible({timeout:5000})
expect(await page.locator("//p[text()='Category: Women > Tops']")).toBeVisible({timeout:5000})
expect(await page.locator("//span[text()='Rs. 500']")).toBeVisible({timeout:5000})
expect(await page.locator("//b[text()='Availability:']")).toBeVisible({timeout:5000})
expect(await page.locator("//b[text()='Condition:']")).toBeVisible({timeout:5000})
expect(await page.locator("//b[text()='Brand:']")).toBeVisible({timeout:5000})
})

test.skip('Test Case 9: Search Product',async({page})=>{
await page.locator("//a[text()=' Products']").click()
expect(await page.locator("//h2[text()='All Products']")).toBeVisible({timeout:5000})
await page.locator("#search_product").nth(0).fill('Baby products')
await page.locator("#submit_search").nth(0).click()
expect(await page.locator("//h2[text()='Searched Products']")).toBeVisible({timeout:5000})
})

test('print',async({page})=>{
console.log("Hi")
})

