var wsUri = "wss://737b8607c714.ngrok.io/api/ws";
//var wsUri = "wss://echo.websocket.org/";
  var output;
  let websocket;

  export function testWebSocket()
  {
    websocket = new WebSocket(wsUri);
    
    // 
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    
    // 
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
    return websocket
  }

  function onOpen(evt)
  {
    writeToScreen("CONNECTED");
  }

  function onClose(evt)
  {
    writeToScreen("DISCONNECTED");
  }

  function onMessage(evt)
  {
    writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
    // websocket.close();
  }

  function onError(evt)
  {
    writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
  }

  function doSend(message)
  {
    // writeToScreen("SENT: " + message);
    websocket.send(message);
  }

  function writeToScreen(message)
  {
    console.log(message)
  }
