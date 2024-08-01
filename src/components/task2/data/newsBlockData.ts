import { CardInterface } from '../interface/newsBlockInteface';

/**
 * Данные для разделов новостей.
 * @type {CardInterface[]}
 */
export const newsSectionsData: CardInterface[] = [
  { title: 'Сейчас в СМИ', type: 'card-section' },
  { title: 'в Германии', type: 'card-section' },
  { title: 'Рекомендуем', type: 'card-section' },
];

/**
 * Данные новостей.
 * @type {CardInterface[]}
 */
export const newsData: CardInterface[] = [
  {
    img: 'https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
    text: 'Новый центр инноваций запустил волну технологического прорыва.',
  },
  { 
    img: 'https://avatars.dzeninfra.ru/get-ynews-logo/28627/254083361-1516267195536-square/logo-square',
    text: 'Представлен проект экологического города будущего.',
  },
  { 
    img: 'https://avatars.dzeninfra.ru/get-ynews-logo/117671/1027-1530099491421-square/logo-square',
    text: 'Открытие выставки современного искусства поразило посетителей.',
  },
  { 
    img: 'https://avatars.dzeninfra.ru/get-ynews-logo/117671/1013-1664459456543-square/logo-square',
    text: 'Создан робот-помощник для людей с ограниченными возможностями.',
  },
  { 
    img: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1116-1478692904205-square/logo-square',
    text: 'Эффективный метод борьбы с пластиковым загрязнением обнаружен.',
  },
];

/**
 * Данные по валютам.
 * @type {CardInterface[]}
 */
 export const currenciesData: CardInterface[] = [
  { text: 'USD MOEX 63,52', textSecond: '+0.09' },
  { text: 'EUR MOEX 70.86', textSecond: '+0.14' },
  { text: 'НЕФТЬ 64,90', textSecond: '+1,63%' },
  { textSecond: '...' },
];

/**
 * Данные для верхней правой карточки.
 * @type {CardInterface}
 */
 export const topRightCardData: CardInterface = {
  img: 'http://veseja.slutsk-vedy.gov.by/files/00209/obj/115/41083/img/16-SARJANA-Menulis-Tangan-web1.jpg',
  title: 'Работа над ошибками',
  text: 'Смотрите на Яндексе и запоминайте',
  type: 'card-top-right',
  secondClass: 'card-top-right',
};

/**
 * Данные продуктов (например, разделов Яндекса).
 * @type {CardInterface[]}
 */
 export const productsData: CardInterface[] = [
  { title: 'Видео', href: '#' },
  { title: 'Картинки', href: '#' },
  { title: 'Новости', href: '#' },
  { title: 'Карты', href: '#' },
  { title: 'Маркет', href: '#' },
  { title: 'Переводчик', href: '#' },
  { title: 'Эфир', href: '#' },
  { title: 'еще', href: '#' },
];

/**
 * Данные для баннера.
 * @type {CardInterface}
 */
 export const banerData: CardInterface = {
  img: 'https://xage.ru/media/uploads/2018/05/aiw/aiw_04.jpg',
  alt: 'Movie',
  href: '#',
};


/**
 * Данные для футера (разделов внизу страницы).
 * @type {CardInterface[]}
 */
export const foterCardsData: CardInterface[] = [
  {
    title: 'Погода',
    childrenData: [
      { 
        img: 'https://www.svgrepo.com/download/212082/rain.svg',
        text: '+17°',
        textSecond: 'Утром +17\nднём +20',
      },
    ],
    secondClass: 'card-weather', // card-active
  },
  {
    title: 'Посещаемость',
    childrenData: [
      { text: 'недвижимость', textSecond: '— о сталинках' },
      { text: 'Маркет', textSecond: '— люстры и светильники' },
      { text: 'Автор.ру', textSecond: '— привод 4х4 до 500 000' },
    ]
  },
  {
    title: 'Карта германии',
    text: 'расписания',
  },
  {
    title: 'Телепрограмма',
    childrenData: [
      { text: '02:00 ТНТ. Best', textSecond: 'ТНТ International' },
      { text: '02:15 Джинглики', textSecond: 'Карусель INT' },
      { text: '02:25 Наедине со всеми', textSecond: 'Первый' },
    ]
  },
  {
    title: 'Эфир',
    childrenData: [
      { text: '▶️ Управление как искуство', textSecond: 'Успех' },
      { text: '▶️ Ночь. Мир в это время', textSecond: 'earthTV' },
      { text: '▶️ Андрей Возн...', textSecond: 'Совершенно секретно' },
    ]
  },
];