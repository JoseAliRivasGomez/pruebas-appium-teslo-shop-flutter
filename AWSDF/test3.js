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

async function runTest3() {

  const driver = await remote(wdOpts);
    
    try {
        
        await driver.pause(1000);

        await driver.elementSendKeys(byValueKey('loginEmailField'), 'jimmy@gmail.com');
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('loginPasswordField'), 'Abc12345');
        await driver.pause(1000);
        await driver.elementClick(byValueKey('loginButton'));

        await driver.pause(2000);

        await driver.elementClick(byValueKey('productsNewProductButton'));
        await driver.pause(1000);


        await driver.elementSendKeys(byValueKey('productTitleField'), '');
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('productSlugField'), 'shirt_for_kids');
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('productPriceField'), '20');
        await driver.pause(1000);

        await driver.execute('flutter:scroll', byValueKey('productInformation'), {dx: 0, dy: -200, durationMilliseconds: 200, frequency: 30})

        await driver.elementClick(byText('XS'));
        await driver.pause(500);
        await driver.elementClick(byText('S'));
        await driver.pause(500);
        await driver.elementClick(byText('M'));
        await driver.pause(500);
        await driver.elementClick(byText('L'));
        await driver.pause(1000);
        
        await driver.elementClick(byText('kid'));
        await driver.pause(1000);

        await driver.execute('flutter:scroll', byValueKey('productInformation'), {dx: 0, dy: -200, durationMilliseconds: 200, frequency: 30})

        await driver.elementSendKeys(byValueKey('productStockField'), '50');
        await driver.pause(100);
        await driver.elementSendKeys(byValueKey('productDescriptionField'), 'Shirt for kids of all ages');
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('productTagsField'), 'shirts, kids');
        await driver.pause(1000);

        await driver.elementClick(byValueKey('productSaveButton'));

        await driver.pause(2000);

        const productsScreenTitle = byValueKey('productsScreenTitle');

        await driver.execute('flutter:waitFor', productsScreenTitle, 2000);

        assert.strictEqual(await driver.getElementText(productsScreenTitle), 'Productos');

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await driver.pause(50000);
        await driver.deleteSession();
    }
}

runTest3();