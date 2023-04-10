## About The Project

This challenge was to build a simple form using HTML and CSS(NO frameworks)

Some features are

- The submit button is enabled once the first & last name inputs are filled
- When the subscription checkbox is checked, the email input field becomes visible
- The email input field is checked for email addresses and display error message when email address is invalid
- When the form is submitted with a successful POST request:
  - A success message is posted for a second
  - All the inputs are reset and the submit button is disabled
- An error message is shown when a POST request is not successful

  - The inputs are kept the same
  - A error message displays in the console

## Google Doc Link for the challenge from Brian

- [Google Docs - Form Challenge Instructions](https://docs.google.com/document/d/1zC4wts9HVIxBVdAdGrbk32-JEAbQh-orMGCMZE3sKAI/edit)
- [JSON Placeholder API](https://jsonplaceholder.typicode.com/)

## Workflow/Roadmap

### Step 1

- [x] Create a new project with the following files

  - [x] index.html
  - [x] app.js
  - [x] index.css

- [x] Create a form in the `index.html` with the following fields
  - [x] Input with first name
  - [x] Input with last name
  - [x] Text area for comments
  - [x] Checkbox to subscribe to a newsletter
  - [x] Input for an email
  - [x] Submit button

### Step 2

- [x] Disable the submit button initially
- [x] The button should only be enabled if
  - [x] First name and last name have at least 1 letter in the text box
- [x] Hide the input for an email initially
- [x] The input for email should be displayed if
  - [x] The checkbox is checked

### Step 3

- [x] After clicking submit
  - [x] Make a POST request to https://jsonplaceholder.typicode.com/users
    - [x] The request object should follow this structure { firstName, lastName, isSubscribed, email, comment }
    - [x] The email property should only be sent IF they have checked the box to subscribe
    - [x] If the request is successful
      - [x] Display a success message that disappears after 2 seconds (e.g. ‘Thanks for your submission <FirstName>’
      - [x] Clear all form fields
    - [x] If the request is NOT successful
      - [x] Display a failure message (e.g. ‘Oops something went wrong’)
      - [x] Do NOT clear all fields
