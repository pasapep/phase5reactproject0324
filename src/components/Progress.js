import React, {useState, useEffect, Component} from "react";
import { Menu, Container, List, Icon , Divider } from "semantic-ui-react";

function Progress ({bookLists , setBookLists }) {

    
    const [isDarkMode, setIsDarkMode] = useState(true);
    const onToggleMode = () => {
        setIsDarkMode((isDarkMode) => !isDarkMode)
    }

    const books = bookLists.map(book =>
        
        <List.Item>
            <Divider hidden />

            <List.Icon name = 'github' size = 'large'  />
            <List.Content>
                <List.Header as ='a'>{book.book}</List.Header>
                <div> 
                    {/* {parseInt(book.chapter)}
                    {[...book.chapter].map((_,index) => (
                        <p key = {index}>{index} </p>
                    ))} */}
                    { Array.from({length: book.chapter}, (_,i) => (
                        
                        <button style = {isDarkMode ? {color:"black"} : {color:"magenta"}} key = {i} >
                            {i + 1}
                        </button>
                    ))}
                </div>
            </List.Content>
         </List.Item>
         );

    //1.ParseInt chapters, 
    //2. Make the list of chapters , for max value = book.chapter.length
    // const chapters = bookLists.map(book => book.chapter);

    
    const newBooks = bookLists.map(book => book.book);
    const newChapters = bookLists.map(book => book.chapter)

   
    
    console.log("NEWNEWNEW", newChapters)

    // { Array.from({length: book.chapter}, (_,i) => (
                        
    //     <button style = {isDarkMode ? {color:"black"} : {color:"magenta"}} key = {i} >
    //         {i + 1}
    //     </button>
    // ))}

    

    return (
        <div>
        <List.Item>
            <Divider hidden />

            <List.Icon name = 'github' size = 'large'  />
            <List.Content>
                {bookLists.map(book => <List>{book.book} </List>)}
            </List.Content>
            <div>
                {Array.from({length: newChapters.chapter}, (_,i) => (
                    <button style = {isDarkMode? {color:"black"}:{color:"magenta"}} key = {i}>{i +1} </button>
                ))}
            </div>
        </List.Item>
        </div>
    )
}

export default Progress;