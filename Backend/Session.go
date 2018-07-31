package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/sessions"
)

type todo struct {
	Hello bool `false`
}

func main() {
	fmt.Printf("hello")
}

// TODO:
// implement front end "remember me" checkbox   (r.FormValue)

var store = sessions.NewCookieStore([]byte("secret-key"))

func Handler(response http.ResponseWriter, request *http.Request) {
	// Get() always returns a session (even if empty) or create new
	session, err := store.Get(request, "session-name")
	if err != nil {
		log.Println(err.Error())
	}

	// Temporary session
	session.Options.MaxAge = 0

	session.Values["user"] = "susie"
	session.Values["id"] = 123
	session.Values["latitude"] = 12354
	session.Values["longitude"] = 32152

	if err = sessions.Save(request, response); err != nil {
		log.Printf("Error saving session: %v", err)
	}

	fmt.Fprintln(rw, "ok")
}
