import React, { useState } from 'react';
import './Collapse.css';
import { CollapseData } from '../data/CollapseData';

/**
 * Компонент Collapse для создания сворачиваемого контента.
 *
 * @component
 * @param {CollapseData} props - Свойства компонента.
 * @param {string} [props.collapsedLabel='Развернуть'] - Текст для кнопки сворачивания.
 * @param {string} [props.expandedLabel='Свернуть'] - Текст для кнопки разворачивания.
 * @param {string} props.text - Текст, отображаемый внутри сворачиваемого блока.
 * @returns {JSX.Element} - JSX компонента Collapse.
 */
function Collapse({ collapsedLabel = 'Развернуть', expandedLabel = 'Свернуть', text }: CollapseData): JSX.Element {
  const [collapsed, setCollapsed] = useState(true);

  /**
   * Обработчик события клика по кнопке сворачивания/разворачивания.
   *
   * @function
   * @returns {void}
   */
  const toggleCollapse = (): void => {
    setCollapsed(!collapsed);
  };

  /**
   * Обработчик события клика по кнопке "Copy".
   * Копирует текст в буфер обмена.
   *
   * @function
   * @returns {void}
   */
  const onCollapseCopy = (): void => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={`collapse-container ${collapsed ? 'collapsed' : 'expanded'}`}>
      <button className="collapse-button" onClick={toggleCollapse}>
        {collapsed ? collapsedLabel : expandedLabel}
      </button>
      <div className={`collapse-content ${collapsed ? '' : 'collapse-visible'}`}>
        <p>{text}</p>
      </div>
      <div className="collapse-copy" onClick={onCollapseCopy}>Copy</div>
    </div>
  );
}

export default Collapse;
