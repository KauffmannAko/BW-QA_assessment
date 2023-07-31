# BW-QA_assessment

## Cypress Documentation

*Please spend some time going through the Cypress documentation. Here is the link to the doc below:*

[Cypress Documentation](https://docs.cypress.io/guides/overview/why-cypress)

## Starting Your Cypress Test

- You should have Node.js/npm already installed.
- To install Cypress, run this command: `npm install cypress --save-dev`
- To start the Cypress runner, run: `npm run cy:open`
- Choose the "Cypress End to End" option to open all your specs.
- To run tests in headless mode, use: `npm run cy:headless`

## Adding Scripts to Run Tests on the Command Line or Pipeline

- You can add more scripts in the "scripts" object located in the `package.json` file.

## Adding More Tests

- Tests are found in the `e2e/tests` directory.
- You can navigate to that directory to add or update tests.
- Classes are defined in the `pages` directory.

## Test Data

- Test data are defined in the `fixture` directory.

