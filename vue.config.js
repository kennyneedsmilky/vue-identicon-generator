module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",

  pluginOptions: {
    i18n: {
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
};
