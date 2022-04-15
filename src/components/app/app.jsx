import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import { AppRoute } from '../../const';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path={AppRoute.ARCHIVE} exact component={Archive} />
        <Route path={AppRoute.EVENT}>
          {/* Страница добавления/редактирования */}
        </Route>
        <Route>
          <h1>Какой-то текст</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
