import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './component/Header/header';
import Service from './component/Service/service';
import About from './component/About/about';
import Footer from './component/Footer/footer';
import Home from './component/Home/home';
import Contacts from './component/Contacts/contacts';
import Portfolio from './component/Portfolio/portfolio';
import Production from './component/Production/production';



export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path = '/' component={Home}><Home/></Route>
          <Route exact path = '/service' component={Service}><Service/></Route>
          <Route exact path = '/about' component={About}><About/></Route>
          <Route exact path = '/contacts' component={Contacts}><Contacts/></Route>
          <Route exact path = '/portfolio' component={Portfolio}><Portfolio/></Route>
          <Route exact path = '/production' component={Production}><Production/></Route>
        </Switch>
        <Footer/>
    </BrowserRouter>
  )
}