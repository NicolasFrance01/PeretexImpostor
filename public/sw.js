const CACHE_NAME = 'pepe-impostor-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './main.js',
    './pepeicono.png',
    './pepemenu.png',
    './pepelibre.png',
    './pepetriste.png',
    './imagengenerica.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
