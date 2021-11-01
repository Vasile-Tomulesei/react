// import logo from './logo.svg';
import './App.css';
import CountryContainer from './components/CountryContainer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={CountryContainer}>
          </Route>
          <Route path="/country/:id" component={CountryDetails}>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
