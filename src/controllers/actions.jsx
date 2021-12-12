export const GET_ALL = 'GET_ALL';
export const GET_ONE = 'GET_ONE';
export const APPEND = 'APPEND';
export const UPDATE = 'UPDATE';
export const REMOVE = 'REMOVE';

export const actions = {
  getAll: () => ({ type: GET_ALL }),
  getOne: (value) => ({ type: GET_ONE, value }),
  append: (value) => ({ type: APPEND, value }),
  update: (value) => ({ type: UPDATE, value }),
  remove: (value) => ({ type: REMOVE, value }),
};
