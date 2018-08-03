Create Database "tripdoodle";

CREATE TABLE "Trip"
(
    tripID SERIAL,
    title TEXT NOT NULL,
    date TEXT,
    completed BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT Person.personID PRIMARY KEY (tripID)
);

CREATE TABLE "Todo"
(
    todoID SERIAL,
    title TEXT NOT NULL,
    completed BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT Trip.tripID PRIMARY KEY (todoID) 
    FOREIGN KEY (Trip.tripID) REFERENCES Trip
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
    tripID SERIAL REFERENCES Trip,
    cost MONEY NOT NULL,
    title TEXT NOT NULL,
    personID TEXT NOT NULL REFERENCES Person,
    PRIMARY KEY (tripID, expenseID)
);

CREATE TABLE "Paid"
(
    purchaseID SERIAL,
    expenseID SERIAL NOT NULL REFERENCES Trip,
    personID SERIAL NOT NULL REFERENCES Person,
    PRIMARY KEY (purchaseID)
);

INSERT INTO Trip
values(1, 'Las Vegas', 'May 5-8, 2018', false)

INSERT INTO Expense
values(1, 1, 200.80, 'Car Rental')

INSERT INTO Paid
values(1, 1, 1)

INSERT INTO Paid
values(1, 1, 2)


INSERT INTO Trip
values(2, 'Salt Spring Island', 'June 27-29, 2018', false)

INSERT INTO Expense
values(2, 2, 20.5, 'Ferry Fees')

INSERT INTO Paid
values(2, 2, 1)

INSERT INTO Trip
values(3, 'Cultus Lake', 'Aug 17-19, 2018', false)


INSERT INTO Person
values(1, "Susie", "Chen", "Vancouver")

INSERT INTO Person
values(2, "Dylan", "Whitney", "Burnaby")
