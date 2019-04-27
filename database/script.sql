CREATE DATABASE ng_games_db;
USE ng_games_db;

CREATE TABLE games(
    id INT(11) NOT NULL IDENTITY(1,1) PRIMARY KEY,
    title VARCHAR(180) NOT NULL,
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
