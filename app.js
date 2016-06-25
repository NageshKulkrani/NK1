(function(){

	var settings = {
		channel: 'pi-house',
		publish_key: 'demo',
		subscribe_key: 'demo'
	};

	var pubnub = PUBNUB(settings);

	var Relay1 = document.getElementById('Relay1');
	var Relay2 = document.getElementById('Relay2');
	var Relay3 = document.getElementById('Relay3');

	function publishUpdate(data) {
		pubnub.publish({
			channel: settings.channel, 
			message: data
		});
	}

	// UI EVENTS

	Relay1.addEventListener('change', function(e)
	{
		publishUpdate({item: 'Relay1', open: this.checked});
	}, false);
	Relay2.addEventListener('change', function(e)
	{
		publishUpdate({item: 'Relay2', open: this.checked});
	}, false);
	Relay3.addEventListener('change', function(e)
	{
		publishUpdate({item: 'Relay3', open: this.checked});
	}, false);

})();
