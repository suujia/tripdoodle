Create Database "tripdoodle";

CREATE TABLE "Event"
(
    eid SERIAL,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT Person.id PRIMARY KEY (eid)
);

CREATE TABLE "Todo"
(
    tid SERIAL,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT Event.eid PRIMARY KEY (tid) 
    FOREIGN KEY (Event.eid) REFERENCES Event
);

CREATE TABLE "Person"
(
    pid SERIAL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    city TEXT,
    PRIMARY KEY (pid)
);


insert into Event
values(1, 'Las Vegas', 'May 5-8, 2018', false)

insert into Event
values(2, 'Salt Spring Island', 'June 27-29, 2018', false)

insert into Event
values(3, 'Cultus Lake', 'Aug 17-19, 2018', false)

