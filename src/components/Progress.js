import React, {useState, useEffect, Component} from "react";
import { Menu, Container, List, Icon , Divider } from "semantic-ui-react";

function Progress ({bookLists}) { 
    const [isDarkMode, setIsDarkMode] = useState(true);
    const onToggleMode = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode)
    }
    const [color, setColor] = useState(true);

    const toggleColor = () => {
        setColor(color ==='black' ? 'black' : 'magenta')
    }

    const textToggle = isDarkMode ? "Read" : "Unread"
    const newBooks = bookLists.map(book => book.book);
    const newChapters = bookLists.map(book => book.chapter)
    const sellers = bookLists.map(book => Array.from({length:book.chapter}, (_,i) => (
        <li onClick = {toggleColor} style = {{color} } key = {i} >{textToggle}{i + 1} </li>
    )))

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
            {/* {Array.from({length: newChapters.chapter}, (_,i) => (
                    <button style = {isDarkMode? {color:"black"}:{color:"magenta"}} key = {i}>{i +1} </button>
                ))} */}

              
            </List.Content>
        </List.Item>        </div>
    )
}

export default Progress;