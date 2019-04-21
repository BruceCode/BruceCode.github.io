if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
    
    Notification.requestPermission(function(status) {
		console.log('Notification permission status:', status);
	});
	
	function displayNotification() {
	  if (Notification.permission == 'granted') {
		navigator.serviceWorker.getRegistration().then(function(reg) {
		  var options = {
			body: 'Soy una notificación de las ' + Date.now(),
			icon: 'img/jr.png',
			vibrate: [100, 50, 100],
			data: {
			  dateOfArrival: Date.now(),
			  primaryKey: 1
			}
		  };
		  reg.showNotification('Hello world!', options);
		});
	  }
	}
	
	displayNotification();
	
	setTimeout(function() {
		var d = new Date();
		if(d.getMinutes() === 00) {
			displayNotification();
		}
	}, 1000 * 60);
	
	
	//const applicationServerPublicKey = '<Your Public Key>';
	
}
