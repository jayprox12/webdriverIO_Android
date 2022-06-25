# webdriverIO_appleDroid - Android & iOS testing appand suite

Using Appium and WebdriverIO to build tests for Android and iOS apps. 

Before we begin, you will need to have the following installed: Node.js, Java JDK, Appium Inspector, Android Studio (for Android), Xcode (for iOS). (Created this test by using sample apps by following a tutorial from Dilpreet Johal in the Udemy course: Mobile Automation with Appium 2.0)


Installing Node.js:
- Go to http://nodejs.org, and click the Install button
- Run the installer that you just downloaded
- When the installer completes, a message indicates that Node was installed at /usr/local/bin/node and npm was installed at /usr/local/bin/npm.

Install Java JDK:
- Go to: https://adoptium.net/
- Download latest release
- Run the installer that you just downloaded
- Open Terminal, and enter: java --version
- Verify installed version is displayed

Install Android Studio (For testing with Android):
- Go to: https://developer.android.com/studio
- Download latest release
- Run the installer that you just downloaded

Install Xcode and command line tools (For testing with iOS):
- Download from the App Store
- When finished, open Terminal and enter: xcode-select --install
- Go through with the installation
- In the Terminal, enter: brew install carthage

Install Appium Inspector:
- Download latest release here: https://github.com/appium/appium-inspector/releases
- Open Appium Inspctor


Java JDK Setup:
- In the Terminal, enter: echo $JAVA_HOME
- If nothing is displayed, we'll need to update the zshenv file (or bash for older macs)
- In the Terminal, enter: /usr/libexec/java_home
- Observe the path in the Terminal
- In Terminal, enter: vim ~/.zshenv
- Enter: export JAVA_HOME=$(/usr/libexec/java_home)
- Hit esc key
- Enter: :wq!
- Hit Enter key. (Saves changes in zshenv file)
- In Terminal, enter: source ~/.zshenv
- In Terminal, enter: echo $JAVA_HOME.
- Verify the path is displayed


Android Studio Setup
- In the Terminal, enter: echo $ANDROID_HOME
- If nothing is displayed, we'll need to update the zshenv file
- In Terminal, enter: cd /Users/{mac_username}/Library/Android/sdk/
- In that directory, enter: ls
- Verify platform_tools and tools are displayed
- In Terminal, enter: vim ~/.zshenv
-Enter the following:
-- export ANDROID_HOME="/Users/{mac_username}/Library/Android/sdk/"
-- export PATH=$ANDROID_HOME/platform-tools:$PATH
-- export PATH=$ANDROID_HOME/tools:$PATH
- Hit esc key
- Enter: :wq!
- Hit Enter key. (Saves changes in zshenv file)
- In Terminal, enter: source ~/.zshenv
- In Terminal, enter adb
- Verify the version and the help is displayed
- In Terminal, enter: echo $ANDROID_HOME
- Verify the path is displayed


Setup Android Emulator

- Open Android Studio
- Click on Configure > Add Android Virtual Devices (or AVD Manager)
- Create Virtual Device
- Select device and OS
- Click Finish
- Run the selected device
- Verify the simulator boots up


Appium Setup
- In Terminal, enter: npm install -g appium-doctor
- In Termainl, enter: appium-doctor --version
- Verify the version installed
- In Terminal, enter: appium-doctor --android
- Verify the checks for necessary dependencies are successful
- In the Terminal, enter: appium driver install uiautomator2
- In the Terminal, enter: appium driver install xcuitest
- In the Terminal, enter: appium driver list
- Verify uiautomator2 and xcuitest are displayed


WebDriverIO Setup

- Create a new directory and go there (mkdir {new folder}, then cd to {new folder}
- In the Terminal, enter: npm init
- Go through the setup. Can use defaults
- In the Terminal, enter: npm i @wdio/cli
- In the Terminal, enter npx wdio config
- Enter the following:
-- local machine
-- mocha
-- No to compiler
-- Default location
-- No generating test files
-- spec reporter
-- Deselect default selection, then select appium
-- Default base url
- Verify installation completes
- In Terminal, enter npm install appium@next
- Open package.json file and verify the installation modules


WebdriverIO Config:
- Open wdio.conf
- In capabilities section, enter:
-- platformName: "{devicePlatform}", //(Android, ios)
-- "appium:platformVersion": "{versionNumber}", //(11.0)
-- "appium:deviceName": "{deviceName}", //(Pixel 3, iPhone 12 Pro)
-- "appium:automationName": "{automationName}", //(UIAutomator2, XCUITest)
-- "appium:app": path.join(process.cwd(), "{appPath}") //(app/android/{appName}.apk, app/ios/{appName}.app)
- Create a test folder
- Under that test folder, create a spec folder (ex. test/spec)


Emulator Setup:
- Open Appium Inspector
- Update port (ex. I used 4724)
- In Desired Capabilities, enter the following: (Can try to mirror the capabilites section in the wdio.conf, but the device and os is up to you)
-- platformName, text, {devicePlatform}
-- appium:platformVersion, text, {versionNumber}
-- appium:deviceName, text, {deviceName}
-- appium:app, text, {appPath}
-- automationName, text, {automationName}
- Open the device simulator. (Same one that matches the Desired Capabilities)
- In the Terminal, enter: appium -p {portNumber} //(ex. 4724)
- Verify it started
- In Appium Inspector, click Start Session button
- Verify the app is installed and booted up in the simulator
- Verify the device is displayed in the Appium Inspector
