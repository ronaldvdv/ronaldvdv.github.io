const staticCacheName = 'pages-cache-v1';

self.addEventListener("install", event => {
    console.log("Ready for install");
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll(["/", "/index.js", "/sw.js", "/images/icons-512.png", "/images/icons-256.png", "/images/icons-128.png"]);
    })
  );
});

self.addEventListener('activate', event => {
    console.log('Service worker activating...');
  });

  self.addEventListener('fetch',(event) => {
      
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
      caches.match(event.request)
      .then(response => {
        if (response) {
          console.log('Found ', event.request.url, ' in cache');
          return response;
        }
        console.log('Network request for ', event.request.url);
        return fetch(event.request)
  
        // TODO 4 - Add fetched files to the cache
  
      }).catch(error => {
  
        // TODO 6 - Respond with custom offline page
  
      })
    );

  });