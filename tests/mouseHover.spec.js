const {test, expect} = require("@playwright/test")

test("Valid Login", async function({page}){

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.getByPlaceholder("Enter Email").pressSequentially("admin@email.com", {delay: 100});

    await page.getByPlaceholder("Enter Password").pressSequentially("admin@123", {delay: 100});

    await page.waitForTimeout(2000);

    await page.getByRole("button",{name:"Sign in"}).click();

    await page.waitForTimeout(2000);

    await page.locator("//span[text()='Manage']").hover({force: true});

    await page.waitForTimeout(2000);

    await page.locator("//a[normalize-space()='Manage Courses']").click();

})
