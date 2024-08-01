// import React from 'react';
import './App.css';
import CardList from './components/task1/CardList/CardList';
import cards from './components/task1/data/cards';
import Decomposition from './components/task2/Decomposition/Decomposition';
import CollapseList from './components/task3/CollapseList/CollapseList';

function App() {
  return (
    <>
      {/* шапка */}
      <header className='header'>
        <h1>Домашнее задание Композиция компонентов</h1>
        <h2>Задачи расположены последовательно в столбик</h2>
      </header>
      
      {/* Компонент задачи №1 */}
      <CardList id="cards" items={cards}/>

      {/* Компонент задачи №2 */}
      <Decomposition id="decomposition"/>

      {/* Компонент задачи №3 */}
      < CollapseList id="collapse" />
      
      {/* Просто подвал */}
      <footer className='footer'><p>Просто подвал</p></footer>
    </>
  );
}

export default App;
