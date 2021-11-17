import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main } from './components/Layout/main';
import { MainPage } from './pages/Main';

export function Routes() {
  return (
    <BrowserRouter>
      <Main>
        <Switch>
          <Route path="/" exact component={MainPage} />
        </Switch>
      </Main>
    </BrowserRouter>
  )
}
