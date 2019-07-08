CREATE TABLE force_users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    hash TEXT,
    is_admin BOOLEAN DEFAULT FALSE
);


CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR,
    category VARCHAR,
    price DECIMAL,
    image VARCHAR,
    description TEXT
);


CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES force_users(user_id),
    total DECIMAL,
    address VARCHAR,
    city VARCHAR,
    state VARCHAR,
    zipcode INT,
    country VARCHAR,
    shipped BOOLEAN DEFAULT FALSE
);


CREATE TABLE orders_products(
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id));


select * from force_users;
select * from products;
select * from orders;
select * from orders_products;

SELECT u.first_name, u.last_name, o.address, o.city, o.state, o.zipcode, o.country, o.order_id, p.name
FROM force_users u
JOIN orders o ON u.user_id = o.user_id
JOIN orders_products op ON o.order_id = op.order_id
JOIN products p ON op.product_id = p.product_id;