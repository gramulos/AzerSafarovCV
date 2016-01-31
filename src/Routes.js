import React from 'react';
import { ReactRouter, Router, Route, Link } from 'react-router';

import cTemplate from './pages/client/Template';
import cContact from './pages/client/Contact';
import cSkills from './pages/client/Skills';
import cWorks from './pages/client/Works';
import cEducation from './pages/client/Education';
import cPortfolio from './pages/client/Portfolio';

const Routes = (
    <Router>
        <Route path="/" component={cTemplate}>
            <Route path="/contact" component={cContact}></Route>
            <Route path="/skills" component={cSkills}></Route>
            <Route path="/works" component={cWorks}></Route>
            <Route path="/education" component={cEducation}></Route>
            <Route path="/portfolio" component={cPortfolio}></Route>
        </Route>
    </Router>
);

export default Routes;