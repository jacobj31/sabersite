INSERT INTO force_users(first_name, last_name, email, hash)
VALUES (${first_name}, ${last_name}, ${email}, ${hash})
RETURNING *;