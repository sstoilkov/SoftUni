import { Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './components/Home';
import { About } from './components/About';
import { Pricing } from './components/Pricing'
import { Contacts } from './components/Contacts'
import { NotFound } from './components/NotFound'
import { Navigation } from './components/Navigation';
import { Starship } from './components/Starship';
import { StarshipList } from './components/StarshipList';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello React Router</h1>

      <Navigation />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/starships' element={<StarshipList />} />
        <Route path='/starships/:starshipId' element={<Starship />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/millennium-falcon' element={<Navigate to='/products/10' replace/>} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );

  
}

export default App;
