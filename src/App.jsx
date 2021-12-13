import { useEffect, useState } from 'react';

import { listen, requests, checkConnection } from './controllers/api';
import { actions } from './controllers/actions';

import { HomePage } from "./components/HomePage";
import { StateContext } from './controllers/StateContext';

/**   MAIN FUNCTION COMPONENT  */
export const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    listen(setNews);
    checkConnection(() => requests(actions.getAll(), setNews));
  }, []);

  return (
    <StateContext.Provider value={{ news, setNews }}>
      <HomePage />
    </StateContext.Provider>
  );
};
