self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("visionai-cache").then(cache => {
      return cache.addAll([
        "/index.html",
        "/styles.css",
        "/scripts/tts.js",
        "/scripts/firebase-config.js"
      ]);
    })
  );
});
