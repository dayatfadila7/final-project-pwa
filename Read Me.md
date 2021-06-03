# Tugas Akhir Pemograman Web Mobile
## _Penjelasan Aplikasi_
Aplikasi tugas akhir ini dibuat dengan komponen sebagai berikut :

- Html
- Bootstrap 4 , sebagai framework css3
- Jquery , sebagai libary pendukung javascript bootstrap 4
- React Js , sebagai libary javascript untuk membuat interface dan logika aplikasi
- axios , libary javascript untuk fetch data
- data berupa api , di dapatkan dari https://github.com/febryardiansyah/manga-api
## Penjelas Kode Untuk PWA
### Installasi React PWA
Pastikan sudah ada npx sebelumnya
```sh
npx create-react-app cra-pwa --template cra-template-pwa
```

### Install a Service Worker

untuk menginstall service worker dalam keperluan pwa yang diperlukan adalah mengubah unregister menjadi register pada index.js
dari
```sh
serviceWorker.unregister();
```
menjadi
```sh
serviceWorker.register();
```
pada service worker kali ini menggunakan libary workbox yang dapat dikustom berdasarkan tautan berikut :
See https://developers.google.com/web/tools/workbox/modules
### konfigurasi data offline
cek untuk installasi service worker

```sh
self.addEventListener('install', function (event) {
    console.log("SW Install");
    const asyncInstall = new Promise(function (resolve) {
        console.log("Waiting install until finish");
        setTimeout(resolve, 3000);
    })
    event.waitUntil(asyncInstall);
});
```

cek apakah  service worker sudah aktif
```sh
self.addEventListener('activate', function (event) {
    console.log("SW Activate");
});
```

Mendaftarkan file cdn jika terjadi offilne tetap bisa diakses
```sh
registerRoute(
    ({url}) =>
        url.origin === "https://maxcdn.bootstrapcdn.com" ||
        url.origin === "https://code.jquery.com" ||
        url.origin === "https://cdn.jsdelivr.net" ||
        url.origin === "https://cdnjs.cloudflare.com",
    new NetworkFirst({
        cacheName: "cdn-files",
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
            }),
        ],
    })
);
```

Mendaftarkan main domain api  jika terjadi offilne tetap bisa diakses

```sh
registerRoute(({url}) => url.origin.includes("kaedenoki.net"), new NetworkFirst({
        cacheName: 'apiData',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 360,
                maxEntries: 30
            })
        ]
    })
);
```
Mendaftarkan file dari domain api  jika terjadi offilne tetap bisa diakses
```sh
registerRoute(({url}) => /.*\.(?:png|jpg|jpeg|svg|ico|gif)/,
    new StaleWhileRevalidate({
        cacheName: 'apiImages',
        plugins: [
            new ExpirationPlugin({maxEntries: 30}),
        ],
    })
);
```

### konfigurasi manifest
manifest pada pwa berfungsi untuk memberi tahu browser tentang aplikasi web Anda dan bagaimana seharusnya berperilaku ketika 'diinstal' pada perangkat mobile atau desktop pengguna dengan konfigurasi sebagai berikut :

```sh
{
  "short_name": "205411102 Final Project",
  "name": "Final Project Pemrograman Web Mobile - 205411102 Dayat Fadila",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "icon-192x192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "icon-512x512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

### Showcase
https://final-project-pwa.vercel.app/

