import logo from './logo.svg';
import { BookList } from './components/BookList';
import { Timer } from './components/Timer';
import './App.css';
import { Clicker } from './components/Clicker';
import { Counter } from './components/Counter';

function App() {
  const books = [
    { "title": "Northanger Abbey", "author": "Austen, Jane", "year": 1814, "edition": "Penguin", "price": 18.2 },
    { "title": "War and Peace", "author": "Tolstoy, Leo", "year": 1865, "edition": "Penguin", "price": 12.7 },
    { "title": "Anna Karenina", "author": "Tolstoy, Leo", "year": 1875, "edition": "Penguin", "price": 13.5 },
    { "title": "Mrs. Dalloway", "author": "Woolf, Virginia", "year": 1925, "edition": "Harcourt Brace", "price": 25 },
    { "title": "The Hours", "author": "Cunnningham, Michael", "year": 1999, "edition": "Harcourt Brace", "price": 12.35 },
    { "title": "Huckleberry Finn", "author": "Twain, Mark", "year": 1865, "edition": "Penguin", "price": 5.76 },
    { "title": "Bleak House", "author": "Dickens, Charles", "year": 1870, "edition": "Random House", "price": 5.75 },
    { "title": "Tom Sawyer", "author": "Twain, Mark", "year": 1862, "edition": "Random House", "price": 7.75 },
  ];


  return (
    <div className="App">
      <header className="App-header">
        <Counter />

        <Clicker />

        <Timer />

        <BookList books={books} />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
