package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
)

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
	Address   *Address `json:"address, omitempty"`
}

type Address struct {
	City    string `json:"city, omitempty"`
	Country string `json:"country, omitempty"`
}

var people []Person
var events []Event
var eventId int

func main() {
	http.HandleFunc("/", GetPeople)
	http.HandleFunc("/{id}", handle)
	log.Fatal(http.ListenAndServe(":8000", nil))

	events := append(events, Event{Id: "122", Title: "Las Vegas", Completed: true})
	events = append(events, Event{Id: "123", Title: "Cultus Lake", Completed: false})

	people := append(people, Person{Id: "1", Firstname: "Susie", Lastname: "Chen", Address: &Address{City: "Vancouver", Country: "Canada"}})
	people = append(people, Person{Id: "2", Firstname: "Dylan", Lastname: "Whitney"})
}

// fetch all from people slice
func GetPeople(w http.ResponseWriter, r *http.Request) {
	json.NewEncoder(w).Encode(people)

}

func handle(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	// display one person's data
	case "GET":
		for _, ev := range people {
			if ev.Id == r.FormValue("Id") {
				json.NewEncoder(w).Encode(ev)
				w.WriteHeader(http.StatusOK)
				return
			}
		}

	case "ADD":
		var event Event

		event.Id = r.FormValue("Id")
		event.Title = r.FormValue("Title")
		event.Completed = false
		events = append(events, event)

		w.Header().Set("Content-Type", "application/json")
		w.Write([]byte(events))
		w.WriteHeader(http.StatusOK)

	case "DELETE":
		for index, ev := range events {
			if ev.Id == r.FormValue("Id") {
				people = append(people[:index], people[index+1:]...)
				break
			}
			w.WriteHeader(http.StatusOK)
			fmt.Println("you're deleting this todo")
		}

	case "PATCH":
		// complete todos, change title
		w.WriteHeader(http.StatusOK)
		fmt.Println("you're editing this todo!")

	default:
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Println("default action!")
	}
}
