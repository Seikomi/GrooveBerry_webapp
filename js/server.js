var userName = 'user' + Math.floor((Math.random()*1000)+1);

var socket =  io.connect('http://192.168.0.43:9092');

socket.on('connect', function() {
	output('<span class="connect-msg">Client has connected to the server!</span>');
});

socket.on('chatevent', function(data) {
	output('<span class="username-msg">' + data.userName + ':</span> ' + data.message);
});

socket.on('disconnect', function() {
	output('<span class="disconnect-msg">The client has disconnected!</span>');
});

function sendDisconnect() {
	socket.disconnect();
}

function sendMessage() {
	var message = $('#msg').val();
	$('#msg').val('');

	// don't forget to define type field '@class'
	// it should equals to class name which used
	// to deserialize object on server side
	// via ...addJsonObjectListener() method
	//
	// TIP: you can customize type name field
	// via Configuration.jsonTypeFieldName property

	var jsonObject = {userName: userName,
								  message: message};
	socket.emit('chatevent', jsonObject);
}

function sendPlay() {
	var message = '#PLAY';

	var jsonObject = {userName: userName,
								  message: message};
	socket.emit('chatevent', jsonObject);
}

function sendPause() {
	var message = '#PAUSE';

	var jsonObject = {userName: userName,
								  message: message};
	socket.emit('chatevent', jsonObject);
}

function sendNext() {
	var message = '#NEXT';

	var jsonObject = {userName: userName,
								  message: message};
	socket.emit('chatevent', jsonObject);
}

function sendPrev() {
	var message = '#PREV';

	var jsonObject = {userName: userName,
								  message: message};
	socket.emit('chatevent', jsonObject);
}

function sendRandomise() {
	var message = '#RANDOMISE';

	var jsonObject = {userName: userName,
								  message: message};
	socket.emit('chatevent', jsonObject);
}

function output(message) {
	var currentTime = "<span class='time'>" +  moment().format('HH:mm:ss.SSS') + "</span>";
	var element = $("<div>" + currentTime + " " + message + "</div>");
	$('#console').prepend(element);
}
