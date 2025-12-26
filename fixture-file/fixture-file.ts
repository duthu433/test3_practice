import { test as baseTest, expect } from '@playwright/test';
import { HomePage } from '../page-object.po.ts/homepage.po';
import { NewUserSignUp } from '../page-object.po.ts/newusersignup.po';
import { EnterAccountInfo } from '../page-object.po.ts/enteracctinfo.po';
import { LoginToAccount } from '../page-object.po.ts/logintoaccount.po';
import { ContactUsScreen } from '../page-object.po.ts/contactus.po';
import { TestCasesScreen } from '../page-object.po.ts/testcases.po';


type Fixtures = {
  homepage: HomePage;
  newusersignup: NewUserSignUp;
  enteracctinfo: EnterAccountInfo;
  logintoaccount: LoginToAccount;
  contactusscreen: ContactUsScreen;
  testcasescreen: TestCasesScreen;
};

export const test = baseTest.extend<Fixtures>({
  homepage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  newusersignup: async ({ page }, use) => {
    await use(new NewUserSignUp(page));
  },

  enteracctinfo: async ({ page }, use) => {
    await use(new EnterAccountInfo(page));
  },

  logintoaccount: async ({ page }, use) => {
    await use(new LoginToAccount(page));
  },

  contactusscreen: async ({ page }, use) => {
    await use(new ContactUsScreen(page));
  },
  testcasescreen: async ({ page }, use) => {
    await use(new TestCasesScreen(page));
  },
});

export { expect };
