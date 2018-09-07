/* Create and use the starwars db */
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;


/* Create a table for all your star wars characters */
CREATE TABLE burgers (
	id Int( 11 ) AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR( 255) NOT NULL,
    devoured BOOL DEFAULT false,
	/* Set ID as primary key */
	PRIMARY KEY ( id )
    );
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', False);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bleu Cheese Burger', False);
INSERT INTO burgers (burger_name, devoured) VALUES ('Bacon Burger', False);
INSERT INTO burgers (burger_name, devoured) VALUES ('Chicken Bacon Swiss Burger', False);
