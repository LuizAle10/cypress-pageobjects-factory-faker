const { defineConfig } = require("cypress");

module.exports = defineConfig({

  defaultCommandTimeout: 5000,
  viewportWidth: 1920,
  viewportHeight: 1080,
   //(1440, 900) //essa resolução é boa
 
  // Command timeout overridden for E2E tests
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://buger-eats-qa.vercel.app"
    //baseUrl: "https://buger-eats.vercel.app"
  }
})
