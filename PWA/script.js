if ('serviceWorker' in navigator && 'PushManager' in window) {
	navigator.serviceWorker.register('./sw.js')
    .then(reg => {
		console.log('Registro de SW exitoso', reg)
		swRegistration = swReg;
		initializeUI();
	})
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
    
    navigator.serviceWorker.ready.then(function(swRegistration) {
		return swRegistration.sync.register('myFirstSync');
	});
/* 
    Notification.requestPermission(function(status) {
		console.log('Notification permission status:', status);
	});
*/

/*
	function displayNotification(cuerpoMensaje) {
	  if (Notification.permission == 'granted') {
		navigator.serviceWorker.getRegistration().then(function(reg) {
		  var options = {
			body: cuerpoMensaje,
			icon: 'img/jr.png',
			vibrate: [100, 50, 100],
			data: {
			  dateOfArrival: Date.now(),
			  primaryKey: 1
			}
		  };
		  reg.showNotification('Mensaje', options);
		});
	  }
	}
*/
/*	
	self.addEventListener('sync', function(event) {
		if (event.tag === 'myFirstSync') {
			event.waitUntil(displayNotification('Estoy conectado'));
		}
	});
	
	displayNotification('Soy una notificación');
}
*/
