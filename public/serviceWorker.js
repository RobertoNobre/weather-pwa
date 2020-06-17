const CACHE_NAME = 'version-1';
const urlsToCache = [ 'index.html', 'offline.html' ];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache');
        })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {

});

// Active the SW 
self.addEventListener('activate', (event) => {

});