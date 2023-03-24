// import React, { useState, useEffect } from "react";

// const Progress = () => {
//   const [books, setBooks] = useState([
//     { name: "Genesis", chapters: 50 },
//     { name: "Exodus", chapters: 40 },
//     { name: "Leviticus", chapters: 27 },
//     { name: "Numbers", chapters: 36 },
//     { name: "Deuteronomy", chapters: 34 },
//     { name: "Joshua", chapters: 24 },
//     { name: "Judges", chapters: 21 },
//     { name: "Ruth", chapters: 4 },
//     { name: "1 Samuel", chapters: 31 },
//     { name: "2 Samuel", chapters: 24 },
//     { name: "1 Kings", chapters: 22 },
//     { name: "2 Kings", chapters: 25 },
//     { name: "1 Chronicles", chapters: 29 },
//     { name: "2 Chronicles", chapters: 36 },
//     { name: "Ezra", chapters: 10 },
//     { name: "Nehemiah", chapters: 13 },
//     { name: "Esther", chapters: 10 },
//     { name: "Job", chapters: 42 },
//     { name: "Psalms", chapters: 150 },
//     { name: "Proverbs", chapters: 31 },
//     { name: "Ecclesiastes", chapters: 12 },
//     { name: "Song of Solomon", chapters: 8 },
//     { name: "Isaiah", chapters: 66 },
//     { name: "Jeremiah", chapters: 52 },
//     { name: "Lamentations", chapters: 5 },
//     { name: "Ezekiel", chapters: 48 },
//     { name: "Daniel", chapters: 12 },
//     { name: "Hosea", chapters: 14 },
//     { name: "Joel", chapters: 3 },
//     { name: "Amos", chapters: 9 },
//     { name: "Obadiah", chapters: 1 },
//     { name: "Jonah", chapters: 4 },
//     { name: "Micah", chapters: 7 },
//     { name: "Nahum", chapters: 3 },
//     { name: "Habakkuk", chapters: 3 },
//     { name: "Zephaniah", chapters: 3 },
//     { name: "Haggai", chapters: 2 },
//     { name: "Zechariah", chapters: 14 },
//     { name: "Malachi", chapters: 4 },
//     { name: "Matthew", chapters: 28 },
//     { name: "Mark", chapters: 16 },
//     { name: "Luke", chapters: 24 },
//     { name: "John", chapters: 21 },
//     { name: "Acts", chapters: 28 },
//     { name: "Romans", chapters: 16 },
//     { name: "1 Corinthians", chapters: 16 },
//     { name: "2 Corinthians", chapters: 13 },
//     { name: "Galatians", chapters: 6 },
//     { name: "Ephesians", chapters: 6 },
//     { name: "Philippians", chapters: 4 },
//     { name: "Colossians", chapters: 4 },
//     { name: "1 Thessalonians", chapters: 5 },
//     { name: "2 Thessalonians", chapters: 3 },
//     { name: "1 Timothy", chapters:6},
//     { name: "2 Timothy", chapters: 4 },
//     { name: "Titus", chapters: 3 },
//     { name: "Philemon", chapters: 1 },
//     { name: "Hebrews", chapters: 13 },
//     { name: "James", chapters: 5 },
//     { name: "1 Peter", chapters: 5 },
//     { name: "2 Peter", chapters: 3 },
//     { name: "1 John", chapters: 5 },
//     { name: "2 John", chapters: 1 },
//     { name: "3 John", chapters: 1 },
//     { name: "Jude", chapters: 1 },
//     { name: "Revelation", chapters: 22 }
//     ]);

//     useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("https://bible-api.com/books");
//         const data = await response.json();
//         setBooks(
//           data.map((book) => ({
//             name: book.name,
//             chapters: book.chapters.length,
//           }))
//         );
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   const displayChapters = (count) => {
//     let chapterArr = [];
//     for (let i = 1; i <= count; i++) {
//       chapterArr.push(i);
//     }
//     let chapterGroups = [];
//     while (chapterArr.length > 0) {
//       chapterGroups.push(chapterArr.splice(0, 10));
//     }
//     return chapterGroups.map((group, index) => (
//       <div className="chapter-group" key={index}>
//         {group.map((chapter) => (
//           <div className="chapter-circle" key={chapter}>
//             {chapter}
//           </div>
//         ))}
//       </div>
//     ));
//   };

//   return (
//     <div>
//       <h2>Progress</h2>
//       <ul>
//         {books.length > 0 ? (
//           books.map((book) => (
//             <li key={book.name}>
//               <div className="book-title">{book.name}</div>
//               <div className="chapter-count">{displayChapters(book.chapters)}</div>
//             </li>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Progress;

import React, { useState, useEffect } from "react";

const Progress = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://bible-api.com/books");
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const displayChapters = (count) => {
    const chapterGroups = [];
    for (let i = 1; i <= count; i += 10) {
      chapterGroups.push(
        Array.from({ length: 10 }, (_, index) => i + index).filter(
          (chapter) => chapter <= count
        )
      );
    }
    return chapterGroups.map((group, index) => (
      <div className="chapter-group" key={index}>
        {group.map((chapter) => (
          <div className="chapter-circle" key={chapter}>
            {chapter}
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div>
      <h2>Progress</h2>
      <ul>
        {books.map((book) => (
          <li key={book.name}>
            <div className="book-title">{book.name}</div>
            <div className="chapters">{displayChapters(book.chapters)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Progress;