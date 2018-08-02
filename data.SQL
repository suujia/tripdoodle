CREATE TABLE Event
(
    id SERIAL,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT Person.id PRIMARY KEY (id)
)

CREATE TABLE Todo
(
    id SERIAL,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT Event.id PRIMARY KEY (id)
)

CREATE TABLE Person
(
    id SERIAL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    city TEXT,
    PRIMARY KEY (id)
)