import react  from 'react';
// const { useContext, createContext} = require('react');

const ArticlesContext = react.createContext();

const { data } = require('../utils/data');

const ArticlesContextProvider = ( {children} ) => {
  return (
    <ArticlesContext.Provider value={{ data }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const getArticles = () => {
  const { data } = react.useContext(ArticlesContext).data;
  return { data };
}

export default ArticlesContextProvider;
