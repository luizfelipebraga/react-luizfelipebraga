import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './components/Layout/main';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { HomePage } from './pages/Home';
import { ProjectsPage } from './pages/Projects';

export function Routes() {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" exact component={AboutPage} />
          <Route path='/github' component={() => {
            window.location.href = 'https://github.com/luizfelipebraga';
            return null;
          }} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Main >
    </BrowserRouter>
  )
}
