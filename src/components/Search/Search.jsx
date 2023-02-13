import React from 'react';
import cn from 'classnames';
import style from './Search.module.scss';

export const Search = (props) => {
  const {
    value,
    onChange,
    children = 'Search',
    placeholder = 'Search...',
  } = props;

  const inputClass = cn({
    [style.input]: true,
    [style.filled]: value.length,
  });

  return (
    <label className={style.label}>
      {children}
      <input
        className={inputClass}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};
