## An Example Application using React and Cypress with Mock Service Worker

[https://www.capocaccia.dev/](https://www.capocaccia.dev/)

- Used:
  - [Mock Service Worker](https://mswjs.io/)
  - [Create React App](https://reactjs.org/docs/create-a-new-react-app.html)
  - [Cypress](https://www.cypress.io/)
  - [Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/)

### Description

In this app, I am using Mock Service Worker to mock API calls in the client and Cypress. In this structure, the app does not have to be utilizing Mock Service Worker when Cypress runs. Cypress can activate MSW and use its mocking capability on its own.

If you want to use MSW (mock data) client-side, uncomment the command below in index.js

```javascript
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
