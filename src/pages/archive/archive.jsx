import React from 'react';
import Board from '../../components/board/board';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
// import { useParams } from 'react-router-dom';

const Archive = (props) => {
  // console.log('props', props)

  const { id } = props.match.params;
  // const { id } = useParams();

  const kek = () => {
    return id ? `ID есть, вот он - ${id}` : 'Нет ID никакого'
  }

  console.log('id', id)

  return (
    <>
      <Header mode={AppRoute.ARCHIVE}/>
      <section className="main__wrapper">
        <div>{kek()}</div>
        <Board />
      </section>
    </>
  )
}

export default Archive;
