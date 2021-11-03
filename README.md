# Cypress Basics

## Download & Configuration
1. ```npm init``` --> package.json
2. ```npm install cypress``` --> package-lock.json , node_modules
3. ```npm install prettier``` --> package.json updated
make configuration file ".prettierrc" to see prettier code
4. ```npx cypress open``` --> open cypress ui  
5. Intelligent code completion 
Created cypress.json
Created cypress folder
Into the cypress file
create "tsconfig.json"
then restart editor

## Create Scripts
package.json > "scripts" 
```npm run cy:open```  -> open cypress ui 
```npm run cy:run``` -> run headless test ,  create video files


## Cypress folder system
Integration > examples > login.spec.js

## cypress.json file setup
    "baseUrl" : "your base url here" - write your base url
    "watchForFileChanges": false - cypres run your test after each save this one stop it! :)
    "viewPortWidth":1000 - default browser width
    "viewPortHeigth" :600 - default browser heigth
    "waitForAnimations" : true - it waits animation is finished
    "animationDistanceThreshold":20 - it waits between animation
    "defaultCommandTimeout":5000 - default commant time our
    "execTimeout": 60000 - total exectime out
    "pageLoadTimeOut": 60000,
    "requestTimeout":15000,
    "responseTimeout" :15000,
    "video":false - if we run test with headles mode it crates videos file this one stops it
    "failOnStatusCode":false

## To use xpath in cypress
```npm install cypress-xpath```

## To run single test file in headless mode
```npx cypress run --spec='cypress/integration/examples/login.spec.js'```
# cypress-basic-boilerplate
