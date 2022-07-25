import './App.css';
import Header from './header/header';
import Home from './home/home';
import Subreddits from "./subreddits/subreddits"

function App() {
  return (
    <>
      <Header />
      <div className="row">
        <main>
          <Home />
        </main>
        <aside>
          <Subreddits />
        </aside>
      </div>
    </>
  )
}

export default App;
