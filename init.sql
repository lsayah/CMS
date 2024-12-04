DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
    ID_users_Users INT(100) AUTO_INCREMENT NOT NULL,
    name_Users VARCHAR(100),
    last_name_Users VARCHAR(100),
    mail_Users VARCHAR(100),
    role_Users VARCHAR(100),
    status_Users VARCHAR(100),
    username_Users VARCHAR(100),
    PRIMARY KEY (ID_users_Users)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS Comment;

CREATE TABLE Comment (
    ID_comment_Comment BIGINT(100) AUTO_INCREMENT NOT NULL,
    ID_users_Users * * NOT FOUND * *(100),
    ID_post_Posts * * NOT FOUND * *(100),
    PRIMARY KEY (ID_comment_Comment)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS Posts;

CREATE TABLE Posts (
    ID_post_Posts INT(100) AUTO_INCREMENT NOT NULL,
    pictures_Posts VARCHAR(100),
    titles_Posts VARCHAR(100),
    description_Posts VARCHAR(100),
    published_at_Posts VARCHAR(100),
    published_by_Posts VARCHAR(100),
    updated_at_Posts VARCHAR(100),
    ID_users_Users * * NOT FOUND * *(100),
    PRIMARY KEY (ID_post_Posts)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS Tags;

CREATE TABLE Tags (
    ID_tags_Tags INT(100) AUTO_INCREMENT NOT NULL,
    categories_Tags VARCHAR(100),
    PRIMARY KEY (ID_tags_Tags)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS Reply_Comment;

CREATE TABLE Reply_Comment (
    ID_reply_Reply_Comment VARCHAR(100) AUTO_INCREMENT NOT NULL,
    PRIMARY KEY (ID_reply_Reply_Comment)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS contain;

CREATE TABLE contain (
    ID_post_Posts * * NOT FOUND * *(100) AUTO_INCREMENT NOT NULL,
    ID_tags_Tags * * NOT FOUND * *(100) NOT NULL,
    PRIMARY KEY (ID_post_Posts, ID_tags_Tags)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS reply;

CREATE TABLE reply (
    ID_comment_Comment * * NOT FOUND * *(100) AUTO_INCREMENT NOT NULL,
    ID_reply_Reply_Comment * * NOT FOUND * *(100) NOT NULL,
    PRIMARY KEY (ID_comment_Comment, ID_reply_Reply_Comment)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS choose;

CREATE TABLE choose (
    ID_users_Users * * NOT FOUND * *(100) AUTO_INCREMENT NOT NULL,
    ID_tags_Tags * * NOT FOUND * *(100) NOT NULL,
    PRIMARY KEY (ID_users_Users, ID_tags_Tags)
) ENGINE = InnoDB;

ALTER TABLE
    Comment
ADD
    CONSTRAINT FK_Comment_ID_users_Users FOREIGN KEY (ID_users_Users) REFERENCES Users (ID_users_Users);

ALTER TABLE
    Comment
ADD
    CONSTRAINT FK_Comment_ID_post_Posts FOREIGN KEY (ID_post_Posts) REFERENCES Posts (ID_post_Posts);

ALTER TABLE
    Posts
ADD
    CONSTRAINT FK_Posts_ID_users_Users FOREIGN KEY (ID_users_Users) REFERENCES Users (ID_users_Users);

ALTER TABLE
    contain
ADD
    CONSTRAINT FK_contain_ID_post_Posts FOREIGN KEY (ID_post_Posts) REFERENCES Posts (ID_post_Posts);

ALTER TABLE
    contain
ADD
    CONSTRAINT FK_contain_ID_tags_Tags FOREIGN KEY (ID_tags_Tags) REFERENCES Tags (ID_tags_Tags);

ALTER TABLE
    reply
ADD
    CONSTRAINT FK_reply_ID_comment_Comment FOREIGN KEY (ID_comment_Comment) REFERENCES Comment (ID_comment_Comment);

ALTER TABLE
    reply
ADD
    CONSTRAINT FK_reply_ID_reply_Reply_Comment FOREIGN KEY (ID_reply_Reply_Comment) REFERENCES Reply_Comment (ID_reply_Reply_Comment);

ALTER TABLE
    choose
ADD
    CONSTRAINT FK_choose_ID_users_Users FOREIGN KEY (ID_users_Users) REFERENCES Users (ID_users_Users);

ALTER TABLE
    choose
ADD
    CONSTRAINT FK_choose_ID_tags_Tags FOREIGN KEY (ID_tags_Tags) REFERENCES Tags (ID_tags_Tags);