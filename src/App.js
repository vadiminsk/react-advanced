import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/' component={Home}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
