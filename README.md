# Introduction

This is the UI frontend for EasyDosh Project bootstraped using the React Boilerplate.

## How to start developing
1. Install yarn if not installed using `npm install -g yarn`
2. Download all packages using `yarn` by simply typing `yarn` in the root of the project
3. Start the development server by running `yarn start`

## How to deploy
Deployment is done using Docker. Simply run `docker build -t ed-web .`
Then simply start with `docker run -it -p 8090:80 ed-web`
