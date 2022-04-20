import React from 'react';
import Card from '../card/card';

const Board = ({events}) => {
  return (
  <section className="board">
    {/* Тут будет сортировка */}
    <div className="board__events">
      {events.map(event => <Card {...event} key={event._id} />)}
    </div>
    <button className="load-more" type="button">Загрузить еще</button>
  </section>
  )
}

export default Board;
