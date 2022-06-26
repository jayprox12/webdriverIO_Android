class FreeContentHub {

    get homeRowCarousel() {
        return $('//android.widget.Button[@resource-id="com.cbs.app:id/recyclerViewHomeRow"]');
    }

    async scrollToShow(showTitle) {
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollTextIntoView("${showTitle}")`)
    }

}

module.exports = new FreeContentHub();