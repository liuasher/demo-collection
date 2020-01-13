var WebSocketServer = require('websocket').server;
var Device = require('./device')

var http = require('http');

function originIsAllowed(origin) {
  return true;
}

let globalLocker = 0
let globalCounts = 0

function getRandom(min, max){
  return Math.floor(Math.random()*(max - min + 1) + min)
}

function setSocketInterver(count, pause){
  clearInterval(globalLocker)
  globalLocker = setInterval(() => {
    connection.sendUTF(JSON.stringify( new Device(getRandom(1, 2000)).init() ));
  }, 30);
}


// 批量创建Device
function createDeviceLists(){
  const result = []
  for (let index = 1; index <= 2000; index += 1){
    result.push(new Device(index).init())
  }
  return result
}

var server = http.createServer(function(request, response) {
    // console.log((new Date()) + ' Received request for ' + request.url);
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.writeHead(200, {
          'Content-Type': 'application/json'
        });
    }).on('end', () => {
      body = Buffer.concat(body).toString();

      // 接收到参数
      const { pause, count } = JSON.parse(JSON.parse(body))
      globalCounts = count

      // setSocketInterver(count, pause)

      if (request.url === '/getDevice') {
        // 查询设备
        response.end(JSON.stringify({
          code: 0,
          result: createDeviceLists()
        }));
      } else {
        // 其他请求
        response.end(JSON.stringify({
          code: 0,
          result: 'success'
        }));
      }
    });

});
server.listen(3200, function() {
    console.log((new Date()) + ' Server is listening on port 3200');
});
 
wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});


var connection = null
wsServer.on('request', function(request) {
    if (!originIsAllowed(request.origin)) {
      request.reject();
      console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
      return;
    }
    
    connection = request.accept('echo-protocol', request.origin);
    console.log((new Date()) + ' Connection accepted.');
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            console.log('Received Message: ' + message.utf8Data);
            connection.sendUTF(message.utf8Data);
        } else if (message.type === 'binary') {
            console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
            connection.sendBytes(message.binaryData);
        }
    });
    connection.on('close', function(reasonCode, description) {
        console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
    });
    setSocketInterver(1000, 5000)
});