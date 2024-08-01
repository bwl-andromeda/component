import Item from '../interfaces/Item';
import CardImage from '../CardImage/CardImage';
import CardBody from '../CardBody/CardBody';
import './Card.css';

// Определение компонента Card, принимающего объект item с интерфейсом Item
export default function Card({ item }: { item: Item }) {
  const { url } = item;

  return (
    <div className="card">
      {url && ( <CardImage {...item} /> )} {/* Условный рендеринг изображения карточки */}
      <CardBody {...item}/> {/* Рендеринг тела карточки */}
    </div>
  )
}