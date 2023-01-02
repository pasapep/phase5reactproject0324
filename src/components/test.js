import React, { useState, useEffect } from 'react';
import { useBootstrapBreakpoints } from 'react-bootstrap/esm/ThemeProvider';

function App () {
    const [book, setBook] = useState('');
    const [chapter, setChapter] = useState('');
    const [verse, setVerse] = useState('');
    const [verseText, setVerseText] = useState('');
    const [books, setBooks] = useState([])
  
      useEffect(() => {
        // make a GET request to the Bible API endpoint
        fetch(`https://bible-api.com/${book}%20${chapter}:${verse}`)
          .then(response => response.json())
          .then(data => {
            setVerseText(data.text);
            setBooks(data);
          });
      }, [book, chapter, verse]);
  
    console.log("books", book)
  
    
   
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // make a GET request to the Bible API endpoint
      fetch(`https://bible-api.com/${book}%20${chapter}:${verse}`)
        .then(response => response.json())
        .then(data => {
          setVerseText(data.text);
  
          // make a POST request to the /read endpoint
          fetch('http://localhost:6001/read', {
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
          });
        });
    }
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Book:
            <input type="text" value={book} onChange={(event) => setBook(event.target.value)} />
          </label>
          <br />
          <label>
            Chapter:
            <input type="number" value={chapter} onChange={(event) => setChapter(event.target.value)} />
          </label>
          <br />
          <label>
            Verse:
            <input type="number" value={verse} onChange={(event) => setVerse(event.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        {verseText && <p>{verseText}</p>}
        {/* <ul>
        {books.map((book) => {
          <li key = {book.id}>{book.name}</li>
        })}
        </ul> */}
      </div>
    );
  }

export default App;