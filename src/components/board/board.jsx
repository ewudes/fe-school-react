import React from 'react';
import Card from '../card/card';

const Board = ({events}) => {

  const [step, setStep] = React.useState(1);

  const handleLoadMore = () => {
    events.length >= step ? setStep(step + 1) : setStep(events.length);
  }

  return (
    <section className="board">
      {/* Тут будет сортировка */}
      <div className="board__events">
        {events.slice(0, step).map(event => <Card event={event} key={event._id} />)}
      </div>
      <button className="load-more" type="button" onClick={handleLoadMore}>Загрузить еще</button>
    </section>
  )
}

export default Board;
