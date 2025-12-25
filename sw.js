// Service Worker pour cacher le favicon
const CACHE_NAME = 'gothtag-v1';
const FAVICON_URL = '/attached_assets/favicon.png';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.add(FAVICON_URL);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Cache le favicon agressivement
  if (event.request.url.includes('favicon')) {
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
