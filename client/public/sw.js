// Service Worker for aggressive favicon caching
const CACHE_NAME = 'gothtag-v1';
const FAVICON_CACHE = 'favicon-cache-v1';

// Resources to cache immediately
const urlsToCache = [
  '/attached_assets/favicon.png',
  '/favicon.ico'
];

// Install event - cache favicon
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(FAVICON_CACHE)
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
          if (cacheName !== CACHE_NAME && cacheName !== FAVICON_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache for favicon
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Cache-first strategy for favicon
  if (url.pathname.includes('favicon')) {
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
            caches.open(FAVICON_CACHE).then((cache) => {
              cache.put(event.request, responseToCache);
            });
            return response;
          });
        })
    );
  }
});
