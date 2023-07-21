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
    return {type: ADD_FAVORITE, payload:character};
};

export const removeFavorite = (id) => {
    return {type: REMOVE_FAVORITE, payload: id};
};