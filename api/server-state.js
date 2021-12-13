const uuid = require('uuid');
const GET_ALL = 'GET_ALL';
const GET_ONE = 'GET_ONE';
const APPEND = 'APPEND';
const UPDATE = 'UPDATE';
const REMOVE = 'REMOVE';

let state = [
  {
    id: uuid.v4(),
    title: 'News title 1 About Moon',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque. Repellat perferendis velit dolores blanditiis eaque cum officia quisquam magni.',
    posted: '11.12.2021',
  },
  {
    id: uuid.v4(),
    title: 'News title 3 About Rocket and power',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque. Repellat perferendis velit dolores blanditiis eaque cum officia quisquam magni.',
    posted: '11.12.2021',
  },
  {
    id: uuid.v4(),
    title: 'News title 4 About Ukraine',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque. Repellat perferendis velit dolores blanditiis eaque cum officia quisquam magni.',
    posted: '11.12.2021',
  },
  {
    id: uuid.v4(),
    title: 'News title 2 About save ecology',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, atque. Repellat perferendis velit dolores blanditiis eaque cum officia quisquam magni.',
    posted: '11.12.2021',
  },
];

const getState = ({ action, data }) => {
  switch (action) {
    case (GET_ALL):
      return state;

    case (GET_ONE):
      return state.filter(item => item.id === data.id);

    default:
      return state;
  };
};

const setState = ({ action, data }) => {
  switch (action) {
    case (APPEND):
      const newObj = {
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        posted: data.posted,
      };
      state.push(newObj);
      break;

    case (UPDATE):
      const ind = state.findIndex(item => item.id === data.id);
      state[ind] = {
        id: state[ind].id,
        title: data.title,
        description: data.description,
        posted: data.posted,
      };
      break;

    case (REMOVE):
      state = [ ...state.filter(item => item.id !== data.id) ];
      break;

    default:
      return {};
  };
};

module.exports = { getState, setState };
