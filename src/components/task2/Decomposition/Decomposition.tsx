import './Decomposition.css';
import News from '../News/News';
import Card from '../../task2/Card/Card';
import Search from '../../task2/Search/Search';
import {
  newsSectionsData,
  newsData,
  currenciesData,
  topRightCardData,
  productsData,
  banerData,
  foterCardsData,
} from '../data/newsBlockData';

/**
 * Компонент для отображения страницы с декомпозицией различных блоков данных.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {string} props.id - Идентификатор компонента.
 * @returns {JSX.Element} - JSX компонента Decomposition.
 */
export default function Decomposition({ id }: { id: string }): JSX.Element {
  return (
    <div className="container" id={id}>
      <h2>Декомпозиция</h2>

      {/* Раздел с новостями */}
      <div className='news'>
        <News {...{ newsSectionsData, newsData, currenciesData }} />
        <Card {...topRightCardData} />
      </div>

      {/* Поиск */}
      <Search {...{ productsData }} />

      {/* Баннер */}
      <div className="banner">
        <Card {...banerData} />
      </div>

      {/* Футер */}
      <div className="footer-card">
        {foterCardsData && foterCardsData.map((elem, index) =>
          <Card {...elem} key={index}>
            {elem.childrenData && elem.childrenData.map((elem2, index2) =>
              <Card {...elem2} key={index2}/>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}
