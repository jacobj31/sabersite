UPDATE products
SET name = $2, category = $3, price = $4, image = $5, description = $6
WHERE product_id = $1;
SELECT * FROM products;