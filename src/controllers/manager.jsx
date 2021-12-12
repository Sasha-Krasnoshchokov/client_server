import { actions, APPEND, REMOVE } from './actions';
import { requests } from './api';

export const manageRequests = (event, setState) => {
  console.log('press: ', event.target.id)
    if (event.target.id === APPEND) {
      requests(actions.append(), setState);
    }
    if (event.target.id === REMOVE) {
      requests(actions.remove({ id: 2 }), setState);
    }
};