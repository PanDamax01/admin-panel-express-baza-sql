Admin Panel Express with SQL Database
This is a simple admin panel web application built with Express and SQL database.

Overview
The app provides a basic admin interface that allows managing users and various other entities. It uses Express for the backend API and routing, Sequelize for interacting with the SQL database, and React for the frontend.

The main features include:

User management (add, edit, delete users)
Management of additional entities (e.g., classrooms, replacements, sliders, headers)
Basic login system with JWT tokens
Simple responsive design with Sass
The database contains multiple tables to support different entities. The app provides a simple REST API for CRUD operations on these resources.
Installation
To install and run the app:

Clone the repo
Run npm install
Configure the database connection in /config/config.json
Run npm run migrate to create the database schema
Run npm start to start the app
Access the app at http://localhost:3000
