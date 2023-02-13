import logo from './logo.svg';
import './App.css';
import { List } from '../List';
import { useState } from 'react';
import { Search } from '../Search';

const data = ['html', 'css', 'js', 'TS', 'React', 'Vue', 'Angular', 'NodeJs'];

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => setSearch(e.target.value)}>
          Find course:
        </Search>
        <List items={data} />
      </div>
    </div>
  );
}

export default App;
