import { expect, Locator, Page } from "@playwright/test";

export class NewUserSignUp{
    readonly page:Page;
    readonly nametxtbox="//input[@name='name']"
    readonly emailtxtbox="//input[@name='email']"
    readonly signupbtn="//button[text()='Signup']"
    readonly newusersignintxt="//h2[text()='New User Signup!']"
    readonly emailaddressalreadyexisttxt="//p[text()='Email Address already exist!']"

    constructor(page:Page){
        this.page=page
    }

    getnametextbox():Locator{
        return this.page.locator(this.nametxtbox)
    }
    getEmailTextBox():Locator{
        return this.page.locator(this.emailtxtbox)
    }
    getSignupBtn():Locator{
        return this.page.locator(this.signupbtn)
    }
    getNewUserSignInText():Locator{
        return this.page.locator(this.newusersignintxt)
    }
    getemailalreadyexisttxt():Locator{
        return this.page.locator(this.emailaddressalreadyexisttxt)
    }
    async newUserSignUpFunctionality(name:string){
        expect(this.getNewUserSignInText()).toBeVisible({ timeout: 5000 })
        await this.getnametextbox().fill(name)
        await this.getEmailTextBox().nth(1).fill(`${name}@gmail.com`)
        await this.getSignupBtn().click()
    }
}