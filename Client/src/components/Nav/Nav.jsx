import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css";
import logo from "../../assets/logo.png";

const Nav = ({onSearch, setAccess}) => {
   const navigate = useNavigate ();
  // constructor(props) {
  //   super(props);   <<< esto no siempre es necesario ponerlo, pero es recomendable tenerlo en cuenta
  // }

  const handleRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
   onSearch(randomId.toString());
  };

  const handleLogOut = () => {
    setAccess(false);
    navigate("/")
}

    return (
      <div className={style.nav}>
        <img src={logo} alt="Logo de Rick and Morty" />
        <SearchBar onSearch={onSearch} />
        <button className={style.randomButton} onClick={handleRandomCharacter}>
          Personaje Aleatorio
        </button>
        <button onClick={handleLogOut} className={style.logOut}>Log Out</button>
        <div className={style.menu}>
          <Link to="/about" className={style.menuLink}>
            Acerca de mí
          </Link>
          <Link to="/home" className={style.menuLink}>  
            Home
          </Link>
          <Link to="/favorites" className={style.menuLink}>
            Favoritos
          </Link>
        </div>
      </div>
    );
  }


export default Nav;
