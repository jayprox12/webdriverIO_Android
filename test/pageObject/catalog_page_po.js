class Catalog {

    async catalogScrollTo(item) {
        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).setAsVerticalList().scrollTextIntoView("${item}")`)
    }
}

module.exports = new Catalog();