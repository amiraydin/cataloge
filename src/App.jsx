import Home from './components/Home';
import Movie from './components/Movie';
import './App.css'
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className='container mt-4'>
        <nav>
          <ul className='nav'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movie/:id">Movies</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={Movie} />
        </Switch>

      </div>
    </BrowserRouter>
  )

}
export default App;
