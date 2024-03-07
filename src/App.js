import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
 
export const UserContext = createContext();
 
const App = () => {
  const [username, setUsername] = useState('');
 
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
         
        </div>
      </Router>
    </UserContext.Provider>
  );
};
 
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isLoggedIn()
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
);
 
const isLoggedIn = () => {
  return true;
};
 
export default App;
 