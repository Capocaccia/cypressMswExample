// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import { worker } from '../../src/mocks/browser';

// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.on('test:before:run:async', async () => {
   
   if(window.msw) {
      console.log('MSW is already running.')
   }

   //if MSW wasnt started by the app, Cypress needs to start it
   if(!window.msw){ 
      console.log('MSW has not been started. Starting now.')
      await worker.start();
   }

});