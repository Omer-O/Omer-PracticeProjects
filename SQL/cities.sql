--comment in SQL
DROP TABLE IF EXISTS cities;

CREATE TABLE cities( --CREATE TABLE is a command in SQL in the () we need
--do define the columns.
    id SERIAL PRIMARY KEY, --Serial is increment in 1 every row in the id columns.
    city VARCHAR(255) NOT NULL,--VARCHAR - the DATA type. - the 255 is the max number of
    --chrichters that a user can enter in the search
    --NOT NULL means that I MUST! insert a city, whenever we create a new row in mz table.
    country VARCHAR(255),
    population INTEGER
); -- to run the command we need to go to the terminal.

--creating data in table:
--INSERT INTO cities (col1, col2, col3) -- as a parameter we pass the columns we want to chnage them.
INSERT INTO cities (city, country, population)
VALUES ('Berlin', 'DE', 3000000); --here we insert the new information we want to insert to the
--cities Table.


INSERT INTO cities (city, country, population)
VALUES ('New York', 'USA', 9000000);


INSERT INTO cities (city, country)
VALUES ('Munich', 'DE');

-- how to read daga from a table
--SELECT col1, col2 FROM  name_of_table;
--SELECT city, country FROM  cities;

-- SELECT * FROM cities;

--A WHERE clause will specify a specific row or series
SELECT * FROM cities WHERE country = 'DE';-- here we ask to present only the


--UPDATING a row that already exists in our table:

--UPDATE name_of_table SET collumn_to_update = value WHERE name_of_column = 'name_of_row';

--option 1 - to update ONLY the Munich row:
UPDATE cities
SET population = 2000000
WHERE id = 3;



--option 2 - to update ONLY the Munich row:
-- UPDATE cities
-- SET population = 2000000
-- WHERE city = 'Munich';


--DELETE a row:
--option 1
DELETE FROM cities WHERE id = 2;
--option 2
-- DELETE FROM cities WHERE city = 'New York';
-- --option 3
-- DELETE FROM cities WHERE country = 'USA';
-- --option 4
-- DELETE FROM cities WHERE country <> 'DE';

SELECT * FROM cities; --important to place this line after a change was made
--without it we cannot view the table and seet the actual change we made.
