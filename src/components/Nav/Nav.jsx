import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from "../Nav/Nav.module.css";
import logo from "../../assets/logo.png";

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    this.props.onSearch(randomId.toString());
  };

  render() {
    return (
      <div className={style.nav}>
        <img src={logo} alt="Logo de Rick and Morty" />
        <SearchBar onSearch={this.props.onSearch} />
        <button className={style.randomButton} onClick={this.handleRandomCharacter}>
          Personaje Aleatorio
        </button>
        <div className={style.menu}>
          <Link to="/about" className={style.menuLink}>
            About
          </Link>
          <Link to="/home" className={style.menuLink}>  
            Home
          </Link>
          <Link to="/favorites" className={style.menuLink}>
            Favorites
          </Link>
        </div>
      </div>
    );
  }
}

export default Nav;
