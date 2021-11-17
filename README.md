## An Example Application using React and Cypress with Mock Service Worker

[https://www.capocaccia.dev/](https://www.capocaccia.dev/)

- Used:
  - [Mock Service Worker](https://mswjs.io/)
  - [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
  - [Cypress](https://www.cypress.io/)
  - [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/)

### Description

In this app, I am using Mock Service Worker to mock API calls in the client and Cypress. In this structure, the app does not have to be utilizing Mock Service Worker when Cypress runs. Cypress can activate MSW and use its mocking capability on its own.

By default this app is using mock data served by Mock Service Worker. If you would like to use live data, you will need to comment out the line below in index.js and procure your own free API key.
Procure your own key here: https://openweathermap.org/price
Use this key and replace the API_KEY in App.js with your key.

```javascript
  // index.js
  worker.start();
```

You can start the application with the commands in package.json without MSW active. In Cypress/support/index.js we utilize the Cypress Lifecycle Hook to start MSW when the tests are executed.

```javascript
Cypress.on("test:before:run:async", async () => {
  await worker.start();
});
```

### Questions or Concerns?

Find my contact information here: [Contact](https://www.capocaccia.dev/#footer)
