import React, { createContext, useContext, useReducer } from 'react';

// Initial state
const initialState = {
  currentPage: 'home',
  isMenuOpen: false,
  user: null,
  theme: 'light'
};

// Action types
export const ActionTypes = {
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  TOGGLE_MENU: 'TOGGLE_MENU',
  SET_USER: 'SET_USER',
  SET_THEME: 'SET_THEME'
};

// Reducer function
const appReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case ActionTypes.TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      };
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case ActionTypes.SET_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

// Create context
const AppContext = createContext();

// Context provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Action creators
  const setCurrentPage = (page) => {
    dispatch({ type: ActionTypes.SET_CURRENT_PAGE, payload: page });
  };

  const toggleMenu = () => {
    dispatch({ type: ActionTypes.TOGGLE_MENU });
  };

  const setUser = (user) => {
    dispatch({ type: ActionTypes.SET_USER, payload: user });
  };

  const setTheme = (theme) => {
    dispatch({ type: ActionTypes.SET_THEME, payload: theme });
  };

  const value = {
    ...state,
    setCurrentPage,
    toggleMenu,
    setUser,
    setTheme
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;