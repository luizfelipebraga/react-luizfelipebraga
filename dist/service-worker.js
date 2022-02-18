const CACHE_NAME = "version1";
const urlsToCache = ["index.html", "offline.html"];
const self = this;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        return await cache.addAll(urlsToCache);
      } catch (err) {
        return console.log(err);
      }
    })
  );
  console.log("Inside the install handler:", event);
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(async () => {
      try {
        return await fetch(event.request);
      } catch {
        return await caches.match("offline.html");
      }
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWithList = [];
  cacheWithList.push(CACHE_NAME);

  event.respondWith(
    caches.keys().then((cachesNames) =>
      Promise.all(
        cachesNames.map((cachesName) => {
          if (!cacheWithList.includes(cachesName)) {
            return caches.delete(cachesName);
          }
        })
      )
    )
  );
});
