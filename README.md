# Welcome to Flights Service

## Project setup

- Clone the project
- Run `npm install` to install all dependencies
- Create a `.env` file in the root directory and add the following environment variables
  - `PORT` - Port number for the server to run on
- Inside the `src/config` folder, create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <your_db_name>,
    "password": <your_db_password>,
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate` to create the database and the tables.

## DB Design

- Airplane Table
- Flight
- Airports
- City

- A flight belongs to an airplane but one airplane can be used for multiple flights
- A city has many airports but an airport belongs to only one city
- One airport can have multiple flights but a flight can only have one airport

## Tables

### City -> id, name, createdAt, updatedAt

### Airport -> id, name, address, cityId, createdAt, updatedAt

Relationships -> A city has many airports but an airport belongs to only one city (One to Many)
