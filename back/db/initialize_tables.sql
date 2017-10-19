CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY, --Creates on its own
    username VARCHAR (100),
    password VARCHAR (100),
    user_timestamp TIMESTAMP DEFAULT NOW() --Creates on its own
)

CREATE TABLE IF NOT EXISTS properties (
    property_id SERIAL PRIMARY KEY, --Creates on its own
    property_name VARCHAR (100),
    description VARCHAR (500),
    address VARCHAR (100),
    city VARCHAR (100),
    state VARCHAR (2),
    zip VARCHAR (5),
    url TEXT,
    mortgage_total NUMERIC,
    mortgage_monthly NUMERIC,
    desired_rent NUMERIC,
    user_id INTEGER REFERENCES users(user_id),
    property_timestamp TIMESTAMP DEFAULT NOW() --Creates on its own
)
