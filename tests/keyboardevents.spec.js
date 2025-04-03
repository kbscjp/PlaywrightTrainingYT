const {test,expect} = require('@playwright/test')

test("Keyboard Events in Playwright", async ({page}) => {

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").focus()

    await page.keyboard.type("Mukesh Otwani!", {delay: 200});

    await page.keyboard.press("ArrowLeft", {delay: 200});

    await page.keyboard.down("Shift", {delay: 200});

    for(let i = 0;i < 6;i++){
        await page.keyboard.press("ArrowLeft", {delay: 200});
    }

    await page.keyboard.up("Shift", {delay: 200});

    await page.keyboard.press("Backspace", {delay: 200});
/*
    await page.locator("textarea[name='q']").pressSequentially("Mukesh Otwani", {delay: 200});


    await page.keyboard.press("Control+A",{delay: 300});

    await page.keyboard.press("Control+C",{delay: 200});

    await page.keyboard.press("Backspace",{delay: 200});

    await page.keyboard.press("Control+V",{delay: 200});

    await page.waitForTimeout(2000);

*/

})