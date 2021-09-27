# From Busk 'til Dawn

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![Material UI](https://img.shields.io/badge/materialui-%230081CB.svg?style=for-the-badge&logo=material-ui&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![CircleCI](https://img.shields.io/badge/CIRCLECI-%23161616.svg?style=for-the-badge&logo=circleci&logoColor=white) ![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

## About

Final project for Hackreactor 2021. The Project involved working with a client to develop a full-stack app from the ground up. Busk 'til Dawn is a geolocation application to schedule, plan, and track street performance events. Using Google maps users can view any nearby event pins based on either the users current position or an input location.

Users can schedule their own events by dropping a pin on the map. Users can also track their attending and hosted event schedule and view other user profiles.

User login facilitated through PassportAuth, user data and calendar stores using MongoDB and Mongo Atlas, and geolocation service implemented through MongoDB Geospatial Queries.

## Requirements

[Node.js](https://nodejs.org) necessary for running scripts and installing dependencies via 'npm'.

## Installation/Setup

1. Clone this repository
2. Using the terminal navigate inside the repository
3. run `npm install` to install the required dependencies
4. run `npm run bundle-dev` or `npm run bundle-prod` to build the project with either development or production settings and serve the resulting build on `localhost:3005`

## Usage
Here is the public version of [Busk 'til Dawn](https://gentle-ocean-96036.herokuapp.com/)

## Roadmap
On page load, you will see the interactive map set to the default location for your area. In the case, Denver. You will also see the calendar of events within 30miles that will take place over the next 24hrs. If you attempt to add an event when not logged in, you will receive a notification instructing you to login in order to add events.

![altText](./readme-images/1.png)


Curious about a specific performers performances? Click any of the heading and the calendar view will sort accordingly by performer name, time, performance genre, or distance.

![altText](./readme-images/2.png)


Curious about events but don't want to login? No worries! You can still click an event to see the details pop up in the map view.

![altText](./readme-images/3.png)


At this you want to attend the event and realize you may forget. Time to login! Create an account with validation for email, password length, password complexity, and password consistency

![altText](./readme-images/9.png)


Already have an account? Login to view your existing schedule

![altText](./readme-images/4.png)


Once logged in, click the Account Setting button in the upper right to see your profile, add a cashapp link, or change your default zipcode.

![altText](./readme-images/5.png)


Once logged in, events you are hosting will appear in green and events you are attending will apear with minus signs. Want to add an event to your calendar? Click the plus sign and it will become a minus and add the event and the details of that event will pop up on the map.
![altText](./readme-images/6.png)

Only want to see the events you're attending or hosting? Click the schedule tab and all other events will disappear.

![altText](./readme-images/7.png)


Want to perform? Click a location on the map and you'll be prompted to add details for your event. Once it's added, the calendar will display it in real time once you're in the right location/timeframe.

![altText](./readme-images/10.png)


Find a performer you're excited about? Click their name and you'll see their public profile including a CashApp link for tips! Their profile also includes a list of their upcoming performances.

![altText](./readme-images/8.png)


## Authors

#### Keanu Hasty
<a href="https://github.com/hastyk52" target="_blank">
<img src=https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.linkedin.com/in/keanu-hasty/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>

#### JJ Marquis
<a href="https://github.com/JJMrqs" target="_blank">
<img src=https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.linkedin.com/in/jj-marquis/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>

#### Jordan Trimarchi
<a href="https://github.com/Jordan-Trimarchi" target="_blank">
<img src=https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.linkedin.com/in/jordan-trimarchi/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>

#### Alisha Edington
<a href="https://github.com/alishaedington" target="_blank">
<img src=https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
</a>
<a href="https://www.linkedin.com/in/alisha-edington/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>