// reducer.js
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER_CARDS, ORDER_CARDS } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
        allCharacters: state.allCharacters.filter((char) => char.id !== action.payload),
      };

    case FILTER_CARDS:
      if (action.payload === "") {
        // Si no se selecciona ningún género, mostrar todas las cartas sin filtrar
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.filter((char) => char.gender === action.payload),
        };
      }

    case ORDER_CARDS:
      const sortedCharacters = [...state.allCharacters];
      if (action.payload === "A") {
        sortedCharacters.sort((a, b) => a.id - b.id);
      } else if (action.payload === "D") {
        sortedCharacters.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: sortedCharacters,
      };

    default:
      return state;
  }
};

export default rootReducer;
