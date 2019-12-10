import React from 'react';
import { HashRouter as Router, Route, NavLink as Link, Switch } from "react-router-dom";
import './App.css';
import ThemeProvider from '../providers/ThemeProvider';
import DataTable from './DataTable/DataTable';
import { NavBar } from '../components';
import AccordionExample from './Accordion/Accordion';
import AccordionGroupExample from './AccordionGroup/AccordionGroup';
import BadgeExample from './Badge/Badge';
import BreadcrumbExample from './Breadcrumb/Breadcrumb';
import ButtonExample from './Button/Button';
import ButtonGroupExample from './ButtonGroup/ButtonGroup';
import CheckboxExample from './Checkbox/Checkbox';
import InputExample from './Input/InputExample';
import ModalExample from './Modal/ModalExample';
import NavBarExample from './NavBar/NavBarExample';
import RadioExample from './Radio/Radio';
import SelectExample from './Select/Select';
import SwitchExample from './Switch/Switch';
import ToastExample from './Toast/Toast';
import TabExample from './Tab/Tab';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="main-container container-fluid">
                <ThemeProvider value="d">
                <NavBar position={'fixed'}>
                    <h1 className="text-center" style={{color : "white",margin : "12px 0px", textAlign : "center"}}>React-ui</h1>
                </NavBar>
                <Router>
                <div className="row" style={{marginTop: "80px"}}>
                    <div className="col-12 col-sm-4 col-md-2">
                        <ul>
                            <li>
                                <Link activeClassName="active" to="/accordion">Accordion</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/accordion-group">AccordionGroup</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/badge">Badge</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/breadcrumb">Breadcrumb</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/button">Button</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/button-group">ButtonGroup</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/checkbox">Checkbox</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/input">Input</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/modal">Modal</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/navbar">NavBar</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/radio">Radio</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/select">Select</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/switch">Switch</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/tab">Tab</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/table">Table / Data table</Link>
                            </li>
                            <li>
                                <Link activeClassName="active" to="/toast">Toast</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-8 col-md-10">
                            <Switch>
                                <Route path='/accordion' component={AccordionExample} />
                                <Route path='/accordion-group' component={AccordionGroupExample} />
                                <Route path='/badge' component={BadgeExample} />
                                <Route path='/breadcrumb' component={BreadcrumbExample} />
                                <Route path='/button' component={ButtonExample} />
                                <Route path='/button-group' component={ButtonGroupExample} />
                                <Route path='/checkbox' component={CheckboxExample} />
                                <Route path='/input' component={InputExample} />
                                <Route path='/modal' component={ModalExample} />
                                <Route path='/navbar' component={NavBarExample} />
                                <Route path='/radio' component={RadioExample} />
                                <Route path='/select' component={SelectExample} />
                                <Route path='/switch' component={SwitchExample} />
                                <Route path='/toast' component={ToastExample} />
                                <Route path='/tab' component={TabExample} />
                                <Route path='/table' component={DataTable} />
                            </Switch>
                    </div>
                </div>
                <div className="footer" style={{padding: "100px 0px"}}>

                </div>
                </Router>
                </ThemeProvider>
            </div>
        )
    }
}

export default App;