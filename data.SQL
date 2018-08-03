Create Database "tripdoodle";

CREATE TABLE "Event"
(
    eventID SERIAL,
    title TEXT NOT NULL,
    date TEXT,
    completed BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT Person.personID PRIMARY KEY (eventID)
);

CREATE TABLE "Todo"
(
    todoID SERIAL,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT Event.eventID PRIMARY KEY (todoID) 
    FOREIGN KEY (Event.eventID) REFERENCES Event
);

CREATE TABLE "Person"
(
    personID SERIAL,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    city TEXT,
    PRIMARY KEY (personID)
);

CREATE TABLE "Expense"
(
    expenseID SERIAL,
    eventID SERIAL REFERENCES Event,
    cost MONEY NOT NULL,
    title TEXT NOT NULL,
    paidBy TEXT NOT NULL REFERENCES Person,
    PRIMARY KEY (eventID, expenseID)
);



INSERT INTO Event
values(1, 'Las Vegas', 'May 5-8, 2018', false)

INSERT INTO Event
values(2, 'Salt Spring Island', 'June 27-29, 2018', false)

INSERT INTO Expense
values(2, 'Salt Spring Island', 'June 27-29, 2018', false)

INSERT INTO Event
values(3, 'Cultus Lake', 'Aug 17-19, 2018', false)

INSERT INTO Person
values(1, "Susie", "Chen", "Vancouver")

INSERT INTO Person
values(2, "Dylan", "Whitney", "Burnaby")
