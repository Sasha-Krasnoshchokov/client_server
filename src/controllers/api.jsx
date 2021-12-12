import { GET_ALL, GET_ONE, APPEND, UPDATE, REMOVE} from './actions';


const ws = new WebSocket('ws://localhost:8080', 'echo-protocol');

export const requests = (action, callback) => {
  switch (action.type) {
    case (GET_ALL):
      ws.addEventListener('open', () => {
        ws.send(JSON.stringify({ action: action.type, data: action.value }));
      });
      break;
    case (GET_ONE):
      ws.send(JSON.stringify({
        action: GET_ONE,
        data: { ...action.value },
      }));
      break;
    case (APPEND):
      console.log('request to server', action)
        ws.send(JSON.stringify({
          action: APPEND,
          data: { ...action.value },
        }));
      break;
    case (UPDATE):
      ws.send(JSON.stringify({
        action: UPDATE,
        data: { ...action.value },
      }));
      break;
    case (REMOVE):
      ws.send(JSON.stringify({
        action: REMOVE,
        data: { ...action.value },
      }));
      break;

    default:
      return {};
  };

  ws.addEventListener('message', (data) => {
    // console.log('got from server: ', JSON.parse(data.data));
    callback(JSON.parse(data.data));
  });
};

// export const request = (callback) => {
//   ws.addEventListener('open', () => {
//     ws.send(JSON.stringify({ action: 'GET_ALL', data: {} }));
//   });

//   ws.addEventListener('message', (data) => {
//     callback(JSON.parse(data.data));
//   });
// };
