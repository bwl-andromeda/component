import { PropsWithChildren } from "react";
import Card from '../Card/Card';
import Item from '../interfaces/Item';
import './CardList.css';

// Определение компонента CardList, принимающего идентификатор (id) и массив элементов (items)
export default function CardList({ id, items }: PropsWithChildren<{ id: string, items: Item[] }>) {
  return (
    <div className="container">
      <h2>Карточки</h2>
      <div className="card-group" id={id}>
        {items.map((item, index) => ( // Итерация по массиву элементов для создания карточек
          <Card key={index} item={item} /> // Рендеринг компонентов Card для каждого элемента
        ))}
      </div>
    </div>
  );
}
