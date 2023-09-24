# TourHub: The Definitive Guest Management & Marketing Platform for Sales Excellence
Welcome to TourHub, a robust and tailored solution crafted with the savvy sales marketer, Luisa Ramirez, in mind. This all-in-one platform functions as an intuitive dashboard, empowering Luisa to manage her guest enrollments effortlessly. Beyond guest management, TourHub enriches your marketing strategy by displaying crucial premium content—ranging from event locations and time schedules to dark days, retail values, and even a teaser via an engaging YouTube preview.

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

More than just a glorified calculator—it's your ultimate sales enablement platform. Designed specifically for my wife to present her compelling premium and gift offerings to potential guests, TourHub streamlines the entire guest onboarding process.

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

Special thanks to the following resources for guidance and inspiration:

- **Bootstrap Documentation**: Comprehensive guide on how to get started with Bootstrap.  
  [Bootstrap Getting Started](https://getbootstrap.com/docs/5.3/getting-started/introduction/)

- **YouTube Tutorial**: Provided valuable insights into the project development process.  
  [Watch the Video](https://www.youtube.com/watch?v=fBcqjYfVCdY)

- **OpenAI Chat**: For AI-related guidance and APIs.  
  [OpenAI Chat](https://chat.openai.com/)

- **Additional YouTube Resource**: For further information and tutorials not to mention the iframes.  
  [YouTube](https://www.youtube.com/)

# NPM Installations

Here are all the dependecies and npm commands istalled during the build:

- **Create a new React App**:  
  ```npx create-react-app .```
  
- **Install Backend Dependencies**:  
  ```npm i cors dotenv express pg pg-hstore sequelize react-router-dom```
  
- **Install Sequelize CLI as Dev Dependency**:  
  ```npm install --save-dev sequelize-cli```
  
- **Initialize Sequelize**:  
  ```npx sequelize init```
  
- **Generate Guest Model**:  
  ```sequelize model:generate --name Guest --attributes guest_id:integer,name:string,owner:string,non_owner:string,gift:string,pp:integer,notes:string```

- **Generate Seeder for Guests**:  
  ```sequelize seed:generate --name guests```

- **Run All Seeder Files**:  
  ```sequelize db:seed:all```
  (this generates all seeder files)
  
- **Run a Specific Seeder File (guests.js in this case)**:  
  ```sequelize db:seed --seed 20230909185853-guests.js```
  (this generates only a specific seeder file which in this case is guests.js)

- **Run the Server**:  
  ```node server/server.js```

- **Build the React App**:  
  ```npm run build```
  (this minifies and optimize our React app down into a build folder with a bunch of static files; you need to npm run build every time you make an improvement or changes)
  
- **Install Supabase**:  
  ```npm install @supabase/supabase-js```
  
- **Install Bootstrap**:  
  ```npm install bootstrap```
  
- **Install Popper.js**:  
  ```npm install popper.js```

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

- **Supabase**: Used as the backend service, providing real-time databases and authentication.
- **React**: Utilized for building the user interface components.
- **Node**: The runtime environment for executing server-side JavaScript code.
- **JSON**: Used for storing and transporting data.
- **JavaScript**: The primary programming language for frontend and backend logic.
- **HTML**: Markup language for creating the structure of web pages.
- **Bootstrap**: CSS framework for responsive and mobile-first design.
- **CSS**: Used for styling and layout.

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