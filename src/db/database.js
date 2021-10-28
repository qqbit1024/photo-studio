require("dotenv").config();

module.exports = {
  development: {
    username: 'admin',
    password: 123,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.HOST,
    dialect: "postgres",
  },
};
