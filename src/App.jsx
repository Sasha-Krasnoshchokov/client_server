import { useEffect, useState } from 'react';

import { requests } from './controllers/api';
import { actions } from './controllers/actions';

import { HomePage } from "./components/HomePage";


export const App = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    requests(actions.getAll(), setState);
  }, []);

  console.log('to display: ', state);

  return (
    <>
      <HomePage state={state} />
    </>
  );
};
