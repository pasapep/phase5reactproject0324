import React, {useState, useEffect, Component} from "react";
import { Menu, Container, List, Icon , Divider } from "semantic-ui-react";

function Progress ({bookLists , setBookLists }) {

    
    const [isDarkMode, setIsDarkMode] = useState(true);
    const onToggleMode = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode)
    }
    const [color, setColor] = useState(true);

    const toggleColor = () => {
        setColor(color ==='black' ? 'black' : 'magenta')
    }

    const textToggle = isDarkMode ? "Read" : "Unread"

    const sellers = bookLists.map(book => Array.from({length:book.chapter}, (_,i) => (
        <li onClick = {toggleColor} style = {{color} } key = {i} >{textToggle}{i + 1} </li>
    )))

    //1.ParseInt chapters, 
    //2. Make the list of chapters , for max value = book.chapter.length
    // const chapters = bookLists.map(book => book.chapter);

    console.log("HSFD", bookLists)
    
    const newBooks = bookLists.map(book => book.book);
    const newChapters = bookLists.map(book => book.chapter)


   
  

   /* const buttons = bookLists.map((item => {      
        const chapters = Array.from({length: item.chapter}, (_,i) => (
            <button onClick = {toggleColor} style = {{color}} key = {i}>{textToggle} {i+1} </button>
        ));

       
        return (
            <div key = {item.id}>
                 <List.Icon name = 'github' size = 'large'  />
                <h3>{item.book}</h3>
                {chapters}
            </div>
        )
    })) */

    

    return (
        <div>
        <List.Item>
            <Divider hidden />
            <List.Icon name = 'github' size = 'large'  />
            <Divider hidden />
            <List.Content>
            {bookLists.map(book =>
                 <List>{book.book}</List>
                 )}
            {Array.from({length: newChapters.chapter}, (_,i) => (
                    <button style = {isDarkMode? {color:"black"}:{color:"magenta"}} key = {i}>{i +1} </button>
                ))}

              
            </List.Content>
        </List.Item>
        </div>
    )
}

export default Progress;