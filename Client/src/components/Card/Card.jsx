import React, { useEffect, useState } from 'react';
import style from '../Card/Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from '../../redux/actions';

function Card({ character, addFavorite, removeFavorite, myFavorites, onClose }) {
  const { id, name, status, species, gender, origin, image } = character;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite(character);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  const handleOnClick = () => {
    onClose(id); // 
  };

  return (
    <div className={style.card}>
      <button onClick={handleFavorite} className={style.favButton}>{isFav?"❤️":"🤍"}</button>
      <button className={style.closeButton} onClick={handleOnClick}>❌</button>
      
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} className={style.imgBx} />
        <h2><marquee direction="left">{name}</marquee></h2>
      </Link>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {origin?.name}</p>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => { dispatch(addFavorite(character)) },
    removeFavorite: (id) => { dispatch(removeFavorite(id)) },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
