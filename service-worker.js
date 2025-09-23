self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("actividad-cache").then((cache) => {
      return cache.addAll([
        "./",
        "./index.php",
        "./login.php",
        "./panel.php"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});