// fabrika

var cacheName = 'pwa_v1'; // нужно менять имя при смене контента сайта

var filesToCache = [
// home page
  '/index.html',

// home page head
  '/images/ansimeta.js',
  '/images/main.css',
  '/images/sky.jpg',
  '/manifest.json',
  '/sw.js',
  '/favicon512.png',
  '/apple-touch-icon.png',
  '/favicon.ico',
  '/favicon.svg',

// home page links
  '/pagelist.html',
  '/50/001.html',
  '/images/page-front50.jpg',
  '/search.html',

// other
  '/images/fabrikahome.gif',
  '/images/page-front100.jpg',
  '/images/fabrika-frame100.jpg',

  '/50/002.html',
  '/50/003.html',
  '/50/004.html',
  '/50/005.html',
  '/50/006.html',
//...
  '/50/127.html',
  '/50/128.html',
  '/50/index.html',

  '/50/images/001.jpg',
  '/50/images/002.jpg',
  '/50/images/003.jpg',
  '/50/images/004.jpg',
  '/50/images/005.jpg',
  '/50/images/006.jpg',
//...
  '/50/images/127.jpg',
  '/50/images/128.jpg',
];

// Start the service worker and cache all of the app's content 
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

// Serve cached content when offline 
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
