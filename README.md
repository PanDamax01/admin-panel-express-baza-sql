# Admin Panel Express with SQL Database

## Overview
This is a simple admin panel web application built with Express and SQL database.

The app provides a basic admin interface that allows managing users and various other entities. It uses Express for the backend API and routing, Sequelize for interacting with the SQL database, and React for the frontend.

### Main features include:
- User management (add, edit, delete users)
- Management of additional entities (e.g., classrooms, replacements, sliders, headers)
- Basic login system with JWT tokens
- Simple responsive design with Sass

The database contains multiple tables to support different entities. The app provides a simple REST API for CRUD operations on these resources.

## Installation
To install and run the app:

1. Clone the repo
2. Run `npm install`
3. Configure the database connection in `/config/config.json`
4. Run `npm run migrate` to create the database schema
5. Run `npm start` to start the app
6. Access the app at [http://localhost:3000](http://localhost:3000)

