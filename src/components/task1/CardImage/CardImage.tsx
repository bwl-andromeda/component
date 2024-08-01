import Item from '../interfaces/Item';
import './CardImage.css';

export default function CardImage(props: Item) {
  const { url, nameImg } = props;

  return (
    <img src={url} className="card-img-top" alt={nameImg} />
  )
}
