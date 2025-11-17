# Corpay QA Assignment
### Hello there! Thank you for taking the time to look over this assignment!

This app contains a simple login form that validates a hardcoded email and password. Cypress E2E tests are utilized to verify correct and incorrect login behavior.

First, open a terminal window (I use VS Code and use [control+`]), and then you are ready to run the app!

## How to run the app
1. Install the dependencies

```bash
npm install
```

2. Start the development server

```bash
npm run dev
```

3. Open the app in your browser

Open [http://localhost:3000](http://localhost:3000) with your browser to see the login page

## To manually test
1. Test valid credentials
* type in the email input: "test@email.com"
* type in the password input: "password123"
* click the "Log In" button

A status message reading "Logged in!" should appear below the button.

2. Test invalid credentials
* type in the email input: "testing@email.com" or any other string following the foo@bar.com email pattern
* type in the password input: "password" or anything besides "password123"
* click the "Log In" button

A status message reading "Invalid credentials. Try again!"

## Running Cypress Tests
1. Start the development server

```bash
npm run dev
```

2. In a separate terminal, open Cypress

```bash
npx cypress open
```
3. Run the tests in Cypress
* Choose E2E Testing
* Select your preferred browser
* Click the `corpay-assignment.cy.js` to run the tests in the browser!

## What the Cypress Tests Cover
There are 3 separate tests that cover a few things about the login page. I used a `beforeEach()` Mocha Hook to mimic the page reloading before each test.

The first test checks that the login page loads correctly. It does so by finding a page element with the id of title and verifying that the element has the text Login and by making sure that the form element the user will interact with exists.

The second test checks that the login form allows the user to log in when provided with correct credentials. It does so by finding and filling out the elements with an id of email and password with correct credentials and then clicking the button to submit the form. It then verifies that the status "Logged in!" is now visible on the page after logging in correctly.

The third test checks that the login form does not allow the user to log in with incorrect credentials. It does so by finding and filling out the elements with an id of email and password with incorrect credentials and then clicking the button to submit the form. It then verifies that the status "Invalid credentials." is now visible on the page after the unsuccessful log in attempt.

## Note
This project intentionally does not use a backend or API. I am just simulating the process to focus on the QA testing!
