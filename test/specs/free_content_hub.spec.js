const free_content_hub_po = require("../pageObject/free_content_hub_po");
const login_page_po = require("../pageObject/login_page_po");

describe('Free Content Hub Test', () => {
    before(async () => {
        // find by resourceId
        const freeEpButton =  await login_page_po.fchBtn;
        await expect(freeEpButton).toHaveText("WATCH FREE EPISODES");
        await freeEpButton.click();
    })

    it('Scroll Series Premiere Carousel', async () => {
        await free_content_hub_po.scrollToShow("Star Trek: Discovery");

        await $('//android.widget.TextView[@text="Star Trek: Discovery"]').click()

        await driver.pause(12000);
    })
})