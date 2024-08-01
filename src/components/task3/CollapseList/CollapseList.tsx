import React from 'react';
import Collapse from '../Collapse/Collapse';
import collapseData, { CollapseData } from '../data/CollapseData';

/**
 * Компонент для отображения списка Collapse-компонентов.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {string} props.id - Идентификатор компонента.
 * @returns {JSX.Element} - JSX компонента CollapseList.
 */
function CollapseList({ id }: { id: string }): JSX.Element {
  return (
    <div className="container" id={id}>
      <h2>Collapse</h2>

      <div className="collapse">
        {collapseData.map((elem: CollapseData, index: number) => (
          <Collapse {...elem} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CollapseList;
