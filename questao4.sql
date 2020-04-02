-- CREATE TABLE users (
--   id serial primary key,
--   login varchar(20),
--   password_ varchar(45),
--   name varchar(255),
--   created date
-- );
-- CREATE TABLE groups (
--   id serial primary key,
--   name varchar(20),
--   description varchar(255),
--   users_id int references users(id)
-- );
-- CREATE TABLE permissions (
--   id serial primary key,
--   name varchar(255),
--   groups_id int references groups(id),
--   pages_id int
-- );

-- INSERT INTO users (id, login, password_, name, created) VALUES (1, 'yago1', '123', 'Yago 1', '2013-01-08');
-- INSERT INTO users (id, login, password_, name, created) VALUES (2, 'yago2', '123', 'Yago 2', '2013-02-09');
-- INSERT INTO users (id, login, password_, name, created) VALUES (3, 'yago3', '123', 'Yago 3', '2013-01-07');
-- INSERT INTO users (id, login, password_, name, created) VALUES (4, 'yago4', '123', 'Yago 4', '2013-02-10');
-- INSERT INTO groups (id, users_id, name, description) VALUES (15, 1, 'teste1', '');
-- INSERT INTO groups (id, users_id, name, description) VALUES (40, 2, 'teste2', '');
-- INSERT INTO groups (id, users_id, name, description) VALUES (41, 3, 'teste3', '');
-- INSERT INTO groups (id, users_id, name, description) VALUES (42, 1, 'teste4', '');
-- INSERT INTO permissions (id, groups_id, pages_id, name) VALUES (55, 15, 100, 'p1');
-- INSERT INTO permissions (id, groups_id, pages_id, name) VALUES (80, 20, 101, 'p2');
-- INSERT INTO permissions (id, groups_id, pages_id, name) VALUES (100, 41, 102, 'p3');

--
-- A
--
select * from users where created >= '2013-01-01' and created < '2013-02-01' and id in (
	select users_id from groups where id in (15, 40) 
);

--
-- B
--
create extension pgcrypto;
select * from users where login='yago100' and password_=(select encode(digest('supersecret','sha1'),'hex'));

--
-- C
--
insert into users (login, password_, name, created) values ('yago100', '123', 'Yago Qualquer', current_date);
insert into groups (id, users_id, name, description) values (20, (SELECT currval(pg_get_serial_sequence('users', 'id'))), 'grupoQ4Ca', 'Teste');
insert into groups (id, users_id, name, description) values (33, (SELECT currval(pg_get_serial_sequence('users', 'id'))), 'grupoQ4Cb', 'Teste');


--
-- D
--
select * from users where id in (
	select users_id from groups where id in (
  	select groups_id from permissions where id in (55, 80, 48)
  )
);

--
-- E
--
DELETE from permissions;
DELETE from groups;
DELETE from users;
