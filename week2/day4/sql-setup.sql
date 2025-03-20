-- Create the database (run this in psql before running the Python code)
CREATE DATABASE restaurant_db;

-- Connect to the database
\c restaurant_db

-- Create the Menu_Article table
CREATE TABLE Menu_Article (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(30) NOT NULL,
    item_price SMALLINT DEFAULT 0
);
