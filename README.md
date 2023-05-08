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

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
