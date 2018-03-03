self.addEventListener('install', function(e) {
    e.waitUntil(caches.open('arsenal-history').then(function(cache) {
        return cache.addAll([
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
                            '/assets/js/jquery.easing.1.3.js',

                            ]);

        })

    );

});

self.addEventListener('fetch', function(event) {

    console.log(event.request.url);    
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
            })
    
        );
    
    });