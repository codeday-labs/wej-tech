# Running the Repository
Going through on what to install and what commands to run

# Create a virtual environment

<aside>
Use commands to install venv and make one

- `pip install virtualenv`
    - used to install the virtualenv library
- `python3 -m venv env`
    - create a virtualenv named env
- `source env/Scripts/activate`
or `source env/bin/activate`
    - to activate the virtualenv that you just created
    - the activate file should be within this directory
</aside>

# Installing Django, Django REST Framework, Django Cors Headers, Djoser, PILLOW, Django JSON Web Token

<aside>
Use command to install Django

Make sure to have your virtual environment activated before using this command!

- `pip install django-cors-headers django djangorestframework djangorestframework-simplejwt djoser Pillow`
    - used to install django and the rest framework, Django Cors Headers, Djoser, PILLOW, Django JSON Web Token
</aside>

# Installing React + Babel + Webpack

<aside>
Use commands to install React, Babel, and Webpack

***Before we get into what commands to use, I would like to explain what these libraries are that we’re going to install. This is information I got from the video, I do not have full knowledge of these other libraries other than this. They help us run React and Django together.***

### What is Webpack?

It will transpile our javascript into one single file, this will help us work with Django and React.

### What is Babel?

It will help us make our website compatible with different browsers by transpiling aswell.

---

Make sure to have your directory in the frontend folder! directory → `wej-tech/project/frontend`

- `npm init -y`
    - this is kind of like a virtualenv but for JavaScript
- `npm install @babel/core @babel/preset-env @babel/preset-react babel-loader react react-dom react-router-dom webpack webpack-cli --save-dev`
    - creates a node module folder for our React app that uses Javascript libraries, kind of like a virtualenv for Javascript too
    - used to install all the libraries needed to run the webapp, these will install in the node module folder
</aside>

# Installing Charka UI

<aside>
- `npm i @chakra-ui/react @chakra-ui/theme @chakra-ui/theme-tools react-icons`
    - run this command first, then continue with the second one.
- `npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6`

</aside>

# Installing Axios, React Redux, React Router Dom

<aside>
    
Make sure to have your directory in the frontend folder! directory → `wej-tech/project/frontend`
-`npm install --force axios react-router-dom redux redux-devtools-extension react-redux@5.1.2 redux-thunk dotenv-webpack`

</aside>

# Running the Web App

<aside>
Use commands to run the webapp

***You will need to have two consoles/terminals to complete the running of the webapp, one for Django and the other for React. You can open multiple terminals within VSCode by pressing a “+” button some where near the bottom right of the screen.***

Make sure to have your directory in the project folder! directory → `wej-tech/project`

- `python manage.py runserver`
    - this will run Django part of the webapp

Make sure to have your directory in the frontend folder! directory → `wej-tech/project/frontend`

- `npm run dev`
    - this will run the React part of the webapp and there will be an error/warning, but it’s okay because it’s saying we’re running using a dev build, which is what we should be using, the website will still run despite this warning.
</aside>
