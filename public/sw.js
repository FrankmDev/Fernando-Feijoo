// Kill Switch Service Worker
// This worker immediately claims clients, deletes all caches, and unregisters itself.

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            console.log("Deleting cache:", cacheName);
            return caches.delete(cacheName);
          })
        );
      })
      .then(() => {
        console.log("All caches deleted");
        return self.clients.claim();
      })
      .then(() => {
        return self.registration.unregister();
      })
      .then(() => {
        console.log("Service Worker unregistered");
      })
  );
});
