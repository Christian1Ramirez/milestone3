# TourHub: Your Ultimate Guest Management & Marketing Platform
Welcome to TourHub, the comprehensive solution designed specifically for the unparalleled sales marketer, Luisa Ramirez. This platform serves as an intuitive control panel where Luisa can effortlessly manage the guests she enrolls. In addition, TourHub provides a seamless way to showcase vital premium information including event location, time schedules, dark days, retail value, and even a sneak peek via a short YouTube preview. 

## Table of Contents

- [Usage and Features](#usage-and-features)
- [NPM Installations](#npm-installations)
- [Acknowledgments](#acknowledgments)
- [Built With](#built-with)
- [Deployment](#deployment)
- [Changelog](#changelog)
- [Authors](#authors)
- [Post MVP Plans](#post-mvp-plans)

# Usage and Features: The Multifaceted TourHub Experience

Welcome to TourHub, more than just a calculator—it's your ultimate sales enablement platform. Designed specifically for my wife to present her compelling premium and gift offerings to potential guests, TourHub streamlines the entire guest onboarding process.

## Tours Page: Your Control Center

At the heart of TourHub is the "Tours" page, engineered to be a comprehensive management system. Here, users can:

- **Track Guest Sign-ups**: Keep an organized record of each guest signed up for a tour with a sales representative.
  
- **Dynamic 'Pay Per Tour' Calculation**: The platform allows for manual input of a fluctuating number that represents the "pay per tour." This number is then automatically adjusted by subtracting the value of the chosen premium, generating an accurate pay per tour figure.

- **Ownership Status**: Conveniently indicate whether guests own or do not own property with the hotel, offering valuable context for each interaction.
  
- **Effortless Editing**: Modify saved guest information with ease and accuracy.
  
## User Authentication for Enhanced Security
  
To ensure privacy and data integrity, the Tours page is safeguarded by robust user authentication features, including:

- **User Sign-up**: New users can easily create an account.
  
- **User Login**: Returning users can securely access their data.
  
As a result, the Tours page remains inaccessible unless you are logged in, providing a secure and reliable experience.

## Optimized for Multiple Devices
  
TourHub has been optimized for a seamless experience across phones, desktops, and tablets, instilling confidence regardless of your chosen device.

# Acknowledgments
https://getbootstrap.com/docs/5.3/getting-started/introduction/
https://www.youtube.com/watch?v=fBcqjYfVCdY
https://chat.openai.com/
https://www.youtube.com/


# NPM Installations
npx create-react-app .
npm i cors dotenv express pg pg-hstore sequelize react-router-dom
npm install --save-dev sequelize-cli
npx sequelize init
sequelize model:generate --name Guest --attributes guest_id:integer,name:string,owner:string,non_owner:string,gift:string,pp:integer,notes:string       
sequelize seed:generate --name guests
sequelize db:seed:all 
this generates all seeder files
sequelize db:seed --seed 20230909185853-guests.js
this generates only a specific seeder file which in this case is guests.js
node server/server.js
npm run build
this minifies and optimize our react app down into a build folder with a bunch of static files
you need to npm run build every time you make an improvement or changes
npm install @supabase/supabase-js
npm install bootstrap
npm install popper.js 

# Changelog

## Updates and Commits

### September 21, 2023

- **Christian1Ramirez:** Saving before merging into main

### September 19, 2023

- **Christian1Ramirez:** Home pretty much completed
- **Christian1Ramirez:** Home.css coming along

### September 18, 2023

- **Christian1Ramirez:** Updated shadow for all CSS
- **Christian1Ramirez:** Improved cards under home page
- **Christian1Ramirez:** Added Home.jsx/css background
- **Christian1Ramirez:** Premiums.css completish

### September 17, 2023

- **Christian1Ramirez:** Premiums.jsx/css coming along
- **Christian1Ramirez:** Completed Tours.jsx/css & started Premiums.jsx/css
- **Christian1Ramirez:** Added color for JSX save button
- **Christian1Ramirez:** Adjusted .css code layout with Prettier

### September 16, 2023

- **Christian1Ramirez:** Updated navbar.jsx.css, home.css, login.jsx.css; Deleted logout.jsx & App...
- **Christian1Ramirez:** Added login.css, styles folder with .css files, and images folder in public with...
- **Christian1Ramirez:** Completed Navbar.jsx/navbar.css
- **Christian1Ramirez:** Added CSS to navbar and added collapse functionality while on smaller window

### Earlier Commits

- **Christian1Ramirez:** Added projected pay calculator.jsx and integrated it into Tours.jsx
- **Christian1Ramirez:** Updated PP to pay per tour, added projected pay in tours.jsx, updated...
- **Christian1Ramirez:** Added Premiums.jsx, gifts_controller.js, model/migration/seeder for Premiums
- **Christian1Ramirez:** Cleaned up Tours.jsx a bit
- **Christian1Ramirez:** Added edit function to tours and made code more DRY
- **Christian1Ramirez:** Added gift dropdown to add a new guest in tours
- **Christian1Ramirez:** Added front-end delete functionality to guests table

### Even Earlier Commits

- **Christian1Ramirez:** Added get & get single functionality to guests_controller.js
- **Christian1Ramirez:** Added put/delete functionality to guests_controller.js
- **Christian1Ramirez:** Added delete functionality to Tours.jsx
- **Christian1Ramirez:** Tours only accessible if logged in, redirects to login if not
- **Christian1Ramirez:** Signup & login fully functional
- **Christian1Ramirez:** Signup works but login, post error when trying to login
- **Christian1Ramirez:** Added navbar, home, login, logout, signup and all routes are functional
- **Christian1Ramirez:** Added supabaseClient.js & login.jsx
- **Christian1Ramirez:** Added build folder
- **Christian1Ramirez:** New branch for the coal mine
- **Christian1Ramirez:** Guests table displays under Tours

# Built With
Supabase
React
Node
Json
Javascript
Html
Bootstrap
Css

# Deployment
https://tourhub.onrender.com/

# Authors
Christian J Ramirez

## Post MVP Plans

Here are the plans for enhancing the project after reaching the minimum viable product (MVP) stage:

- **Switch to Tailwind**: Remove all Bootstrap code and transition to Tailwind as a learning experiment.
- **Homepage UX**: Work on improving the user experience on the homepage, particularly in how data is displayed.
- **Premiums Display**: Refactor and improve the way premiums are displayed to the user.
- **Search Feature**: Implement a search functionality for easier data retrieval.
- **Data Visualization**: Add graphical representations to display information for custom date ranges.
- **Optimization**: Focus on improving performance across various aspects of the application.
- **Market to Management**: Eventually aim to pitch the platform to managerial roles for broader adoption.
