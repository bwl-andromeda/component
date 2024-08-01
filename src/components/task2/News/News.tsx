import { NewsBlockInterface } from '../interface/newsBlockInteface';
import currentDate from '../curentDate/curentDate';
import Card from '../Card/Card';
import './News.css';

/**
 * Компонент News - это блок с новостями.
 *
 * @param {Object} props - Объект с данными для компонента News.
 * @param {Array} props.newsSectionsData - Массив объектов с информацией о разделах новостей.
 * @param {Array} props.newsData - Массив объектов с информацией о новостях.
 * @param {Array} props.currenciesData - Массив объектов с информацией о курсах валют.
 * @returns {JSX.Element} Компонент News.
 */
function News({ newsSectionsData, newsData, currenciesData }: NewsBlockInterface): JSX.Element {

  return (
    <section className='news-block'>
      {/* Здесь информацию о разделах новостей и дата */}
      <div className="news-header">
        {newsSectionsData.map((elem, index) => <Card
          {...elem}
          index={index}
          key={index}
        />)}
        <div className='header-date'> {currentDate()} </div>
      </div>

      {/* Здесь новости */}
      <div className="news-body">
        {newsData.map((elem, index) => <Card {...elem} key={index}/>)}
      </div>

      {/* Здесь курс валют */}
      <div className="news-currencies">
        {currenciesData.map((elem, index) => <Card {...elem} key={index}/>)}
      </div>
    </section>
  );
}

export default News;
