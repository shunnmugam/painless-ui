import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
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
                                <Link to="/accordion">Accordion</Link>
                            </li>
                            <li>
                                <Link to="/accordion-group">AccordionGroup</Link>
                            </li>
                            <li>
                                <Link to="/badge">Badge</Link>
                            </li>
                            <li>
                                <Link to="/breadcrumb">Breadcrumb</Link>
                            </li>
                            <li>
                                <Link to="/button">Button</Link>
                            </li>
                            <li>
                                <Link to="/button-group">ButtonGroup</Link>
                            </li>
                            <li>
                                <Link to="/checkbox">Checkbox</Link>
                            </li>
                            <li>
                                <Link to="/input">Input</Link>
                            </li>
                            <li>
                                <Link to="/modal">Modal</Link>
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
                                <Route path='/data-table' component={DataTable} />
                            </Switch>
                    </div>
                </div>
                </Router>
                </ThemeProvider>
            </div>
        )
    }
}

export default App;