import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board';
import { AppRoute } from '../../const.js';

const Main = () => {
  return (
    <>
      <Header kek={AppRoute.MAIN}/>
      <section className="main__wrapper">
        <Filter />
        <Board />
      </section>
    </>

  )
}

export default Main;
