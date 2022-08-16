import NotesList from './components/NotesList';
import {useEffect, useState} from 'react';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
    id: nanoid(),
    text: "This is my first Note !",
    date: "15/04/2022"
  },
  {
    id: nanoid(),
    text: "This is my second Note !",
    date: "16/04/2022"
  },
  {
    id: nanoid(),
    text: "This is my third Note !",
    date: "20/04/2022"
  },
  {
    id: nanoid(),
    text: "This is my new Note !",
    date: "20/04/2022"
  }
]);

const [searchText, setSearchText] = useState("");

const [darkMode, setDarkMode] = useState(false);
const [toggleName, setToggleName] = useState("Dark Mode");

useEffect(() => {
  const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));

  if(savedNotes){
    setNotes(savedNotes);
  }
}, []);

//메모가 변경될 때 마다 메모를 로컬 저장소에 저장
useEffect(() => {
  localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
}, [notes]);

const toggleDarkMode = () => {
  setDarkMode((prev) => !prev);
}

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes, newNote];
  setNotes(newNotes);
};

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes);
}

// if(darkMode) {
//   setToggleName("Light Mode");
// }else{
//   setToggleName("Dark Mode");
// }

  return(
    <div className={`${darkMode && 'dark-mode'}`}>
      {/* {darkMode ? setToggleName("Light Mode") : setToggleName("Dark Mode")} */}
        <div className='container'>
        <Header 
        handleToggleDarkMode={darkMode} 
        // handleToggleName={darkMode ? setToggleName("Light Mode") : setToggleName("Dark Mode")}
        handleToggleName={toggleDarkMode}
        />
        <Search handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          />
      </div>
    </div>
  );
};

export default App;