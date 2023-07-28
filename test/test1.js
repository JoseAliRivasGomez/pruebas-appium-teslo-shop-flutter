const { remote } = require('webdriverio');
const assert = require('assert');
const { byValueKey, byType, byText } = require('appium-flutter-finder');
const { wdOpts } = require('../config');

describe('Pruebas de inicio de sesión', () => {
    let driver;

    before(async () => {
        driver = await remote(wdOpts);
        await driver.pause(1000);
    });

    after(async () => {
        await driver.pause(5000);
        await driver.deleteSession();
    });

    it('Debería iniciar sesión correctamente', async () => {
        await driver.elementSendKeys(byValueKey('loginEmailField'), 'jimmy@gmail.com');
        await driver.pause(1000);
        await driver.elementSendKeys(byValueKey('loginPasswordField'), 'Abc12345');
        await driver.pause(1000);
        await driver.elementClick(byValueKey('loginButton'));
        await driver.pause(1000);

        const productsScreenTitle = byValueKey('productsScreenTitle');

        let titleFound = true;
        try {
        await driver.execute('flutter:waitFor', productsScreenTitle, 2000);
        } catch (error) {
        titleFound = false;
        }

        assert.strictEqual(titleFound, true);
    });
});