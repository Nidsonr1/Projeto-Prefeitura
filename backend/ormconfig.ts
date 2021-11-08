module.exports = {
  "type": "postgres",
  "port": 5432,
  "host": "localhost", 
  "username": process.env.DB_USER,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_NAME, 
  "migrations": ["./src/database/migrations/*.ts"],
  "entities": ["./src/**/entities/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}