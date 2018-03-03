var cacheName = 'arsenal-history';
var filesToCache = [
    '/',
    '/css/main.css',
    '/assets/img/emirates-fa-cup.jpg',
    '/css/owl.carousel.min.css',
    '/css/owl.theme.default.css',
    '/assets/js/jquery-2.1.4.min.js',
    '/assets/js/materialize.min.js',
    '/assets/js/owl.carousel.min.js',
    '/assets/js/setup.js',
    '/assets/js/charts.js',
    '/assets/img/emirates.jpg',
    '/assets/js/jquery.easing.1.3.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[Service Worker] Fetch', e.request.url);

    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  });
