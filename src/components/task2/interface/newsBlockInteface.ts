/**
 * Интерфейс, представляющий свойства карточки.
 * @interface
 */
export interface CardInterface {
  img?: string;          // URL изображения
  href?: string;         // Гиперссылка для карточки
  title?: string;        // Заголовок карточки
  text?: string;         // Основной текст карточки
  textSecond?: string;   // Вторичный текст карточки
  type?: string;         // Тип карточки
  alt?: string;          // Альтернативный текст для изображения
  childrenData?: CardInterface[]; // Массив дочерних карточек
  secondClass?: string;  // Дополнительный класс CSS для стилизации
}

/**
 * Интерфейс, представляющий свойства блока новостей.
 * @interface
 */
export interface NewsBlockInterface {
  newsSectionsData: CardInterface[]; // Данные для секций новостей
  newsData: CardInterface[];         // Данные для отдельных новостей
  currenciesData: CardInterface[];   // Данные для карточек с валютами
  type?: string;                     // Тип блока новостей
}
