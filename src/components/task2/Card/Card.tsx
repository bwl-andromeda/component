import { CardInterface } from '../interface/newsBlockInteface';
import '../Card/Card.css'
import { ReactNode } from 'react';

/**
 * Свойства для компонента Card.
 * @interface CardProps
 * @extends {CardInterface}
 */
interface CardProps extends CardInterface {
  index?: number;
  children?: ReactNode;
}

/**
 * Компонент Card для отображения карточки с изображением, заголовком и текстом.
 * @param {CardProps} props - Свойства компонента Card.
 * @returns {JSX.Element} - JSX компонента Card.
 */
function Card(props: CardProps): JSX.Element {
  const {
    img,        // Изображение карточки.
    text,       // Основной текст карточки.
    href,       // Ссылка для перехода при клике на карточку.
    title,      // Заголовок карточки.
    textSecond, // Вторичный текст карточки.
    index,      // Индекс карточки.
    type,       // Тип карточки.
    children,   // Дочерние элементы React.
    secondClass,// Дополнительный класс для карточки.
  } = props;

  /**
   * Класс для секции карточки на основе типа и индекса.
   * @type {("card-active" | "")}
   */
  const cardSectionClass: "card-active" | "" = type === 'card-section' && index === 0 ? 'card-active' : '';
  // const secondClass = type === 'card-top-right' ? 'card-top-right' : '';

  /**
   * Обработчик клика по карточке, осуществляет переход по указанной ссылке.
   * @param {string} url - Ссылка для перехода.
   * @returns {void}
   */
  const onClick = (url?: string): void => {
    if (!url) return;
    window.location.href = url;
  };

  return (
    <div className={`card2 ${cardSectionClass} ${secondClass ? secondClass : ''}`} onClick={() => { onClick(href) }}>
      {img && <img className='card-image' src={img} alt='' />}
      {title && <div className='card-title2'>{title}</div>}
      {text && <div className='card-text-main'>{text}</div>}
      {textSecond && <div className='card-text-secondery'>{textSecond}</div>}
      {children}
    </div>
  );
}

export default Card;
