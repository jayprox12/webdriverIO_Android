class LoginPage {

    get signUpBtn() {
        return $('//android.widget.Button[@resource-id="com.cbs.app:id/firstCTAButton"]');
    }

    get fchBtn() {
        return $('//android.widget.Button[@resource-id="com.cbs.app:id/secondCTAButton"]');
    }

    get signInBtn() {
        return $('//android.widget.Button[@resource-id="com.cbs.app:id/thirdCTAButton"]');
    }
}

module.exports = new LoginPage();