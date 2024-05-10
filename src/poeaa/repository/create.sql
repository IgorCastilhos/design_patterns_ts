CREATE DATABASE app ;
DROP DATABASE app;

create schema design_patterns;
drop schema design_patterns cascade;

create table design_patterns.user
(
    name     text,
    email    text,
    password text,
    status   text
);

SELECT * FROM design_patterns.user;
