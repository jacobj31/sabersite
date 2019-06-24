CREATE TABLE force_users (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    email VARCHAR,
    hash TEXT,
    is_admin BOOLEAN DEFAULT FALSE
);

insert into force_users(first_name, last_name, email, hash)
values ('jim', 'james', 'jamse@gmail.xom', 'fklajnwe');

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR,
    category VARCHAR,
    price DECIMAL,
    image VARCHAR,
    description TEXT
);

insert into products (name, category, price, image, description)
values ('hat', 'hat', 12.12, 'hat', 'just a hat' ); x3

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES force_users(user_id),
    total DECIMAL,
    date DATE,
    fullfilled BOOLEAN DEFAULT FALSE
);

insert into orders (user_id, total)
values (1, 28.00);

CREATE TABLE orders_products(
    order_id INT REFERENCES orders(order_id),
    product_id INT REFERENCES products(product_id));

insert into orders_products(order_id, product_id)
values(1, 1);

insert into orders_products(order_id, product_id)
values(1, 2);

select * from force_users;
select * from products;
select * from orders;
select * from orders_products;

UPDATE products
SET name = ${name}, category = ${category}, price = ${price}, image = ${image}, description = ${description}
WHERE product_id = ${product_id};
SELECT * FROM products;