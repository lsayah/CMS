DROP TABLE IF EXISTS users_choose_tags;
DROP TABLE IF EXISTS posts_contain_tags;
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS tags;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    email VARCHAR(100),
    role VARCHAR(100),
    status VARCHAR(100),
    username VARCHAR(100),
    hashed_password VARCHAR(100),
    profile_picture VARCHAR(100),
    PRIMARY KEY (id)
) ENGINE = InnoDB;


CREATE TABLE posts (
    id INT(100) AUTO_INCREMENT NOT NULL,
    pictures VARCHAR(100),
    title VARCHAR(100),
    content TEXT,
    published_at DATETIME,
    updated_at DATETIME,
    id_user INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id_user) REFERENCES users(id)
) ENGINE = InnoDB;


CREATE TABLE tags (
    id INT(100) AUTO_INCREMENT NOT NULL,
    name VARCHAR(100),
    description VARCHAR(100),
    PRIMARY KEY (id)
) ENGINE = InnoDB;




CREATE TABLE posts_contain_tags (
    id_post INT NOT NULL,
    id_tag INT NOT NULL,
    PRIMARY KEY (id_post, id_tag),
    FOREIGN KEY (id_post) REFERENCES posts(id),
    FOREIGN KEY (id_tag) REFERENCES tags(id)
) ENGINE = InnoDB;


CREATE TABLE comments (
    id INT(100) AUTO_INCREMENT NOT NULL,
    id_users INT NOT NULL,
    id_post INT NOT NULL,
    id_comment_parent INT,
    content VARCHAR(500),
    PRIMARY KEY (id),
    FOREIGN KEY (id_users) REFERENCES users(id),
    FOREIGN KEY (id_post) REFERENCES posts(id),
    FOREIGN KEY (id_comment_parent) REFERENCES comments(id)

) ENGINE = InnoDB;



CREATE TABLE users_choose_tags (
    id_user INT NOT NULL,
    id_tag INT NOT NULL,
    PRIMARY KEY (id_user, id_tag),
    FOREIGN KEY (id_user) REFERENCES users(id),
    FOREIGN KEY (id_tag) REFERENCES tags(id)
) ENGINE = InnoDB;


