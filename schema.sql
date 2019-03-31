--schema.sql--
create table burrito (
    id serial primary key,
    name varchar(200),
    flavor varchar(200),
    heat varchar(200)
);