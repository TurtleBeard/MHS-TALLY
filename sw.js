const CACHE_NAME = 'mhs-tools-v1';
// Only put the ABSOLUTE essentials here
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // we use cache.addAll but wrap it to catch errors
      return cache.addAll(ASSETS_TO_CACHE).catch(err => console.log("Cache error: ", err));
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
