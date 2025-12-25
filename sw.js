// Service Worker pour cacher le x
const CACHE_NAME = 'gothtag-v1';
const x_URL = '/attached_assets/x.png';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.add(x_URL);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Cache le x agressivement
  if (event.request.url.includes('x')) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((fetchResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  }
});
