package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	// “database/sql”
	// _ “github.com/lib/pq”
)

type todo struct {
	// set as true when edit or add button is pressed
	EnableEdit bool   `false`
	Id         string `json:"id"`
	Title      string `json:"title"`
	Completed  bool   `json:"completed"`
	Action     string `ADD`
}

func main() {
	// db, err := sql.Open(“postgres”,”user= dbname= sslmode=disable”)
	// if err != nil {
	// 	log.Fatal(“Error: The data source fields invalid”)
	//   }

	do := &todo{EnableEdit: false, Id: "123", Title: "Cultus Lake", Completed: false, Action: "ADD"}
	http.HandleFunc("/", handle)
	http.ListenAndServe(":8080", nil)
}

func handle(response http.ResponseWriter, request *http.Request) {
	switch request.Method {
	case "GET":
		response, err := http.Get("https://api.coinbase.com/v2/prices/BTC-USD/buy")
		if err != nil {
			fmt.Printf("HTTP request failed with error %s\n", err)
		} else {
			data, err := ioutil.ReadAll(response.Body)
			response.WriteHeader(http.StatusOK)
			fmt.Println(string(data))
		}
	case "ADD":
		if do.EnableEdit == true {
			response, err = http.Put("https://httpbin.org/put", todoIndex, this.todo)
			if err != nil {
				fmt.Printf("HTTP request failed with error %s\n", err)
			} else {
				err := request.ParseForm()

				this.todos[this.jsonData.todoIndex] = this.todo
				this.enableEdit = false
				data, err := ioutil.ReadAll(response.Body)
				response.Header().Set("Content-Type", "text/html")
				w.WriteHeader(http.StatusOK)
				fmt.Printf(response, string(data))
			}
		}
	case "DELETE":
		if confirm("Are you sure?") {
			response, err := http.Delete("https://httpbin.org/delete")

			if err != nil {
				fmt.Printf("HTTP request failed with error %s\n", err)
			} else {
				// this.http.Delete(todo).then(response => {
				//     if(response.status == 200){
				//         this.todos.splice(todoIndex, 1)
				// }
				response.WriteHeader(http.StatusOK)
				fmt.Println("you're deleting this todo")
			}
		}
	case "POST":
		resp, err := http.PostForm("https://httpbin.org/form",
			url.Values{"key": {"Value"}, "id": {"123"}})
		w.WriteHeader(http.StatusOK)
		fmt.Println("you're editing this todo")

	case "PATCH":
		w.WriteHeader(http.StatusOK)
		fmt.Println("todo completed!")

	default:
		response.WriteHeader(http.StatusInternalServerError)
		response.Write("unrecognized request")
	}
}
