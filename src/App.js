import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import pureComponent from './components/pureComponent';
import PureCompF from './components/PureCompF';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container'>
        <Switch>
          <Route path='/purecomp' component={pureComponent} />
          <Route path='/purecompF' component={PureCompF} />
          <Route path='/' component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
