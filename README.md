# Corpay QA Assignment
### Hello there! Thank you for taking the time to look over this assignment!

This app contains a simple login form that validates a hardcoded email and password. Cypress E2E tests are utilized to verify correct and incorrect login behavior.

First, open a terminal window (I use VS Code and use ``control + ` ``), and then you are ready to run the app!

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
The test suite includes 3 automated tests.
A `beforeEach()` Mocha hook reloads the page before each test to mimic unique login attempts.

1. Page Loads Correctly
* the login page renders
* the `<h1 id="title">Login</h1>` element exists
* the form is present

2. Successful Login
* types the correct email and password
* submits the form
* confirms the status message "Logged in!" is visible

3. Unsuccessful Login
* types incorrect email and password
* submits the form
* confirms the status message "Invalid credentials." is visible

## Note
This project intentionally does not use a backend or API. I am just simulating the process to focus on the QA testing!