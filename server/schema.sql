DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) DEFAULT '' NOT NULL
);

-- Solutions Video messages TABLE
CREATE TABLE messages (
  id INT(11) AUTO_INCREMENT PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  roomname VARCHAR(255) NOT NULL,
  user_id INT(11),
  FOREIGN KEY (user_id) REFERENCES users(id),

);

-- My rooms table
-- CREATE TABLE rooms (
--     id INT(11) AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) DEFAULT '' NOT NULL
-- );


-- My messages table with room as a foreign key > must also edit models

-- CREATE TABLE messages (
--   id INT(11) AUTO_INCREMENT PRIMARY KEY,
--   text VARCHAR(255) NOT NULL,
--   room_id INT(11),
--   user_id INT(11),
--   FOREIGN KEY (user_id) REFERENCES users(id),
--   FOREIGN KEY (room_id) REFERENCES rooms(id)

-- );

-- Maybe INNER JOIN on many to many users to rooms ???
-- SELECT id FROM users, rooms
-- INNER JOIN



/*  Execute this file from the command line by typing:
 *    mysql -u student < server/schema.sql
 *  to create the database and the tables.*/

