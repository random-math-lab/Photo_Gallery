DROP DATABASE IF EXISTS photos;

CREATE DATABASE photos;

USE photos;

CREATE TABLE  (
  id int NOT NULL AUTO_INCREMENT,
  linstingId int NOT NULL,
  photo  text NOT NULL, 
  description text NOT NULL,
  PRIMARY KEY (ID)
);
