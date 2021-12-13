import { GET_ALL, GET_ONE, APPEND, UPDATE, REMOVE} from './actions';


const ws = new WebSocket('ws://localhost:8080', 'echo-protocol');

export const requests = (action, callback) => {
  switch (action.type) {
    case (GET_ALL):
      ws.addEventListener('open', () => {
        ws.send(JSON.stringify({ action: GET_ALL }));
      });
      break;
    case (GET_ONE):
      ws.send(JSON.stringify({
        action: GET_ONE,
        data: { id: action.value },
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
      console.log('try delete: ', action.value);
      ws.send(JSON.stringify({
        action: REMOVE,
        data: { id: action.value },
      }));
      break;

    default:
      return {};
  };

  ws.addEventListener('message', (data) => {
    callback(JSON.parse(data.data));
  });
};
