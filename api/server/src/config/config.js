require("dotenv").config();

module.exports = {
  // If using onine database
  // development: {
  //   use_env_variable: 'DATABASE_URL'
  // },

  development: {
    database: "click",
    username: "postgres",
    password: "ileana2020",
    host: "192.168.0.250",
    dialect: "postgres",
  },

  test: {
    database: "click",
    username: "postgres",
    password: "ileana2020",
    host: "192.168.0.250",
    dialect: "postgres",
  },

  production: {
    database: "click",
    username: "postgres",
    password: "ileana2020",
    host: "192.168.0.250",
    dialect: "postgres",
  },
};
