
DROP TABLE IF EXISTS actors;

CREATE TABLE actors(
    Name TEXT,
    Age INTEGER,
    Number_of_Oscars INTEGER
);

--creating data in table:
INSERT INTO actors (Name, Age, Number_of_Oscars)
VALUES ('Leonardo DiCaprio', '41', 1);
INSERT INTO actors (Name, Age, Number_of_Oscars)
VALUES ('Jennifer Lawrence', '25', 1);
INSERT INTO actors (Name, Age, Number_of_Oscars)
VALUES ('Samuel L. Jackson', '67', 0);
INSERT INTO actors (Name, Age, Number_of_Oscars)
VALUES ('Meryl Streep', '66', 3);
INSERT INTO actors (Name, Age, Number_of_Oscars)
VALUES ('John Cho', '43', 0);

-- Select Oscars:
SELECT * FROM actors WHERE Number_of_Oscars > 1;

-- Select Age:
SELECT * FROM actors WHERE Age > 30;

-- Display Table:
SELECT * FROM actors;
