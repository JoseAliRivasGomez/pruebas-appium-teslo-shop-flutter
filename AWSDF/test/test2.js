const { remote } = require('webdriverio');
const assert = require('assert');
const { byValueKey, byType, byText } = require('appium-flutter-finder');
const { wdOpts } = require('../config');

describe('Pruebas de creacion de cuenta', () => {
    let driver;

    before(async () => {
        driver = await remote(wdOpts);
        await driver.pause(1000);
    });

    after(async () => {
        await driver.pause(5000);
        await driver.deleteSession();
    });

    it('No debería crear un usuario con un correo que ya fue registrado', async () => {
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
        await driver.pause(1000);

        const loginScreenTitle = byValueKey('loginScreenTitle');

        let titleFound = true;
        try {
            await driver.execute('flutter:waitFor', loginScreenTitle, 2000);
        } catch (error) {
            titleFound = false;
        }

        assert.strictEqual(titleFound, true);
    });
});
