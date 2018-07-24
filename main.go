package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {

	type todo struct {
		// set as true when edit or add button is pressed
		EnableEdit bool   `false`
		Id         string `json:"id"`
		Title      string `json:"title"`
		Completed  bool   `json:"completed"`
	}

	http.HandleFunc("/", handle)
}

// takes input event, then renders the list associated to event
// pass it to javascript to print out line by line
func renderList() {
	response, err := http.Get("https://api.coinbase.com/v2/prices/BTC-USD/buy")
	if err != nil {
		fmt.Printf("HTTP request failed with error %s\n", err)
	} else {
		data, _ := ioutil.ReadAll(response.Body)
		fmt.Println(string(data))
	}
}

// press button: edit, delete, add, complete
// get request is just rendered automatically
func handle(response http.ResponseWriter, request *http.Request) {
	switch response.Method {
	case "ADD":
		if this.enableEdit == true {
			response, err = http.Put("https://httpbin.org/put", todoIndex, this.todo)
			if err != nil {
				fmt.Printf("HTTP request failed with error %s\n", err)
			} else {
				this.todos[this.jsonData.todoIndex] = this.todo
				this.enableEdit = false
				data, _ := ioutil.ReadAll(response.Body)
				fmt.Println(string(data))
			}
		}
	case "DELETE":
		if confirm("Are you sure?") {
			response, err := http.Delete("https://httpbin.org/delete")

			if err != nil {
				fmt.Printf("HTTP request failed with error %s\n", err)
			} else {
				fmt.Println("you're deleting this todo")
				// this.http.Delete(todo).then(response => {
				//     if(response.status == 200){
				//         this.todos.splice(todoIndex, 1)
				//         this.todo = {id: '', title: '', completed: false}
				// }
				// }
			}
		}
	case "EDIT":
		fmt.Println("you're editing this todo")

	case "COMPLETE":
		fmt.Println("todo completed!")
	}
}
