
import './App.css';
import React, {useState} from 'react';
import Button from './Components/Button';
import ListItem from './Components/ListItem';
import List from './Components/List';



function App() {
  const [dark, setDark] = useState(false)
  return (
    <div>
    <List>
      <ListItem key={0} dark={dark}>First</ListItem>
      <ListItem key={1} dark={dark}>Second</ListItem>
      <ListItem dark={dark} key={2}>Third</ListItem>
    </List>
    <Button onClick={() => setDark(!dark)}>Change theme</Button>
    </div>

  )
}

export default App;
