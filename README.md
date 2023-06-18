# DiagonAlly

## A full stack crud app that allows you to store your favorite locations in one place

Have you ever had a discussion with your friends about your favorite places? At some point, you start to realize that there are too many places you like to go to and remembering all of them has become a hassle. This is where DiagonAlly comes in. 

* Enables quick lookup for any location in the world, powered by the Google Maps API
* Allows for easier sorting of these locations through categories
* Secure user authentication and data protection through the use of bcrypt and JWT

Check out the deployed website here: https://diagon-ally-front.vercel.app/

Check out the backend code here: https://github.com/Sajid2001/diagon-ally-server

## How to use

DiagonAlly is very simple to use. Just create a category, search any location you have in mind for that category, and save it. 

### Category Creation

![ezgif com-video-to-gif](https://github.com/Sajid2001/diagon-ally-front/assets/60523377/68228faf-f795-4c4a-9058-39609fe8aba5)

### Location Lookup

![ezgif com-video-to-gif (1)](https://github.com/Sajid2001/diagon-ally-front/assets/60523377/1f5db952-42af-4023-b4a3-97693192bce9)

## How to tweak this project for yourself

1. Download the project and add the environment variables to both the backend and frontend folders (```.env``` in the back and ```.env.local``` in the front).
2. Run ```npm install``` inside both folders to download all dependecies.
3. Run ```nodemon app.js``` on the backend and ```npm start``` on the frontend.

For database access, you can either create your own mongodb database and plug in your connection URI or you can manipulate the project files so you can use your database of choice. 

### Environment Variables Needed:

Backend:
* ```PORT``` = Your port number of choice (anything but 3000)
* ```MONGODB_URI``` = The connection URI to your MongoDB database
* ```GOOGLE_API_KEY``` = You can get this by signing up for a Google Maps API key
* ```JWT_SECRET```= You can go to an online password generator and slot this into your environment variables

Frontend:
* ```REACT_APP_API_URL``` = your server link, whether it's deployed or on localhost

## Find any bugs?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tab above. If you would like to submit a Pull Request with a fix, reference the issue that you created.

## Q & A

### I logged in and nothing happened.

The log in is, in fact, working. The issue is that the deployed server shuts down whenever the page is not being used by anyone. It takes a bit of time for the server to reboot for the first time. It looks like the log in is not working, when it really is. That being said, there are plans to add a loading message to the site. Stay tuned!

### What are plans for the future with this project?

As mentioned earlier, a loading message will be added in the near future. Another possible feature is for multiple locations to be shown before being added to a category. If you have any further suggestions, let the project owner know so they can happen.

