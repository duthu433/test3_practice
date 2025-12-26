import { expect, Locator, Page } from "@playwright/test";
export class HomePage{
    readonly page: Page
    readonly signup = "//a[text()=' Signup / Login']";

    constructor(page:Page){
        this.page=page
    }
    getsignUp():Locator{
        return this.page.locator(this.signup)
    }
    async homePageFunctionality(){
    
        expect(await this.page.title()).toContain('Automation Exercise')
        await this.getsignUp().click()
    }


}