import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Main } from './components/Layout/main';
import { MainPage } from './pages/Main';

export function Routes() {
  const history = createMemoryHistory()
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Router history={history}>
            <Route path="/" exact component={MainPage} />
          </Router>
        </Switch>
      </Main>
    </BrowserRouter>
  )
}
