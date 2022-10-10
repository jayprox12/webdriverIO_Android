class CartPage {

    get cart_page() {
        return $(`//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView`);
    }

    get add_to_cart_btn() {
        return $('//android.view.ViewGroup[@content-desc="Add To Cart button"]');
    }

    get cart_item() {
        return $(`//android.widget.TextView[@content-desc="product label"]`);
    }
}

module.exports = new CartPage();