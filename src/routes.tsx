import { Redirect } from "react-router-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './components/Layout/main';
import { NotFoundPage } from './pages/NotFound';
import { LoadingPage } from "./pages/Loading";
import { MainPage } from './pages/Main';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoadingPage} />
        <Main>
          <Route path="/home" exact component={MainPage} />
        </Main>
        <Route path="/404" exact={true} component={NotFoundPage} />
        <Redirect from='*' to='/404' />
      </Switch>
    </BrowserRouter >
  )
}
