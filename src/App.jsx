import { useEffect, useState } from 'react';

import { requests } from './controllers/api';
import { actions } from './controllers/actions';

import { HomePage } from "./components/HomePage";
import { StateContext } from './controllers/StateContext';

/**   MAIN FUNCTION COMPONENT  */
export const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    requests(actions.getAll(), setNews);
  }, []);

  console.log('to display: ', news);

  return (
    <StateContext.Provider value={{ news, setNews }}>
      <HomePage />
    </StateContext.Provider>
  );
};
