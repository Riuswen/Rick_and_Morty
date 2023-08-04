import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import style from './App.module.css';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/Favorites.jsx';

function App({ myFavorites }) { 

  //! HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  //! CREDENCIALES FAKE

  // const email = 'wrius@mail.com';
  // const password = 'pass123';

  //!EVENT HANDLERS

  const onSearch = async (id) => {
    try {
      const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      const {data} = response;
      if (data.name && !characters.some((char) => char.id === data.id)) {
        data.id = data.id || id;
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡Ya has añadido este personaje!');
      }
      console.log(response);
    } catch (error) {
      console.error('Error al buscar el personaje:', error);
      window.alert('¡No hay personajes con este ID!');
    }
  };
  
 
  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(data);
      if (access) {
        navigate('/home');
      } else {
        alert('Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Hubo un error al iniciar sesión');
    }
  };  

  const handleCloseCard = (id) => {
    setCharacters((prevCharacters) => prevCharacters.filter((character) => character.id !== id));
  };

  //! RENDER

  return (
    <div className={style.app} style={{ padding: '25px' }}>
      {pathname !== '/' && <Nav onSearch={onSearch} access={access} setAccess={setAccess} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} myFavorites={myFavorites} onClose={handleCloseCard} />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default App;
