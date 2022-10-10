const catalog_po = require("../pageObject/catalog_page_po");
const item_page_po = require("../pageObject/item_page_po");
const nav_bar_po = require("../pageObject/nav_bar_po");
const cart_page_po = require("../pageObject/cart_page_po");

describe('Catalog Test', () => {

    it('Select Test shirt', async () => {
        var item = "Test.allTheThings() T-Shirt";
        await catalog_po.catalogScrollTo(item);

        await $(`//android.widget.TextView[@text="${item}"]`).click()

        await driver.pause(12000);
    })

    it('Add to cart', async () => {
        var item = "Test.allTheThings() T-Shirt";
        const addToCartBtn = item_page_po.add_to_cart_btn;
        const itemDesc = item_page_po.item_description(item);
        var amount = nav_bar_po.cart_badge_amt;
        const cartBadge = nav_bar_po.cart_badge;
        const cartPage = cart_page_po.cart_page;

        await expect(itemDesc).toHaveText(item);

        await catalog_po.catalogScrollTo("Add To Cart");

        await addToCartBtn.click();

        await expect(amount).toHaveText("1");

        await cartBadge.click()

        await expect(cartPage).toHaveText("My Cart");

        await expect(cart_page_po.cart_item).toHaveText("Test.allTheThings() T-Shirt")

        await driver.pause(12000);
    })
})