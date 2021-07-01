setup:
-make a .env file with the key

-npm run install
-npm run build






Clone the repo: $ git clone https://github.com/
Download/open git BASH terminal and navigate to the (name of the project)/ directory on your computer
Open with VSCode 
Run "npm install" in the git BASH terminal to install dependencies

Go to (api sit here) 
**create a free account- depends on the api site if this is needed**
Generate an API key 
Create/touch .env file in the root directory in VS Code
Paste the API key in the .env file as "API_KEY = your api key here"
In VSCode navigate to your .gitignore file and add your .env to the bottom of the list on a new line 
Run "npm run build" in the git BASH terminal to bundle all of the files
Run "npm run start" in the terminal to create and launch the development server

npm install dotenv-webpack@2.0.0 --save-dev