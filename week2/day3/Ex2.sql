-- Supposons que language_id=2 correspond au français
UPDATE film SET language_id = 2 WHERE film_id IN (1, 2, 3);
--2. Clés étrangères pour la table client
sqlCopySELECT
    tc.constraint_name,
    tc.table_name,
    kcu.column_name,
    ccu.table_name AS referenced_table_name,
    ccu.column_name AS referenced_column_name
FROM
    information_schema.table_constraints AS tc
    JOIN information_schema.key_column_usage AS kcu
      ON tc.constraint_name = kcu.constraint_name
    JOIN information_schema.constraint_column_usage AS ccu
      ON ccu.constraint_name = tc.constraint_name
WHERE tc.constraint_type = 'FOREIGN KEY' AND tc.table_name = 'customer';
Les clés étrangères dans la table customer affectent les insertions car nous devons nous assurer que les valeurs que nous insérons pour ces colonnes existent déjà dans les tables référencées.
--3. Suppression de la table customer_review
sqlCopyDROP TABLE customer_review;
--4. Locations encore en circulation
sqlCopySELECT COUNT(*)
FROM rental
WHERE return_date IS NULL;
--5. 30 films les plus chers en circulation
sqlCopySELECT film.title, film.replacement_cost
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC
LIMIT 30;
--6. Recherche des films pour votre ami
--a. Film sur un lutteur de sumo avec Penelope Monroe
sqlCopySELECT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE (film.description ILIKE '%sumo%' OR film.title ILIKE '%sumo%')
AND (actor.first_name = 'Penelope' AND actor.last_name = 'Monroe');
--b. Court documentaire noté "R"
sqlCopySELECT film.title
FROM film
JOIN category ON film.category_id = category.category_id
WHERE category.name = 'Documentary'
AND film.length < 60
AND film.rating = 'R';
--c. Film loué par Matthew Mahan pour plus de $4
sqlCopySELECT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN payment ON rental.rental_id = payment.rental_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND payment.amount > 4.00
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01';
--d. Film avec "boat" dans le titre/description et DVD cher
sqlCopySELECT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC
LIMIT 1;