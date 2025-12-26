// Service Worker for aggressive x caching
const CACHE_NAME = 'gothtag-v1';
const x_CACHE = 'x-cache-v1';

// Resources to cache immediately
const urlsToCache = [
  '/attached_assets/favicon.png',
  '/x.ico'
];

// Install event - cache x
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(x_CACHE)
      .then((cache) => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME && cacheName !== x_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache for x
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Cache-first strategy for x
  if (url.pathname.includes('x')) {
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          return fetch(event.request).then((response) => {
            if (!response || response.status !== 200) {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(x_CACHE).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            return response;
          });
        })
    );
  }
});
