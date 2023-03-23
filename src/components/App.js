// import './Styles.css'
import 'semantic-ui-css/semantic.min.css'
import { Route, Switch, BrowserRouter } from "react-router-dom";// import Header from "./Header";

import React, {useState, useEffect, Component} from "react";
import { Button, Container, Grid, Header, Icon, Menu } from "semantic-ui-react";


import NavBar from "./NavBar"
import Home from "./Home"
import Progress from "./Progress"
import Scoreboard from "./Scoreboard"
import Login from "./Login"
import Signup from "./Signup"

function App () {

    const [book, setBook] = useState('');
    const [chapter, setChapter] = useState('');
    const [verse, setVerse] = useState('');
    const [verseText, setVerseText] = useState('');
    const [newBooks, setNewBooks] = useState([]);


    useEffect(() => {
        // make a GET request to the Bible API endpoint
        fetch(`https://bible-api.com/${book}%20${chapter}:${verse}`)
          .then(response => response.json())
          .then(data => {
            setVerseText(data.text);
            setNewBooks(data);
          });
      }, [book, chapter, verse]);

    //Using useEffect to fetch the books. 
    const [bookLists, setBookLists] = useState([]);
    const [verseLists, setVerseLists] = useState([]);
    useEffect(() => {
        fetch ("http://localhost:5555/listerines")
        .then (resp => resp.json())
        .then (data => {
            setBookLists(data);
            setVerseLists(data);
        })
    }, [])


    const blueBook = bookLists.map((book) => book.book)
    console.log("bluebook",blueBook)

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch (`https://bible-api.com/${book}%20${chapter}:${verse}`)
            .then (response => response.json())
            .then (data => {
                setVerseText(data.text);
           
        
            fetch('http://localhost:5555/read', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    book: book,
                    chapter: chapter,
                    verse: verse,
                    text: data.text
                })
            })
            })
    }

    return (
    <BrowserRouter> 
    <div>
        <h2>NavBar</h2>
        <NavBar />
    </div>
    <div> 
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/progress">
            <Progress bookLists = {bookLists} verseLists = {verseLists} setBookLists = {setBookLists} /> 

        </Route>
    
    </Switch>
    </div>
    </BrowserRouter>
    )
}

export default App;