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

CREATE TABLE listing (
  id int NOT NULL AUTO_INCREMENT, 
  about text NOT NULL,
  details text NOT NULL,
  reviews text NOT NULL,
  PRIMARY KEY (ID)
);
