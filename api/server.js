const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

const { getState, setState } = require('./server-state');

wss.on('connection', (ws) => {

  ws.on('message', (data) => {

    setState(JSON.parse(data));

    ws.send(JSON.stringify(getState(JSON.parse(data))));

  });

});
