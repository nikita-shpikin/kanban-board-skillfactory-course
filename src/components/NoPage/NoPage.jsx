import React from 'react';
import style from './nopage.module.css';

const NoPage = () => {
  return (
    <div className={style.noPage}>
      <div className={style.container}>
        <h1 className={style.title}>No page</h1>
      </div>
    </div>
  );
}

export default NoPage;
