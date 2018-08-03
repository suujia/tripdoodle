package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"database/sql"
	_ "github.com/lib/pq"
)

type server struct {
	db *sql.DB
}

type Event struct {
	Id        string `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

type Todo struct {
	Id        string `json:"id"`
	Title     string `json:"title"`
	Completed bool   `json:"completed"`
}

type Person struct {
	Id        string   `json:"id"`
	Firstname string   `json:"firstname"`
	Lastname  string   `json:"lastname"`
	Location  string `json:"city"`
}

// $ export DBUSER=you
// $ export DBNAME=dbname
func main() {
	db, err := sql.Open(“postgres”,”user="DBUSER" dbname="DBNAME" sslmode=disable”)
	if err != nil {
		log.Fatal(err)
	  }
	defer db.Close()

	http.HandleFunc("/", handle)
	log.Println("Starting server on :8080..")
	log.Fatal(http.ListenAndServe(":8080", nil))
}

func handle(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		eventid := r.FormValue("Id")
		rows, err := db.Query(`
			SELECT
				id,
				title,
				completed
			FROM Event
			WHERE id=$eventid`)
		if err != nil {
				panic(err)
		}
		defer rows.Close()
		for rows.Next(){
			event := Event{}
			err = rows.Scan(&event.id, &event.title, &event.completed)
			if err != nil {
				panic(err)
			}
		}
		fmt.Println(event)
		w.Write(event)
		w.WriteHeader(http.StatusOK)

	case "PUT":
		// // add entry into events, retrieve last inserted id and increment it 
		// err = db.QueryRow("INSERT INTO Event VALUES ('') RETURNING eid).Scan(&eid)
		// if err != nil {
		// 	panic(err)
		// }

		// fmt.Println(lastInsertId)
		// title := r.FormValue("Title")
		// err = db.QueryRow("INSERT INTO Event lastInsertId+1, title, false").Scan(&lastInsertId)
		// if err != nil {
		// 	panic(err)
		// }
		fmt.Println("you have added this event!")


	case "DELETE":
		fmt.Println("you have deleted this event!")

	case "PATCH":
		// complete todos, change info
		w.WriteHeader(http.StatusOK)
		fmt.Println("you're editing this event!")

	default:
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println("default action!")
	}
}
