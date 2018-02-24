var connection = new WebSocket('ws://localhost:9030');

connection.onopen = function () {

};

// Log errors
connection.onerror = function (error) {
    console.error('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
    console.log("message from server", e.data);
};

connection.send('hello from client');