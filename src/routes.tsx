import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './components/Layout/main';
import { MainPage } from './pages/Main';
import { NotFoundPage } from './pages/NotFound';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Main>
          <Route path="/" exact component={MainPage} />
        </Main>
        <Route path="/404" component={NotFoundPage} />
        <Redirect from='*' to='/404' />
      </Switch>
    </BrowserRouter >
  )
}
