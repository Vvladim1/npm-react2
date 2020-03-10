import React from "react";
import s from '../header/header.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ55hUJBQypwhxOO6dsifvOqoAWzJk2KHqO1ECcEnFRXAgkRTXpwA&s"
        width="5%"
        alt='sea'
      />
    </header>
  );
};

export default Header;
