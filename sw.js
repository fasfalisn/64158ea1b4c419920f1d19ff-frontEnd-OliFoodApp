// service-worker.js
self.addEventListener('push', function(event) {
    const options = {
      body: event.data.text(),
      icon: 'https://i.ibb.co/CB7x8mk/122ec34fc629.png',
      actions: [
        {
          action: 'visit-olifood',
          title: 'Visit OliFood'
        }
      ]
    };
  
    event.waitUntil(
      self.registration.showNotification('New Order', options)
    );
  });

  self.addEventListener('notificationclick', function(event) {
    const clickedNotification = event.notification;
    const action = event.action;
  
    if (action === 'visit-olifood') {
      // Open a new window or focus on an existing one to visit OliFood
      clients.openWindow('https://83.212.100.226:6001');
    }
  
    // Close the notification after the user clicks the action
    clickedNotification.close();
  });

