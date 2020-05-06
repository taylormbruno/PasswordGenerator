const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/js/password.js',
  '/manifest.webmanifest',
  '/assets/images/icons/logo-72.png',
  '/assets/images/icons/logo-96.png',
  '/assets/images/icons/logo-128.png',
  '/assets/images/icons/logo-144.png',
  '/assets/images/icons/logo-152.png',
  '/assets/images/icons/logo-192.png',
  '/assets/images/icons/logo-384.png',
  '/assets/images/icons/logo-512.png'
];

const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener('install', function(evt) {
    evt.waitUntil(
      caches.open(CACHE_NAME).then(cache => {
        console.log("Your files were pre-cached successfully!");
        return cache.addAll(FILES_TO_CACHE);
      })
    );

    self.skipWaiting();
});

self.addEventListener("activate", function(evt) {
    evt.waitUntil(
      caches.keys().then(keyList => {
        return Promise.all(
          keyList.map(key => {
            if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
              console.log("Removing old cache data", key);
              return caches.delete(key);
            }
          })
        );
      })
    );
    self.clients.claim();
});

self.addEventListener('fetch', function(evt) {
    // code to handle requests goes here
    if ( (evt.request.url.includes('/all')) || (evt.request.url.includes('/find')) )  {
        console.log('[Service Worker] Fetch (data)', evt.request.url);

        evt.respondWith(
            caches.open(DATA_CACHE_NAME).then(cache => {
                return fetch(evt.request)
                .then(response => {
                    if (response.statues === 200) {
                        cache.put(evt.request.url, response.clone());
                    }
                    return response;
                })
                .catch(err => {
                    return cache.match(evt.request);
                });
            })
        );
      return;
    }

    if (evt.request.url.includes('/clearall')) {
      evt.waitUntil(
        caches.keys().then(keyList => {
          return Promise.all(
            keyList.map(key => {
              if (key === DATA_CACHE_NAME) {
                console.log("Removing all cache data", key);
                return caches.delete(key);
              }
            })
          );
        })
      );
      self.clients.claim();
    }

    if (evt.request.url.includes('/delete/')) {
      let evtUrl = evt.request.url.split('/delete/');
      let cachID = evtUrl[1];
      console.log('90', cachID);
      evt.waitUntil(
        caches.keys().then(keyList => {
          return Promise.all(
            keyList.map(key => {
              if (key == DATA_CACHE_NAME) {
                console.log("95 Removing all cache data", key);
                return caches.delete(cachID);
              }
            })
          );
        })
      );
      self.clients.claim();
    }

    evt.respondWith(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.match(evt.request)
            .then(response => {
                return response || fetch(evt.request);
            });
        })
    );
});