class NavBar {

    get cart_badge_amt() {
        return $(`//android.view.ViewGroup[@content-desc="cart badge"]/android.widget.TextView`);
    }

    get cart_badge() {
        return $(`//android.view.ViewGroup[@content-desc="cart badge"]`);
    }

}

module.exports = new NavBar();