# React News App

# React-App

It's a single page news app where a person can get all the news of the world at one place.

# Installation
For running my react app run the following commands:

1.first you need to run the command "npx create-react-app my-app"
2.You can replace project name "my-app" with some other name.
3.Then you have to select react by moving the arrow down to react.
4.Then you have to close your react app and need to open folder again.
5.After that run an install command npm start.

# For Tailwind Installation

Visit to Tailwindcss site,then open docs from navbar. Rest of the steps are mentioned below:

1.Then open the frameworks guide and open Create-React-App.
2.Now open your new terminal run this command "npm install -D tailwindcss "
3.After installing that run "npx tailwindcss init".
4.After that copy paste this code into tailwindconfig file and save it with ctrl+S
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
5.In last step you need to copy paste this code into index.css after removing all the css 
@tailwind base;
@tailwind components;
@tailwind utilities;

6.Now close the current deployment server and deploy the server with this command "npm run start"

and now you can use tailwind in your code.

