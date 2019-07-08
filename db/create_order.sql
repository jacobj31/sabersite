INSERT INTO orders (user_id, total, address, city, state, zipcode, country)
VALUES ($1, $2, $3, $4, $5, $6, $7);

SELECT MAX(order_id) FROM orders;