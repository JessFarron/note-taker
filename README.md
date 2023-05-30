# Note-taker[![Github license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Note Taker is an application that allows users to write and save notes. It utilizes an Express.js back end and stores note data in a JSON file. The front end of the application has already been created; your task is to build the back end, connect the two, and deploy the entire application to Heroku.

##Table of Contents
*[Description](#description)
*[Installation](#installation)
*[Usage](#usage)
*Deployment

##Description
The Note Taker application provides the following features:

1. **Landing Page:** Upon opening the application, users are presented with a landing page that displays a link to the notes page.
2. **Notes Page:** Clicking on the link to the notes page takes users to a page where existing notes are listed in the left-hand column. The right-hand column provides empty fields to enter a new note title and the note's text.
3. **Saving Notes:** When users enter a new note title and the note's text, a Save icon appears in the navigation at the top of the page. Clicking on the Save icon saves the new note, which then appears in the left-hand column with the other existing notes.
4. **Viewing Notes:** Clicking on an existing note in the list on the left-hand column displays the selected note in the right-hand column.
5. **Creating New Notes:** Clicking on the Write icon in the navigation at the top of the page presents users with empty fields to enter a new note title and the note's text in the right-hand column.

## Installation
To run the Note Taker application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project's root directory in your terminal or command prompt.
3. Run the following command to install the required dependencies
`npm i`
4. Start the application by running the following command
`npm start`
5. Open your web browser and visit http://localhost:3000 or click the link display on terminal to access the Note Taker application.

##Usage
Once the Note Taker application is running, you can start using it by following these steps:

1. On the landing page, click on the "Get Started" button or the link to the notes page.
2. On the notes page, you will see a list of existing notes (if any) on the left-hand side.
3. To create a new note, enter a title and the note's text in the provided input fields on the right-hand side.
4. Once you have entered the note details, a Save icon will appear in the navigation bar at the top. Click on the Save icon to save the note.
5. The saved note will now appear in the left-hand column along with the other existing notes.
6. To view the contents of a specific note, click on its title in the left-hand column.
7. To create a new note after viewing an existing note, click on the Write icon in the navigation bar.
8. 
##Deployment
https://note-taker-js.herokuapp.com/

##Walkthrough Video 
[Note-Taker(Express JS).webm](https://github.com/JessFarron/note-taker/assets/126412050/af75f566-c290-4acc-867d-8d1de45ad631)
