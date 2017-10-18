CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR (100),
    password VARCHAR (100),
    user_timestamp TIMESTAMP DEFAULT NOW()
)

CREATE TABLE IF NOT EXISTS properties (
    property_id SERIAL PRIMARY KEY,
    property_name VARCHAR (100),
    description VARCHAR (500),
    address VARCHAR (100),
    city VARCHAR (100),
    state VARCHAR (2),
    zip VARCHAR (5),
    url TEXT,
    mortgage_total DECIMAL(2),
    mortgage_monthly DECIMAL(2),
    desired_rent DECIMAL(2),
    user_id INTEGER REFERENCES users(user_id),
    property_timestamp TIMESTAMP DEFAULT NOW()
)
