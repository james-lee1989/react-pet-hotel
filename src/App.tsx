import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'wouter';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import FormEditor from './pages/FormEditPage';
import FormList from './pages/FormListPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/"> <HomePage /> </Route>
        <Route path="/login"> <LoginPage /> </Route>
        <Route path="/forms" component={FormList} />
        <Route path="/forms/:id/edit" component={FormEditor} /> 
      </Switch>
    </Router>
  );
};

export default App;