# JUTACHAPPAL

A footwear ecommerce platform designed for you to get access to the latest fasionista. A one of its kind online personalized store to recommend the most stylish footwear as per your needs. We bring you a huge collection, created around many themes and styles to bring you cult classic fashion.

### Demo

Live hosted Link: [Site link](https://jutachappal.netlify.app)

### App Screenshots

![Home page banner](https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/readme_screenshots%2FScreenshot%20(291).png?alt=media&token=78ce9531-90a3-45a7-bdd0-6121592b2a1b)

![Home page categories](https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/readme_screenshots%2FScreenshot%20(292).png?alt=media&token=7d1b3aac-21a2-4708-b171-030d5e2d6578)

![Home page sliders](https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/readme_screenshots%2FScreenshot%20(293).png?alt=media&token=7008baed-003a-4ef8-83f0-f4fdedfefabd)

![Home page brands and footer](https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/readme_screenshots%2FScreenshot%20(294).png?alt=media&token=52f894d6-89ca-442e-acd7-35c774e07709)

![Footwear page](https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/readme_screenshots%2FScreenshot%20(295).png?alt=media&token=7e7e23a8-366c-4973-9d5e-bc32353a8a11)

![Footwear details page](https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/readme_screenshots%2FScreenshot%20(296).png?alt=media&token=8ca388bb-227c-4f69-8d57-77bcbb0c26a8)

![Footwear details page related products](https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/readme_screenshots%2FScreenshot%20(297).png?alt=media&token=b92ec503-6053-448a-acce-e963ab3d60ed)

![Login pge](https://firebasestorage.googleapis.com/v0/b/webdevprojectsem1.appspot.com/o/readme_screenshots%2FScreenshot%20(298).png?alt=media&token=5b68f285-b878-492b-922a-52a13d069da2)

### Dev Tools / Technologies

1. Client side code written in **React**
2. Server side code written in **NodeJS** and **Express**.
3. **MongoDB Atlas** is used for maintaining database.
4. Api request handled using **Axios**.
5. Form fields managed using **React-Hook-Form**.
6. **React-slick** and **React-responsive-carousel** used for image sliders.
7. **React-toastify** used for sounding alerts and error management.
8. SVG icons referred from **React-icons**.
9. Server-side deployed on **Heroku**.
10. Front-end deployed on **Netlify**.

### Environment Variables

To run this project, you will need to add the following environment variables to your .env file in the server directory

`DB_USERNAME`
`DB_PASSWORD`
`DB_DATABASE`

### Installation

Follow the steps to setup a developement environment for this app:

- Clone this repo. Use the command, or simply download the zip file for code
```bash
  git clone https://github.com/HarshdeepSinghBatra/JutaChappal-Footwear-Ecommerce-Platform.git
```

- Set up client dependencies
```bash
  yarn install or npm install
```

- Set up server dependencies
```bash
  cd ./server
  yarn install or npm install
```

- Create .env file and add in all the environment variables

- Start the dev servers
```bash
  yarn start or npm start
  
  cd ./server
  nodemon server or node server.js