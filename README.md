# First attempts in Cypress automation

To run tests properly few dependencies have to be resolved:
- [x] ```npm``` should be installed on the test machine, guide: https://docs.cypress.io/guides/getting-started/installing-cypress#npm-install

Navigate to project folder and execute command ```npx cypress open```, it will open Cypress desktop app

Clicking on loginAttempts.js will bring the browser of choise up and start the test

Further development should include
* Remove repetetive steps in the test(s) and replace them by API requests
* Explore possibilities for better abstraction of tests
