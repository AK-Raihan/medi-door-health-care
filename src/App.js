import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Depertment from './components/Depertment/Depertment';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Contact from './components/Contact/Contact';
import FindDoctor from './components/FindDoctor/FindDoctor';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/about">
          <About></About>
        </Route>

        <Route path="/service">
          <Services></Services>
        </Route>
        <Route path="/doctor">
          <FindDoctor></FindDoctor>
        </Route>
        <PrivateRoute path="/depertment/:serviceId">
          <Depertment></Depertment>
        </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/register">
          <Register></Register>
        </Route> 
        <PrivateRoute path="/contact">
          <Contact></Contact>
        </PrivateRoute> 

        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer> </Footer>
      </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
