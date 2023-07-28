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

module.exports = {
    wdOpts
}
