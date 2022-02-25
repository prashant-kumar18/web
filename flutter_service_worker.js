'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "26ab0db90d72e28ad0ba1e22ee510510",
".git/config": "5ada9cbfc48b8a023d882ea5dc13990c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "11b1693fbf4d3477ae3d21a24c6a588c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8ebede6a76039a8afbe36a476f331345",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5e771ee638450b0aba0e42a818e2cbd9",
".git/logs/refs/heads/master": "5e771ee638450b0aba0e42a818e2cbd9",
".git/logs/refs/remotes/origin/master": "97447ffef76a065be4aaa46b4953cda1",
".git/objects/01/a230bfee1db747c7311640e552fe628749b59f": "59aee9997fc70d371977e4215ae4adcf",
".git/objects/05/fe0ffb72e8ba8eeb62dd20cb852cf005cf5ec4": "afec30af0595599edc796667dcbcddb4",
".git/objects/08/131c48ee133ca2911e510d6615b6b76c785f4f": "f1641a39a0ff33dd3b831c463efa94fb",
".git/objects/0b/f80920fd86aef9f1424a09676f5f5809bd3896": "d3b48899efa637f9841d2ffa090fcdb3",
".git/objects/0e/5934e269d64cf6829f913bd10e1c00413c8160": "25672cce0e35d89a8406b8e59e7d2b1d",
".git/objects/10/530c384bb53e912605ca935a18431d1c2e659b": "732fa0bbd6a43a6a16d471b0da973db3",
".git/objects/13/dd336ce9f0f37923ca0265899ea4aa15c826ca": "92c197244619f0440d80acedcac2d124",
".git/objects/16/ed5c5ace252c409e3b8b4199e8389ca0482174": "232170d65c6da20489baf269281453f7",
".git/objects/1f/189fb262e85c3dfe150e4c1b3167e5246b0920": "972ff944877772dd9fc92883372f9757",
".git/objects/20/3a14134640d848da99ec674bfe0d92b4ddee6f": "48cf547de68d6e90366750485be52e2c",
".git/objects/25/e43d31e34e8301159ae380380f691419e604af": "1412651b0f465d203874469942907a49",
".git/objects/26/9ffde8261f4fbef97e1cbd9ce2bc2356e5033f": "790c7a32f7f180d2fc483a4ea0cef142",
".git/objects/27/b674f8e0ef2f0273aa4bc93e9216bee4d13cd6": "db4423237eb848b5d6eb0e694a9d093a",
".git/objects/31/d2cba608909b9c9d76cdd0499643545e354bce": "2ba7ad316cd144b99bb749008e32e3cc",
".git/objects/3b/f1a91da37306111111067ac51333a01fa5522a": "3c46e1dadab1414775422d95a543db4e",
".git/objects/3c/c6dd026423552b758406de43af5013cb3a0fed": "153c868c0a500075006084b9b0e4837a",
".git/objects/40/a891f515d7e4d11b34111df25b4080b160f5ed": "d2de95ea3e645a017964181bcd49b36a",
".git/objects/44/1cb184b5b61ad395df0bd17d824e6089152cb9": "47fcfa974f757d9ed350f220fa61dc33",
".git/objects/44/8a25820e48e2a914739a0149a277155de76f55": "809dc8b07dd406af221c8941b5d163cd",
".git/objects/46/845dfa1f46224d47fbc6e3ff519447c645b0df": "9aa162de918eaac7111c744524075672",
".git/objects/4f/2f20cc24ed7b4d008c003aeb9d8127b7a9fb7b": "f9c8a6b44eda44cd2b18008b92f64208",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/56/0cdeb69bdcc972f47147005015fe7149c56603": "a47bd034cb803831eba7897cc5052bf0",
".git/objects/57/ce6109acbe8fa1854adae876a68b006dc70e3c": "f2d3f93a7c7bc40f7348beb37c69b4f3",
".git/objects/5b/b23b84335f596d70f6c84ab1aa66e771928c68": "a8e5e3e00a1de5c674b01fb09efc2bd1",
".git/objects/5e/d70767cbbff515341313e556cd19121c060c90": "7d2640c432e5609d70f67ddb2b7507db",
".git/objects/62/6b239c40c703807d2f8583ad6029f649e3fb18": "82542968e1828aa57c66a62e4e2bfd41",
".git/objects/67/20e32ccbb0f9201dfbec389b0d06f21d5f0715": "cf1dffbf993a27db9df31dfc2b4bb435",
".git/objects/6a/9594f744621d7d852f893bea7f675568a182aa": "251d2faa2ed10aedb8db5e430f378301",
".git/objects/6a/e10aeacb1498c66af7ba48dcc2014db40d9fc2": "05ffe50e3d350fb07364602d4aefd48e",
".git/objects/6d/a192d0bcfa6acceb92e10115a2fca6cc1d6b85": "332462b8e0552b2a28c818c806cfd46e",
".git/objects/6d/c85a6308d39b1c1dcfe5dc6da222bd47292a5f": "697c3694da0f78c54cd79ae4bd1209a3",
".git/objects/73/95a6d30797e93b678643df634b6c827e3e7662": "70df69da45229037889ab3db59ff2c49",
".git/objects/76/ddd64e3b4ef913db1a5e3a4b22982a2fbb4c15": "937d382d645f41272f83e2ac28418892",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/cb55f31eb2ea71654b3e35d252d6eb32c8cf12": "5b8f2b029c533dd54909b4fe62bad80f",
".git/objects/7b/f0a9b9c3eb8bf53b90703c6774b495da1104e3": "01c00878ec4c15eca0bdf72e646ed19f",
".git/objects/7e/0d4b5784d384f850f628e151a9d1f87b0f8ba4": "c8c7fac5462af4f0a9e1e1bb4180eb29",
".git/objects/84/1fcd315fcb2f926269fe8581215a6265f158b5": "895e22acd8e87f6c1fcf7fa7fb839133",
".git/objects/85/657f4a65e9b83b09bf3a97a9427843f071dab9": "95bb9b8baf5b91bf64b3b8e912d147f0",
".git/objects/85/9730aa070c8255628f91cac0982af6d9e55cdf": "621b4e06d3010b88b39f55e8c9966561",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/8d36c3957e701c3cdc3ae0347f3bf02d71b799": "e97e0b74c34820a64d6086be6802d0a9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/9794b304e8c0b34634957fb708abb05880fc53": "22ee092938f089458db5b048e46c742c",
".git/objects/90/c2d0e5f35bacc36bebd6ef96a71cf4ac9c8c8a": "ef6b9a535aa3294e173593229330ae7e",
".git/objects/93/820a30cd7b14b4aae5beef4b146a361b2c1af3": "20c45a34ee9d8a14d9af863cba33a8da",
".git/objects/9c/25cc21e784d73d03d7f8d5437acb60e9e0d74f": "73093524b777e8bd29a2461d4228c4e5",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ccbd121e56d4c23ada58a0373a03100f774c58": "07375c21577f39b5c35ec3429265a6b8",
".git/objects/a9/51c2553aef4959bf157593e9d1f48993fe2b25": "f911c973f1258e12f4d18a2402352326",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b0/bd7bbaeafc73604825082e2f42b22afbc2ee94": "ee20059192b70390e2e9097e32f4ee67",
".git/objects/b1/499ccc677f9c8bbb3baacce6a40a048989df6c": "3618ae8260953891916d4357d76250d8",
".git/objects/b4/442df675bbcf36ea42f38b4405fdd2895b38b3": "359a1cee229055059bf6761764302b99",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/1c8e20ce307c0d44eb9a391641f04186f34b42": "b9a9e0012b8f000f7ba1ba7b65d18530",
".git/objects/c2/dabe94bdbc702598338ef19fac700fe267a3b9": "1abf66f578b0b05827a556b16becb7e6",
".git/objects/c3/0771faf2d78cfcd88b9d9e5d9c507815a6dc6c": "b8b7c5d9ac13c3f192de199013775b0b",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c4/fc8f07f0a7478ffd687cdc3aa71a90c017cd0e": "6c1439ba7bf931d6c7a91bfe6f2d0355",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d3/b265813c6504fb9a2fd53235d9c2a199b4f4af": "e6e5d67ce00e78fba01e8a988a2ec134",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/07dcb15568887b22bb54efc9c1733ac9f33692": "5412ba7af34e0421f379cc69535ad8af",
".git/objects/e0/7d39f9d56b53ab725d7926a2cef4bfb6205575": "13ec13381e9f842971b6ba47350050cd",
".git/objects/e0/9b1261e8105e12a3b079c6b1cd938ee63e7cce": "41bdfa727a79d57c09f1f4aa47cf8e76",
".git/objects/e1/090e1fbb5475d25de2c575d71792f58d425467": "b23069b6d8011dcf55f296a4bfb10283",
".git/objects/e1/ac4f14968e8addf45eec67c381e2002f2bf4ed": "5ea85290aae0e401692b57c439c09ba7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/1c2f7f769ff7857d9b21c44e1a3c8193a48540": "5132fdb41dd55e070b8ab9ee343b2f14",
".git/objects/ee/81ba82da47dc114afc620c8105ce77e3bc0c0f": "7261bf53471b177742a1819d98153911",
".git/objects/f0/fe8236b9aa517aa63925753bfa3316f828f9c4": "83b964571e5387ee4d3b06ff8dfa0c19",
".git/objects/f2/d828464e45b8c68829a55c858c7beb60c10aeb": "0711c56bf96bd3bea5279b93ca6b683e",
".git/objects/f9/af5649989d74a200c83f4276684e48e83df5c5": "733ca69caa1b5033e4060322c22f020b",
".git/objects/ff/3878fbf4ac71dc21778a4229d8e530b2e10545": "f7f4d6ffddf7b71e8c59fbfa9c0214a8",
".git/ORIG_HEAD": "4b2ae158d3265dc47144f31cdf62b58d",
".git/refs/heads/master": "4b2ae158d3265dc47144f31cdf62b58d",
".git/refs/remotes/origin/master": "4b2ae158d3265dc47144f31cdf62b58d",
"assets/AssetManifest.json": "e552e3aca0eee507e94cba73c24a8c7b",
"assets/components/icon_background.svg": "94031966f2b3ff0780f4e25d69f4ee22",
"assets/components/smile.svg": "88758d376e03810b9e57895258c1716f",
"assets/components/steps.svg": "2092c88063f2e92283c41fadedeeb887",
"assets/FontManifest.json": "1a6184c6ca656e8be25d25329c87e502",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/images/cartoons/healthy1.svg": "94cac88aa2c0dc379b82ff1b1cd25a33",
"assets/images/cartoons/healthy2.svg": "c5fe492d245697f7389a2567ddc74f80",
"assets/images/cartoons/healthy3.svg": "d22a7e3226db34de56dae99614af7688",
"assets/images/cartoons/healthy4.svg": "7c932466071830585384baa01b7c57af",
"assets/images/cartoons/healthy5.svg": "ad6f5ccf09593a027721a147868bed40",
"assets/images/landing_page/left_design.svg": "3980fcd9d10a07d8eed7662558527063",
"assets/images/landing_page/photo_design.svg": "e566b967d6772456f641d7dd5a2e225b",
"assets/images/logo/logo.png": "c99f0b5e4e88f047d15e538cf23ba00b",
"assets/images/results/r1.jpg": "f87604c582fa440fb502e2028e2d3a58",
"assets/images/results/r2.jpg": "d5d875cc88cc9ea3e0e07999aeecc8a1",
"assets/images/results/r3.jpg": "d176ab7540e949bd007263a8fde14c12",
"assets/images/results/r4.jpg": "22e1736add5d6e125aaff9f6ee619c2a",
"assets/images/review/1.jpg": "ba9d9449c421490590f2553fdc3b8d3e",
"assets/images/review/2.png": "cef8d166bfc8052b84a3f370935349a9",
"assets/images/review/3.jpg": "83e6fb824392d1585fb624ffacb9b902",
"assets/NOTICES": "673e9561b6ee9a751a059d66b09fd3bf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2f14b8a7825956820962326e05f0e310",
"/": "2f14b8a7825956820962326e05f0e310",
"main.dart.js": "978d1eee8dd8fdec07be1065a289a7ac",
"manifest.json": "d40a67c37513f5f52fe5155c61523fb4",
"version.json": "03aa7820036e95046ebf6bc708103656"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
