import React, {useState, useEffect, Component} from "react";
import { Menu, Container , Header, Divider, Grid, Button } from "semantic-ui-react";
import Progress from "./Progress"

function Home () { 
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
        <Container text textAlign="center">
        <Divider hidden />  
        <Header size="huge">Bible App</Header>
        <div className = "App">
            <form onSubmit = {handleSubmit}>
                <Header size = "huge" as="h1"> {verseText && <p>{verseText}</p>}</Header>
            <Grid stackable container>
            <Grid.Row columns="three">
            <Grid.Column>
              <Header size="huge" as="h1">
                Book
              </Header>
              {/* Change with the list */}
              <input list = "browsers" type = "text" value = {book} onChange = {(event) => setBook(event.target.value) } />
              <datalist id = "browsers" value = {book} onChange = {(event) => setBook(event.target.value)}>
                {blueBook.map((book) => (
                  <option key = {book} value = {book}> {book} </option>
                ))}
              </datalist>
            </Grid.Column>
            <Grid.Column>
              <Header size="huge" as="h1">
                Chapter
              </Header>
              <input type = "number" value = {chapter} onChange = {(event) => setChapter(event.target.value)} />
              
            </Grid.Column>
            <Grid.Column>
              <Header size="huge" as="h1">
                Verse
              </Header>
              <input type = "number" value = {verse} onChange = {(event) => setVerse(event.target.value)} />
            </Grid.Column>
            
        
          </Grid.Row>
        </Grid>
            <Divider hidden />
            <button type = "submit"> Send to DB JSON </button>

            </form>
        <Divider hidden />
        <Progress     bookLists = {bookLists} verseLists = {verseLists} setBookLists = {setBookLists} /> 
        </div>
        </Container>
        
    )
}

export default Home;