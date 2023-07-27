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

async function runTest1() {

  const driver = await remote(wdOpts);
    
    try {
        
        await driver.pause(1000);

        await driver.elementSendKeys(byValueKey('loginEmailField'), 'jimmy@gmail.com');
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('loginPasswordField'), 'Abc12345');
        await driver.pause(1000);
        await driver.elementClick(byValueKey('loginButton'));

        await driver.pause(2000);

        const productsScreenTitle = byValueKey('productsScreenTitle');

        await driver.execute('flutter:waitFor', productsScreenTitle, 1000);

        for (let i = 0; i < 5; i++) {
          await driver.execute('flutter:scroll', byValueKey('ProductList'), {dx: 0, dy: -400, durationMilliseconds: 200, frequency: 30})
        }
        
        assert.strictEqual(await driver.getElementText(productsScreenTitle), 'Productos');

    } catch (error) {
      console.error('Error:', error);
    } finally {
        await driver.pause(5000);
        await driver.deleteSession();
    }
}

runTest1();