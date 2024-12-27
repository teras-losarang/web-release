'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "f393d3c16b631f36852323de8e583132",
"index.html": "73afc5f9b960320b933b65dfc3d428ce",
"/": "73afc5f9b960320b933b65dfc3d428ce",
"flutter_bootstrap.js": "87867e57cdef2a5342d5788866bbafab",
"manifest.json": "56128fc6ec7568b99d6fc24cfa34a218",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
".git/COMMIT_EDITMSG": "f21435f9ec3dea1f1ec8e9a9f71f272f",
".git/refs/heads/main": "230b362376445000d17ac946b56c04c7",
".git/refs/remotes/origin/main": "230b362376445000d17ac946b56c04c7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/config": "bf975c36ab68f26d326b99bab343a151",
".git/logs/refs/heads/main": "4c65e7f1e840b3bb2155d430727b613e",
".git/logs/refs/remotes/origin/main": "8ccd3010cb2ea945cd12cc347fd84f81",
".git/logs/HEAD": "a4a3ffbb1a6d9a2848741903411f7edc",
".git/objects/c4/607e319e1bc3ccb79ed8d4c277dec68586028d": "d70064aa3dcc8321d87bb035475a2214",
".git/objects/37/e21ed65672289f4cac7771f85ae8a780be5aee": "16cd5992c628c2ba1b4228991f34cdcd",
".git/objects/1b/cd88e99c7ba1ea50e4ac87fa7f3deba1bd1383": "31817a2c40af1b40f8c0c9ae41a73094",
".git/objects/e6/2ed3c0b1bb5b19690f4bb9562a1131f21386c8": "02eab483ef4311f421f2993e7929b86c",
".git/objects/14/a2edb5d31d4c62c81c41a24b261f5331afb61f": "912a2fa1f07e9b25a82819c9d85ac5d5",
".git/objects/78/eaa85a61bb832b6e43494e1f8f319b57ce3334": "88a251360986dbb141eb84fbe8965313",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e4/d1647b8edd07b24baad3d3ec15f9336c0553f9": "7221d1dfc04ac97f6926b0dd5fd8f979",
".git/objects/e4/f6cab6063886c5ab4cc39ab278ccfb1c7c2c0b": "70149425c926f7408c3955fb6f7bf568",
".git/objects/27/e15aa0879bf03a91e369f86fac333e16a41133": "22ee8abcd4081dac33ddae09fa55aed6",
".git/objects/a5/c877a53132f84b1d13a8385c6aef0922418fbf": "5c9ba9ee125034720560bbb70ecf43a6",
".git/objects/2b/3f19bd8be50b87f207f8fb98c378eb63a09459": "5b78be33417002ff597e040008a20529",
".git/objects/2b/0d1695a868e63ceee7ddc64cd5d2bf80a3b21a": "f3d458f0b8f6aff21ddc70bd8d7433f2",
".git/objects/20/c30c86580c15e3596a3533b4fd5720fa1a0c1e": "200f4b83d6defd7de7bf0dd1ed7b121f",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/70/72ad3c30ab46a446f5aefad5bd933f48218124": "8b8b54bed4848b455cc4283efd43a894",
".git/objects/5a/0ca30ea6366f4a13cdeb875aea18343d8675e1": "97d5c501a9bb3580859ad5bd12438a72",
".git/objects/5a/38facc7203029eb1569454b41f1521db8075f4": "186769af19dfd0957a185cf98ebacbad",
".git/objects/0c/404ac83e06028a50b7eff818cda6ce0b724405": "103d1d0bb6fea0ebef47196559fa2833",
".git/objects/3c/0475db61f44f8f4dbf0a4f31c29e7b91f445b4": "f9143d0bf90abb039793bc6cc6affc62",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/25/42fae728563354a3dbface559af05f43eb4b8a": "6239b7be1777f57600b3b3cd4bdd1783",
".git/objects/25/e7dc402893b4081589ae9f7ceca86fc49ea22c": "a7e7c9cad26b9cca57259cc1213cc2d3",
".git/objects/4e/38df5801eca01fad15676bec557c6d95728cdf": "93dfc2f0aa4e7c6c3729e5264ed0c11c",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/a8/baff824e0539f3f0078314cf7a9381a8808f25": "43c1e82e2c7c14c5a2b1d45158bff157",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d9/b9e52f994aaf9d748fa74fb88fa0ff68f41d8d": "21118725b2e17984862adb2d692921dd",
".git/objects/d9/754990e3959a6ed188f5f2bc8be4c7b016bdbb": "e8cc024e5b5a64f4309185d2452e3085",
".git/objects/86/0b2b2aa18e73391eeed138d89b67d254043256": "a33bacacb3de123438a0f4617d734c32",
".git/objects/6a/3145d11c8b8a6b81f274a951268064bc3ee1fe": "3cf5a1871c5a98a80e12f0e34cb487bb",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/af/6c34e9b1b8b47f3c51cf1377ff2eca33e66e7d": "25f242c527f2b94341366eefd79714ef",
".git/objects/88/c99b9e4dbc11e64d8cdaff74c26cdb38061847": "8299f2ec5eebce399f822146e16c6ec4",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/810796ae3bd09ad14659b0e56e0f16e8c63103": "1c368c73b8c4ff7ea38efd1f577d30e1",
".git/objects/41/b239df0543073e712af301bc06375a6b51062f": "a2b82866e86a0b41ff0e68c1924b57fc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/e3/ce07b502145686dd6cab3e7b9ad092694b7b30": "aea53b5626ef50bcf396631b645f96f3",
".git/objects/57/e3c7c958e77a8603bb17c35f900d16d24ba5e9": "e4dedfd45b17f9685264569a04e55ac9",
".git/objects/95/c53a8d4ab2a1a14751bfb2899fd59f6e9c43b0": "7c9e0de0d4d670a154d16bd5b7340efc",
".git/objects/8d/8a1b8a2defd89267b4d56a64bb2c37fae94b9b": "032daa8184ea53eb276945de9c4561ed",
".git/objects/9c/ba3c1c907a1c3f87440cdff5ca72911dc3d3bb": "92d42169f96b81df71b780cdbecec843",
".git/objects/9c/a7ddc1c883089034a7c1bc00ffd9dc4a2a0359": "8115022bbb5d6fb49d85d7571c486a09",
".git/objects/be/67410fd0a5aaf22e118ff0dd3be2dcd441f34c": "6b6267f4eaa77a2f3de6d0252bfef1c8",
".git/objects/ec/d06e6404f4ce37c740e720cddc2b7cc39bab0d": "28c3614b6434564e21100aab2604bf3d",
".git/objects/ec/178d532e2b262778ffbb0806d41f12480237ed": "dc36942d94d5a3e436550246c84537d4",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/dd/1f61d46b8909a0567e7dc97f749e9d5d7de561": "6687ebcc50458b85c3ee458c89cc7c60",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/92bc2255cab75fbdf4ffb649bf520ef1b5177b": "8487885330f62e181ba40f903c5be56b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/df/b7b7da504117bfbaaa13f0fc07b932ba0627b5": "e9db8f2230fdfdd570e3406ab5651540",
".git/objects/63/71526abf5ed2f7ed19273baf7d052b346dee7e": "c7c513ee105f99f182402c90a9f5471b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/8a/0b1f970679873c03dc03a4273f9e1a62e3fa6a": "84d1324347e604c719b7301edceb3e7b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/99/b2ca015eacc16ea5088e1b1619e65c088ef831": "48d5b4563805de7f3ccf592231e385c9",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/b4/8d42e79fae809432d64b9b223ed8e6dedb3b05": "0b6a591c2542f20b4b16a8330969c6f7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d5/3bc199f03aa5235a067fc5b4f48fae4587f31a": "30d1003d6ddd879ab64d1dd4564c5579",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/12/bc508fc293ba046051322479e82eb90c6d0765": "5f613de853fcaba075f6a3499f1f2bc6",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/4c/07938695c70826a50990dd8b912103b10be70f": "5ca2bc58fb7a1f6ba05bb522e7f81620",
".git/objects/4c/df298866ceadbf694d0132323479f83ba720a7": "3755308796e1e3164d0a12bba12745d5",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/68/192e3fe06cb1c2fd90ada8269565a34151c835": "d25c0e06885b2a826604c662eab5fb5e",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/09/829d49e4bed3fcea408b15ca15f69b4ff27655": "645a4a166362f528efccfeeb78e77137",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/69/8e105a63988acfc6fb488d2b9c8716d1168181": "41514d3627386831714e045182429ff3",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/0b/f32b8f05ddcfd09a466a9a6ffb7719a6caaf76": "83fac37dcdffb23632324fdf2e758582",
".git/objects/e1/65c0add8ee828810b32dfcfc8aa66be5ac2b40": "f4a5adc29f7251ca9e2650e2d866dec6",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/db390db049fd6fad7f1841ed47e09aee56549a": "677088e951e5bee4da3dd3767d09dbf7",
".git/objects/31/5e25b512946fd59ba4125fd95598dad6406a4b": "0b0a0878e932a82a1205ccfa02899f1a",
".git/objects/6c/30122f24a5ad962ede29fb20424a48dc5971e1": "c8042a1e14dba1a6ad1e8cac7adfcf0b",
".git/index": "7f055aaa629f335127e68e9b086ea6f7",
"assets/AssetManifest.bin.json": "8e8f25c9b7ef6eab431b9a79f475ac51",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "eba76aa93a226933db7232eff01c2906",
"assets/FontManifest.json": "37d3de80bf1ba3369bf09176c7f1247e",
"assets/AssetManifest.json": "e43d42ab766495bd055ec17b61a4cc0e",
"assets/assets/logos/logo.png": "1fa87dffedcd93ba630000548b495e00",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/images/product.jpg": "728c0dbad722c1944fbcabdbe1185475",
"assets/assets/images/banner.png": "65072b60423c17986ca521c2b9c26f3f",
"assets/assets/images/cloth.png": "285faed00d334116cbce0a4e265b7358",
"assets/assets/images/on_boarding/2.gif": "d136ae0a675502dcfe8f6d9f7f092b6f",
"assets/assets/images/on_boarding/1.webm": "b4ce8a62310fe274dd91be5c8fa32d93",
"assets/assets/images/on_boarding/1.gif": "729dd7a47ebbc8ec5263be1782086a74",
"assets/assets/images/on_boarding/3.webm": "caf8eceb0897677a85b6fedf8b5192ed",
"assets/assets/images/on_boarding/3.gif": "8c9a6c875e95a64d7fc49cf90a0f18cd",
"assets/assets/images/on_boarding/2.webm": "e48e55f7a79e544b36f32c3ce42e89fa",
"assets/assets/images/send-email.png": "484eb015a540e00d0502be40d5879c89",
"assets/assets/images/success-email.jpg": "e08fe6661af3b0ccbee4a3ef5e0f4bca",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/AssetManifest.bin": "0f53f3ca5b4d3ddbd943c1f16d0efe30",
"version.json": "389a6e6e6f34312743ca5f36467c84b5",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"main.dart.js": "dc12d2fc711e2e3f658698df04bef12c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
