// Service Worker pour cacher les assets lourds (vidéo, favicon, etc.)
const CACHE_NAME = 'gothtag-v2';
const ASSETS_TO_CACHE = [
  '/attached_assets/favicon.png',
  'https://r2.guns.lol/cb266527-84f4-4c15-833c-8c6dc327af31.mp4',
  '/attached_assets/tag.png',
  '/attached_assets/fonts/TaylorGothic.woff2',
  '/attached_assets/fonts/TaylorGothic.woff',
  '/attached_assets/cursor.png',
  '/attached_assets/cursor2.png',
  '/attached_assets/apple-touch-icon.png?v=1',
  // Ajoute ici d'autres assets lourds si besoin
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  // Intercepte la vidéo et le favicon
  if (
    url.includes('cb266527-84f4-4c15-833c-8c6dc327af31.mp4') ||
    url.endsWith('/attached_assets/favicon.png') ||
    url.endsWith('/attached_assets/tag.png') ||
    url.endsWith('/attached_assets/fonts/TaylorGothic.woff2') ||
    url.endsWith('/attached_assets/fonts/TaylorGothic.woff') ||
    url.endsWith('/attached_assets/cursor.png') ||
    url.endsWith('/attached_assets/cursor2.png') ||
    url.endsWith('/attached_assets/apple-touch-icon.png?v=1')
  ) {
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
