# NOW TV React Interview

![NowTV](./logo.png)

A React and Redux project to retrieve, render and manipulate data returned from an API.

## Commands

- **yarn start**: Runs the web application in developer mode
- **yarn test**: Executes Jest tests that have the `.test.js` extension

## Project Structure

Feel free to create new files to help you complete these tasks. Additional dependencies can be installed, if you think they are necessary.

* `src/index.js` is your react entry point, it is connected to the redux store

* `data` directory is a mocked-API which exposes methods to get message information and member information from a chat room.
It has two publicly exposed functions `getMessages` and `getMembers`.

This part is asking for a pagination support :)

* Your tasks will be to add further logic to display and manipulate the data returned from these functions, without modifying `data/index.js`.  Code addition should be unit tested.

## Tasks

1. Render the list of messages from the redux store

2. Display the user's email when you hover over the message - how can you achieve this in both CSS and JavaScript ?

I used a CSS :hover. We could probably add an event listener for 'mouseover' but I can't see any benefit of this approach.

3. Display the avatar of the user next to the message

4. Display and format the timestamp of the message to be in a human readable format, e.g. `1st Jan 2020 17:00`

5. Sort the messages by time

## Additional Tasks

1. How could you improve the accessibility of your website?

    * app is already well structured
    * elements are built of semantic elements
    * text size and color/contrasts are correct
    * images have alt texts
    * app can be easily navigated with the keyboard

2. Enhance the solution by rendering the user's name under the message. Once clicked it will take you through to a grid page showing all the user's messages:

    * Display the title of the message

    * Display and format the timestamp of the message to be human readable, e.g. `1st Jan 2020 17:00`

3. Can you make sure the design of your website is responsive?

It's a rather simple list, so I just centered it and added max width. It should render correctly on any reasonable screen width.

4. How would you go about automating and testing your application?

I added a few tests and some pseudo-code tests. This is a specific scenario when the API is already mocked, so we could simply run it in Cypress, find a specific message, simulate a click and check for the lenght of messages on the user page.

## Submission

Please upload your solution to your github account as a public repository, and send the URL to us.
