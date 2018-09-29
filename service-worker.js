importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.routing.registerRoute(
  /\.(?:js|css)$/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'static-resources',
  }),
);

const postHandler = workbox.strategies.cacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new workbox.expiration.Plugin({
      maxEntries: 300,
    })
  ]
});

workbox.routing.registerRoute(/\/seasons\/\d+-\d+/, args => {
  return postHandler.handle(args).then(response => {
    if (response.status === 404) {
      return caches.match('pages/404.html');
    }
    return response;
  })
  .catch(function() {
    return caches.match('pages/offline.html');
  });
});
