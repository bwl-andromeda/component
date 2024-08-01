import Item from '../interfaces/Item';
import './CardBody.css';

export default function CardBody(props: Item) {
  const { title, text, link } = props;
  return (
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
      <a href={link} className="btn btn-primary">Go somewhere</a>
    </div>
  )
}
