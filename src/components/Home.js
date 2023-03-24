import React, {useState, useEffect} from "react";
import { Menu, Container, Header, Divider, Grid, Button } from "semantic-ui-react";
import Progress from "./Progress";

function Home() { 
  const [book, setBook] = useState('');
  const [chapter, setChapter] = useState('');
  const [verse, setVerse] = useState('');
  const [verseText, setVerseText] = useState('');
  const [newBooks, setNewBooks] = useState([]);
  const [bookLists, setBookLists] = useState([]);

  useEffect(() => {
    // fetch the list of books from the Rails backend
    fetch("http://localhost:3000/books")
      .then(response => response.json())
      .then(data => {
        setBookLists(data);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // fetch the text of the selected verse from the Bible API
    fetch(`https://bible-api.com/${book}%20${chapter}:${verse}`)
      .then(response => response.json())
      .then(data => {
        setVerseText(data.text);
        
        // save the reading progress to the Rails backend
        fetch("http://localhost:3000/reading_progress", {
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
  };

  const blueBook = bookLists.map((book) => book.name);

  return (
    <Container text textAlign="center">
      <Divider hidden />  
      <Header size="huge">Bible App</Header>
      <div className="App">
        <form onSubmit={handleSubmit}>
          <Header size="huge" as="h1">
            {verseText && <p>{verseText}</p>}
          </Header>
          <Grid stackable container>
            <Grid.Row columns="three">
              <Grid.Column>
                <Header size="huge" as="h1">
                  Book
                </Header>
                {/* Use the list of books fetched from the Rails backend */}
                <input list="browsers" type="text" value={book} onChange={(event) => setBook(event.target.value)} />
                <datalist id="browsers">
                  {blueBook.map((book) => (
                    <option key={book} value={book}>{book}</option>
                  ))}
                </datalist>
              </Grid.Column>
              <Grid.Column>
                <Header size="huge" as="h1">
                  Chapter
                </Header>
                <input type="number" value={chapter} onChange={(event) => setChapter(event.target.value)} />
              </Grid.Column>
              <Grid.Column>
                <Header size="huge" as="h1">
                  Verse
                </Header>
                <input type="number" value={verse} onChange={(event) => setVerse(event.target.value)} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Divider hidden />
          <Button type="submit" primary>Save Progress</Button>
        </form>
        <Divider hidden />
      </div>
    </Container>
  );
}

export default Home;
