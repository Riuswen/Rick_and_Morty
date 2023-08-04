import axios from 'axios';

export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const FILTER_CARDS = "FILTER_CARDS";
export const ORDER_CARDS = "ORDER_CARDS";

export const filterCards = (gender) => {
  return { type: FILTER_CARDS, payload: gender };
};

export const orderCards = (order) => {
  return { type: ORDER_CARDS, payload: order };
};

export const addFavorite = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, character);
      const { data } = response;
      dispatch({
        type: ADD_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.error('Error al agregar favorito:', error);
    }
  };
};

export const removeFavorite = (id) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      const { data } = response;
      dispatch({
        type: REMOVE_FAVORITE,
        payload: data,
      });
    } catch (error) {
      console.error('Error al eliminar favorito:', error);
    }
  };
};
