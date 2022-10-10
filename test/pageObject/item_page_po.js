class ItemPage {

    async item_description(item) {
        return $(`//android.widget.TextView[@text="${item}"]`);
    }

    get add_to_cart_btn() {
        return $('//android.view.ViewGroup[@content-desc="Add To Cart button"]');
    }
    
}

module.exports = new ItemPage();