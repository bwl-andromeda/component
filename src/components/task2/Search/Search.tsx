import './Search.css';
import { CardInterface } from '../interface/newsBlockInteface';
import Card from '../Card/Card';
import React, { useState } from 'react';

/**
 * Компонент для поисковой функции.
 *
 * @component
 * @param {Object} props - Свойства, переданные компоненту.
 * @param {CardInterface[]} props.productsData - Массив данных продуктов для отображения в поисковых ссылках.
 * @returns {JSX.Element} JSX-элемент, представляющий компонент Search.
 */
function Search({ productsData }: { productsData: CardInterface[] }): JSX.Element {
  // Состояние для управления значением ввода
  const [value, setValue] = useState('');

  /**
   * Обрабатывает отправку формы.
   *
   * @param {React.FormEvent} event - Событие отправки формы.
   */
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (value) {
      // Кодируем поисковый запрос для URL
      const encodedSearchTerm = encodeURIComponent(value);

      // Собираем URL-адрес Яндекса с закодированным поисковым запросом
      const yandexSearchUrl = `https://yandex.ru/search/?text=${encodedSearchTerm}`;

      // Перенаправляем пользователя на страницу поиска Яндекса
      window.location.href = yandexSearchUrl;
    }
  };

  /**
   * Обрабатывает изменение значения ввода.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - Событие изменения значения ввода.
   */
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

  return (
    <div className='search'>
      <img className='search-logo' src='https://upload.wikimedia.org/wikipedia/commons/6/65/Yandex_official_logo.svg' alt='Яндекс' />
      <div className='search-body'>

        <div className='search-links'>
          {/* Отображаем компоненты Card, проходя по productsData */}
          {productsData.map((elem, index) => (
            <Card {...elem} key={index} />
          ))}
        </div>

        <form className='search-form' onSubmit={onSubmit}>
          <label htmlFor="" className='search-label'>
            {/* Поле ввода для поискового запроса */}
            <input
              className='search-input'
              name='request'
              type='text'
              onChange={onChange}
            />
            {/* Иконка клавиатуры для поиска */}
            <img className='search-keyboard' src='https://img.icons8.com/?size=64&id=4SwYc4bT5t3x&format=png' alt='search keyboard' />
          </label>
          {/* Кнопка отправки формы */}
          <button type='submit'>{'Найти'}</button>
        </form>

        <div className='search-footer'>
          {/* Нижний колонтитул с примером */}
          <span>{'Найдется всё. Например, '}</span>
          <span className='grey'>{'фаза луны сегодня'}</span>
        </div>
        
      </div>
    </div>
  );
}

export default Search;
