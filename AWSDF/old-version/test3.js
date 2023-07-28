const { remote } = require('webdriverio');
const assert = require('assert');
const { byValueKey, byType, byText } = require('appium-flutter-finder');
const { wdOpts } = require('./config');

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

        await driver.execute('flutter:scroll', byValueKey('productInformation'), {dx: 0, dy: -1000, durationMilliseconds: 200, frequency: 30})

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

        await driver.execute('flutter:scroll', byValueKey('productInformation'), {dx: 0, dy: -1000, durationMilliseconds: 200, frequency: 30})

        await driver.elementSendKeys(byValueKey('productStockField'), '50');
        await driver.pause(100);
        await driver.elementSendKeys(byValueKey('productDescriptionField'), 'Shirt for kids of all ages');
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('productTagsField'), 'shirts, kids');
        await driver.pause(1000);

        await driver.elementClick(byValueKey('productSaveButton'));

        await driver.pause(2000);

        const productsScreenTitle = byValueKey('productsScreenTitle');

        let titleFound = true;
        try {
            await driver.execute('flutter:waitFor', productsScreenTitle, 2000);
        } catch (error) {
            titleFound = false;
        }

        assert.strictEqual(titleFound, true);

    } catch (error) {
        console.error('Error:', error);
    } finally {
        await driver.pause(5000);
        await driver.deleteSession();
    }
}

runTest3();