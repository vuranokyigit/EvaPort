import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../styles/component.css';
import '../styles/eva.css';
import Navbar from '../navbar/navbar';
import Home from './home';
import About from './about';
import Product from './product';
import Footer from '../footer/footer';
import Contact from '../contact';
import Evacore from "../evacore";
import Evabrand from "../evabrand";
import Ecoevapro from "../ecoevapro";

const Main = () => {
    return (
<>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/eva/about" component={About} />
                    <Route path="/eva/product" component={Product} />
                    <Route path="/eva/contact" component={Contact} />
                    <Route path="/eva/evacore" component={Evacore}/>
                    <Route path="/eva/evabrand" component={Evabrand}/>
                    <Route path="/eva/ecoevapro" component={Ecoevapro}/>
                </Switch>
            </Router>
            <Footer />
</>
    );
};

export default Main;
