import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './components/Layout/main';
import { Contato } from './pages/ContatoPage';
import { HomePage } from './pages/HomePage';
import { Projetos } from './pages/ProjetosPage';

export function Routes() {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/github' component={() => {
            window.location.href = 'https://github.com/luizfelipebraga';
            return null;
          }} />
          <Route path="/projects" component={Projetos} />
          <Route path="/contact" component={Contato} />
        </Switch>
      </Main >
    </BrowserRouter>
  )
}
