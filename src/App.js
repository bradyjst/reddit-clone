import React from 'react';
import './App.css';
import Header from './header/header';
import Home from './home/home';
import Subreddits from "./subreddits/subreddits"


function App() {

  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <aside>
        <Subreddits />
      </aside>
    </>
  )
}

export default App;
