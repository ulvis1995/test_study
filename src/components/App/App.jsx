import logo from './logo.svg';
import './App.css';
import { List } from '../List';
import { useEffect, useState } from 'react';
import { Search } from '../Search';

const data = [
  'html',
  'css',
  'javascript',
  'TypeScript',
  'React',
  'Vue',
  'Angular',
  'NodeJs',
];

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(
      data.filter((el) => el.toLowerCase().includes(search.toLowerCase())),
    );
  }, [search]);

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={items} />
      </div>
    </div>
  );
}

export default App;
