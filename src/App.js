import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import Directory from './component/directory/directory.component';

const HatsPage = () => (
  <div>
    Hats Page
  </div>
)

function App() {
  return (
    <div>
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/hats' component={HatsPage}/>
    </Switch>

    </div>
  );
}

export default App;
