import { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Monsters from './Monsters';
import Contect from './Contect';

import './css/App.css'


function App() {
  const [page, setPage] = useState('Home');

  return (
      <div className="app">
        <Header setPage={setPage}/>
        <main id="main">
          { (page === 'Home') && <Home/>}
          { (page === 'About') && <About/>}
          { (page === 'Monsters') && <Monsters/>}
          { (page === 'Contect') && <Contect/>}
        </main>
        <Footer setPage={setPage}/>
      </div>
  );
}

export default App
