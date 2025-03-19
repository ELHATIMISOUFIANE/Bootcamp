--1
SELECT * FROM language;
--2
SELECT film.title, film.description, language.name
FROM film
JOIN language ON film.language_id = language.language_id;
--3
SELECT film.title, film.description, language.name
FROM language
LEFT JOIN film ON language.language_id = film.language_id;
--4
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

-- Ajout de nouveaux films
INSERT INTO new_film (name) VALUES ('The Big Blue');
INSERT INTO new_film (name) VALUES ('Amelie');
INSERT INTO new_film (name) VALUES ('La Haine');
--5
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255) NOT NULL,
    score INTEGER CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

--6
-- Supposons que le film_id=1 correspond à 'The Big Blue' et language_id=1 correspond à l'anglais
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (1, 1, 'Beautiful underwater film', 9, 'A visual masterpiece that perfectly captures the beauty of the ocean depths.');

-- Supposons que le film_id=2 correspond à 'Amelie' et language_id=1 correspond à l'anglais
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES (2, 1, 'Parisian charm', 8, 'A delightful romantic comedy that shows Paris at its most beautiful.');

--7
DELETE FROM new_film WHERE id = 1;