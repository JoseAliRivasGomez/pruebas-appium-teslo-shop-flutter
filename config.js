const capabilities = {
    platformName: 'Android',
    'appium:deviceName': 'emulator-5554',
    'appium:app': 'C:/Users/Usuario/Desktop/Desktop/Cursos/19 Flutter 2023/teslo-shop-app/build/app/outputs/flutter-apk/app-debug.apk',
    'appium:automationName': 'Flutter',
    //'appium:retryBackoffTime': 500
}

const wdOpts = {
    hostname: '127.0.0.1',
    port: 4723,
    logLevel: 'info',
    capabilities,
}

module.exports = {
    wdOpts
}