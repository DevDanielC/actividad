// sw.js - Service Worker
const CACHE_NAME = "actividad-cache-v1";
const PRECACHE_URLS = [
  "./",
  "./index.php",
  "./view/V.login.php",
  "./panel.php",
  "./manifest.json",
  "./offline.html"
];

// Instalación y precache
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS);
    }).then(() => self.skipWaiting())
  );
});

// Activación y limpieza de caches viejos
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// Interceptar peticiones
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => caches.match("./offline.html"));
    })
  );
});
