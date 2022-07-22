import React, { useState, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import style from './header.module.css';
import avatar from './avatar.svg';
import arrow from './arrow.svg';
import Footer from '../footer/Footer';
import { AuthContext } from '../../context';


const Header = () => {
  const [visible, setVisible] = useState(false);
  const { setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.title}>Awesome Kanban Board</h1>
        <div className={style.profile}>
          <img src={avatar} alt="аватар" />

          <button
            className={style.button}
            onClick={() => setVisible(!visible)}
          >
            <img src={arrow} alt="стрелка" className={visible ? style.arrow : ' '} />
            <div className={visible ? style.menu : style.noMenu}>

              <Link to=''>My account</Link>
              <Link to='tasks'>My tasks</Link>
              <Link to='/' onClick={logout}>Log Out</Link>

            </div>
          </button>
        </div>
      </div >
      <Outlet />

      <Footer />
    </header >
  );
}

export default Header;
