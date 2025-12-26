import { expect, Locator, Page } from "@playwright/test"

 export class TestCasesScreen{
    readonly page:Page
    readonly testcaseslink="//a[text()=' Test Cases']"
    readonly testcasestxt="//b[text()='Test Cases']"

    constructor(page:Page){
        this.page=page
    }
    getTestCaselink():Locator{
        return this.page.locator(this.testcaseslink)
    }
    getTestCaseTxt():Locator{
        return this.page.locator(this.testcasestxt)
    }

    async testCaseFunctionality(){
        expect(await this.getTestCaselink()).toBeVisible({timeout:5000})
        await this.getTestCaselink().click();
        expect(await this.getTestCaseTxt()).toBeVisible({timeout:5000})
    }
 }
 
 
 