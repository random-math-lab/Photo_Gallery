DROP DATABASE IF EXISTS photos;

CREATE DATABASE photos;

USE photos;

CREATE TABLE photo (
  id int NOT NULL AUTO_INCREMENT,
  linstingId int NOT NULL,
  url text NOT NULL, 
  description text NOT NULL,
  PRIMARY KEY (ID)
);
