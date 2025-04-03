const {test,expect} = require("@playwright/test")

test.use({viewport:{width:1753,height:910}})

test("Valid Login", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)

    await page.getByPlaceholder("Username").pressSequentially("Admin",{delay: 200});

    await page.locator("input[name='password']").pressSequentially("admin123",{delay: 100});

    await page.locator("//button[@type='submit']").click();

    await page.waitForTimeout(5000);

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").first().click();

    await page.waitForTimeout(2000);

    await page.getByText("Logout").click();

    await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/login/);
})