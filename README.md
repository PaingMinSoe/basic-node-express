
# Basic Express App in MVC Architecture

The project is to demonstrate the usage of MVC architecture in express.js.

## Project Structure
```
root
├── controllers
│   ├── home.js
│   └── user.js
├── data
│   └── users.json
├── models
│   └── user.js
├── node_modules
│   └── packages
├── public
│   └── css
│       ├── card.css
│       ├── main.css
│       └── input.css
├── routes
│   ├── home.js
│   └── users.js
├── views
│   └── includes
│   │   ├── end.ejs
│   │   ├── head.ejs
│   │   └── navigation.ejs
│   ├── 404.ejs
│   ├── index.ejs
│   └── users.ejs
├── app.js
├── package-lock.json
└── package.json
```

## Project Overview
The project is to demonstrate the simple usage of MVC architecture with Express using Node.js. 
The MVC architecture separates the app into three components: Model - View - Controller. 

- **Model**: Model is representation of the data in the application. Model will allow users to work with the data such as fetching, saving data in the database, etc. **(In the project, dummy json file is used as a database to save user data instead of real database such as MySQL, MongoDB)**.
- **View**: View is the interface that users will see to interact with the application. View will include UI components such as navigation, buttons, textboxes, etc.
- **Controller**: Controller is the medium between the view and the model. Controller will receive the requests sent from users and process these requests and manipulate the data using model, then in which later will be sent back to view to display the results. 

