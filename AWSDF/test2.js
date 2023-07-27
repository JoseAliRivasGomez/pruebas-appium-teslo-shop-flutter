const { remote } = require('webdriverio');
const assert = require('assert');
const { byValueKey, byType, byText } = require('appium-flutter-finder');

const capabilities = {
  platformName: process.env.DEVICEFARM_DEVICE_PLATFORM_NAME || '',
  'appium:deviceName': process.env.DEVICEFARM_DEVICE_NAME || '',
  'appium:app': process.env.DEVICEFARM_APP_PATH || '',
  'appium:automationName': 'Flutter',
}

const wdOpts = {
  hostname: '0.0.0.0',
  port: 4723,
  logLevel: 'info',
  capabilities,
}

async function runTest2() {

  const driver = await remote(wdOpts);
    
    try {
        
        await driver.pause(1000);

        await driver.elementClick(byValueKey('loginGoToSignupButton'));
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('signupFullNameField'), 'Jose Rivas');
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('signupEmailField'), 'jose2199@gmail.com');
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('signupPasswordField'), 'Abc12345');
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('signupConfirmPasswordField'), 'Abc12345');
        await driver.pause(1000);
        await driver.elementClick(byValueKey('signupButton'));

        await driver.pause(2000);

        const loginScreenTitle = byValueKey('loginScreenTitle');

        await driver.execute('flutter:waitFor', loginScreenTitle, 1000);

        assert.strictEqual(await driver.getElementText(loginScreenTitle), 'Ingresar');

    } catch (error) {
      console.error('Error:', error);
    } finally {
        await driver.pause(5000);
        await driver.deleteSession();
    }
}

runTest2();