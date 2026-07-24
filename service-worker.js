const CACHE_NAME = "wild-fanfest-offline-v2-layout";
const APP_ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.webmanifest",
  "./images/background.jpg",
  "./images/logo.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./images/products/0001.jpg",
  "./images/products/0002.jpg",
  "./images/products/0003.jpg",
  "./images/products/0004.jpg",
  "./images/products/0005.jpg",
  "./images/products/0006.jpg",
  "./images/products/0007.jpg",
  "./images/products/0008.jpg",
  "./images/products/0009.jpg",
  "./images/products/0010.jpg",
  "./images/products/0011.jpg",
  "./images/products/0012.jpg",
  "./images/products/0013.jpg",
  "./images/products/0014.jpg",
  "./images/products/0015.jpg",
  "./images/products/0016.jpg",
  "./images/products/0017.jpg",
  "./images/products/0018.jpg",
  "./images/products/0019.jpg",
  "./images/products/0020.jpg",
  "./images/products/0021.jpg",
  "./images/products/0022.jpg",
  "./images/products/0023.jpg",
  "./images/products/0024.jpg",
  "./images/products/0025.jpg",
  "./images/products/0026.jpg",
  "./images/products/0027.jpg",
  "./images/products/0028.jpg",
  "./images/products/0029.jpg",
  "./images/products/0030.jpg",
  "./images/products/0031.jpg",
  "./images/products/0032.jpg",
  "./images/products/0033.jpg",
  "./images/products/0034.jpg",
  "./images/products/0035.jpg",
  "./images/products/0036.jpg",
  "./images/products/0037.jpg",
  "./images/products/0038.jpg",
  "./images/products/0039.jpg",
  "./images/products/0040.jpg",
  "./images/products/0041.jpg",
  "./images/products/0042.jpg",
  "./images/products/0043.jpg",
  "./images/products/0044.jpg",
  "./images/products/0045.jpg",
  "./images/products/0046.jpg",
  "./images/products/0047.jpg",
  "./images/products/0048.jpg",
  "./images/products/0049.jpg",
  "./images/products/0050.jpg",
  "./images/products/0051.jpg",
  "./images/products/0052.jpg",
  "./images/products/0053.jpg",
  "./images/products/0054.jpg",
  "./images/products/0055.jpg",
  "./images/products/0056.jpg",
  "./images/products/0057.jpg",
  "./images/products/0058.jpg",
  "./images/products/0059.jpg",
  "./images/products/0060.jpg",
  "./images/products/0061.jpg",
  "./images/products/0062.jpg",
  "./images/products/0063.jpg",
  "./images/products/0064.jpg",
  "./images/products/0065.jpg",
  "./images/products/0066.jpg",
  "./images/products/0067.jpg",
  "./images/products/0068.jpg",
  "./images/products/0069.jpg",
  "./images/products/0070.jpg",
  "./images/products/0071.jpg",
  "./images/products/0072.jpg",
  "./images/products/0073.jpg",
  "./images/products/0074.jpg",
  "./images/products/0075.jpg",
  "./images/products/0076.jpg",
  "./images/products/0077.jpg",
  "./images/products/0078.jpg",
  "./images/products/0079.jpg",
  "./images/products/0080.jpg",
  "./images/products/0081.jpg",
  "./images/products/0082.jpg",
  "./images/products/0083.jpg",
  "./images/products/0084.jpg",
  "./images/products/0085.jpg",
  "./images/products/0086.jpg",
  "./images/products/0087.jpg",
  "./images/products/0088.jpg",
  "./images/products/0089.jpg"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      return fetch(event.request)
        .then(response => {
          if (!response || response.status !== 200 || response.type === "opaque") {
            return response;
          }
          const copy = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
          return response;
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
          return new Response("", { status: 504, statusText: "Offline" });
        });
    })
  );
});
