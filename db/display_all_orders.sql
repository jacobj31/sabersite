SELECT u.first_name, u.last_name, o.address, o.city, o.state, o.zipcode, o.country, o.order_id, p.name
FROM force_users u
JOIN orders o ON u.user_id = o.user_id
JOIN orders_products op ON o.order_id = op.order_id
JOIN products p ON op.product_id = p.product_id;