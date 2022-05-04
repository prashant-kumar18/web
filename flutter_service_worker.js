'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2284b1978beaa735c4fe866601f8093",
".git/config": "5ada9cbfc48b8a023d882ea5dc13990c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2b711443219f364a44231739e45fa887",
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
".git/index": "445827a4d31fa288f95fcad011f3076e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "31e76174f6a4bc3098ef458e3bfa7876",
".git/logs/refs/heads/master": "31e76174f6a4bc3098ef458e3bfa7876",
".git/logs/refs/remotes/origin/master": "0a293b9598da46e71206da8c758f408d",
".git/objects/00/4b21e5e700fa80ffc80defe2e0513cda63a773": "ba59d99e89f4007d5305f68527df0b1c",
".git/objects/01/a230bfee1db747c7311640e552fe628749b59f": "59aee9997fc70d371977e4215ae4adcf",
".git/objects/05/fe0ffb72e8ba8eeb62dd20cb852cf005cf5ec4": "afec30af0595599edc796667dcbcddb4",
".git/objects/06/6d74d54845e0e1ecd917e214af34a6c00dbce8": "8d7c2c292cdb7d81c993a3ef84022c51",
".git/objects/07/1b6ae7d1d0c139c22a11b0aae0842aad8f5937": "0f07e3d84fd4b949ec4189c84aef9700",
".git/objects/08/131c48ee133ca2911e510d6615b6b76c785f4f": "f1641a39a0ff33dd3b831c463efa94fb",
".git/objects/08/6d8bdbaaa1d26f4d09b0a5b2ad4d8df6e2f9c0": "ab5d76d9ac3345f1a7853101822b8220",
".git/objects/09/650b5c1754217cc7180e335c3f3bfb69c45db1": "41718a5c649d8a5c9969fde6243b1226",
".git/objects/0b/afff26e74e75c3bb18906eef32681eb815f139": "3fc35022d5e50d8efefab7322eb80adb",
".git/objects/0b/f80920fd86aef9f1424a09676f5f5809bd3896": "d3b48899efa637f9841d2ffa090fcdb3",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/5934e269d64cf6829f913bd10e1c00413c8160": "25672cce0e35d89a8406b8e59e7d2b1d",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/530c384bb53e912605ca935a18431d1c2e659b": "732fa0bbd6a43a6a16d471b0da973db3",
".git/objects/12/e864f456f73e2e53b7d84662f7d475526a23e9": "f5c8f781a284f0ae3618d3d424bf69f8",
".git/objects/13/7948b2c38dca4d1c29bf85d885fe216af41729": "b5742bec1f0d66ad35154491b314601e",
".git/objects/13/dd336ce9f0f37923ca0265899ea4aa15c826ca": "92c197244619f0440d80acedcac2d124",
".git/objects/15/d9a88a93a0c7977306c92812a0701772e172c0": "e989e455bee7b0d7b59acae17c7deabf",
".git/objects/16/ed5c5ace252c409e3b8b4199e8389ca0482174": "232170d65c6da20489baf269281453f7",
".git/objects/17/4c00da5b3491339a44056dcee6d415badc2ff4": "7b5da81388e1aebe2c85bb691aedf28f",
".git/objects/19/2050bb25f981b6306db2fd30589d3d427ee986": "823cefe07e734d3fc4ed237a180cc4f7",
".git/objects/1a/4298ee5888d998970bc1f8225f757906071c91": "54544fb6a435a96b2999d853aa585cbc",
".git/objects/1c/b453ca5931563b2b22d58eefde582e3f111714": "ba9b14551596faf7c1dafd2caea7c150",
".git/objects/1e/68a8491f78869aac3b1e573d7b2de73b46ab46": "6b22681853ba1f9bab77143aeeb3503c",
".git/objects/1f/189fb262e85c3dfe150e4c1b3167e5246b0920": "972ff944877772dd9fc92883372f9757",
".git/objects/1f/1e97b44ebe8226375e7fb91837b57f4a0eeae3": "9393d03b3060b0bc44dcf5f449bc8438",
".git/objects/20/38af6104921dcc275f005843e9cb3fd48373d0": "fd4fdefb01186391b072d9896a5792fc",
".git/objects/20/3a14134640d848da99ec674bfe0d92b4ddee6f": "48cf547de68d6e90366750485be52e2c",
".git/objects/20/9018b4e01633e00a4be6952f0d9f293d9bc591": "fa5415003bc863364833266bf13bc17e",
".git/objects/20/b88a84068e2463d2024da75c0147081b7ba0d8": "09a92f75eeee796607bb7d3a4bd25089",
".git/objects/22/adebc94583a4044c4450dd1495f05ef5cd5019": "500d326c9fbf88caf25faaa82bd4342c",
".git/objects/23/9d58028c7023d7a87d83fb64f2ccc8ff54b976": "fa7f397a97bba1bf0436f6343ebfe47d",
".git/objects/24/58fd466bf98c06a953ccc1a22ae281cb6ec314": "87da1c29277638ce3d29ea61ef194be8",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/bec1c78241b731ed7d8b9d2681ad86606f78ec": "5d630ac1a390ed451525deb6e23b856f",
".git/objects/25/e43d31e34e8301159ae380380f691419e604af": "1412651b0f465d203874469942907a49",
".git/objects/26/9ffde8261f4fbef97e1cbd9ce2bc2356e5033f": "790c7a32f7f180d2fc483a4ea0cef142",
".git/objects/27/b569aeecf6e935295340006c8973cdb6047435": "9b6b7668ca419a2807ef79276666a0d6",
".git/objects/27/b674f8e0ef2f0273aa4bc93e9216bee4d13cd6": "db4423237eb848b5d6eb0e694a9d093a",
".git/objects/29/45e5e46215fb6324496f6025339b773db83cee": "7dec9befca0b4a2349288254ca6985c2",
".git/objects/29/81800ac39b5a11149c7adfe01ba4ab9a60eb88": "4ed7d9982bcf406d63d86cdea56051da",
".git/objects/29/8df3e8d4cf1b2cf8ed2cffad3d52b26151b23b": "013ecdd17f8574b9256ee12d26e61957",
".git/objects/2b/3787b7c36b4e6b3b408f0a52c35674e824e90c": "d64d3ef3058e28439558d7d5acc89578",
".git/objects/2b/d80d246f2a2f68fb0d4a5033cfd031e80aa59c": "80387a2bbd1817965d0078cba1375838",
".git/objects/2d/ac7c309e585c4b888568a776cde18ff8a622bf": "292d17029230d4dc43d27e290feaaebc",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/79d3f4c7f2717e6e54e7fa87a82181144fd47c": "4fb19c3288df7694f966ce7f314cbd35",
".git/objects/30/1e7f550cae8677dfee3109e0dfa06b39fb8f0f": "d0a70a3d24dcc1d1564bf7e2881ddba0",
".git/objects/30/33e9bfed545af7a5b086ff47908b379916e39d": "27a3ab6bbf51a09d7e85d84e7d2bf7b2",
".git/objects/30/5a672656e8955134ad0a9f19c3e8bcecd17fe2": "8f242597db3a6ea03a2aac3cebc111f6",
".git/objects/31/d2cba608909b9c9d76cdd0499643545e354bce": "2ba7ad316cd144b99bb749008e32e3cc",
".git/objects/33/dfd15fd2bcfbe78a05bc3e69b536bb151168f5": "343a1429d11c45ec4e92b7cd00f0d4fc",
".git/objects/34/4dd5aa684ce7a5aaa2da89f17ffabe32cfa859": "eef33dc38391a9e50589aa21de3013fc",
".git/objects/36/6196d5c4cec88df8ff39c75e72a6d35c68fbc4": "b3797d53b0507261b69a798443592d25",
".git/objects/36/639a65e9c28f04d899d124f200c22ca1156c3c": "5542fde7b575d9a9b007a4b489c24605",
".git/objects/38/e6536b04e642f43a8f150104a7753790adb4cc": "9314fcea86fdfc278836e3deb2248678",
".git/objects/3a/13f0c2a12afd4e1dca0bd78b76a368d614b742": "720016e922dcae380dd8e6ba6b47d6b5",
".git/objects/3a/d2b4b62f03d8eb06567ab020bad1cfa2428168": "a68953a258128b384fbe1681dff336d1",
".git/objects/3b/f1a91da37306111111067ac51333a01fa5522a": "3c46e1dadab1414775422d95a543db4e",
".git/objects/3c/c6dd026423552b758406de43af5013cb3a0fed": "153c868c0a500075006084b9b0e4837a",
".git/objects/3d/1a90edf437da2ed3bf97263828d90714d85cae": "aaa15d5167aa1c58c41ceb7489b61d1d",
".git/objects/3f/e953e5ed19eca085017f0a94a69f3ba5597e62": "35a5f278f96690f7a18fce45a674b626",
".git/objects/40/a891f515d7e4d11b34111df25b4080b160f5ed": "d2de95ea3e645a017964181bcd49b36a",
".git/objects/41/c954d8d21819656de6ad172504d5909dc10b6f": "98ee7ccdef8a7df58b134338eb010dae",
".git/objects/42/8ad66ed3f8ec415c54f1e719c87cf0508d0228": "b985f78db6b8714afc8e5991557f9f4c",
".git/objects/42/9f78da314729273f367f2b36ee57bdc48cd1d7": "600e14f1cb7ef8bd76a882c0c032a48f",
".git/objects/44/1cb184b5b61ad395df0bd17d824e6089152cb9": "47fcfa974f757d9ed350f220fa61dc33",
".git/objects/44/207fb482a702bbb8e4861aeed8a97c673bc97e": "b883a275ec52a620061a6a71b17e9f2e",
".git/objects/44/8a25820e48e2a914739a0149a277155de76f55": "809dc8b07dd406af221c8941b5d163cd",
".git/objects/45/e713a25efb2b9e0c0e2407124dca1666650c1e": "be60fac5192049e6d9e9ecdb9a7633ef",
".git/objects/46/845dfa1f46224d47fbc6e3ff519447c645b0df": "9aa162de918eaac7111c744524075672",
".git/objects/47/0dd46c85337eacc201c23970423a716b1819e2": "16f106b54decf867704faaec039cae5e",
".git/objects/49/af7056e072775faa8a552f82df1e81df65e8ae": "90da5eb8921b503305f7797a7e0cde86",
".git/objects/4b/ea86ad45d3526ff0d057b967446bd46bd87028": "ecfe33b9269d566987a321e904d0e455",
".git/objects/4c/88432b293743ae5bcb9d031ad135eae199475a": "97600543d8ae0586952d53c2c2e21fb0",
".git/objects/4c/edc24c5c79ed71d6e5048c6fa4caf87c00e57d": "74d79f173cfb291db22fe0bbac092057",
".git/objects/4c/fb7d30fb32dfde96a70e27b62a48322e0f0d51": "0a430178400d8e93e6f4f9b02f5a06b6",
".git/objects/4e/7f56ae8f565aac31bce50b3bb5d4cd7e9008c1": "dcb4114c67124804f0d737c0ffeb8311",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/2edef4539ccbc83ccf7f16bf8ca2866d93596c": "bf0b8dfe552c63f3b8189044b7a4df9a",
".git/objects/4f/2f20cc24ed7b4d008c003aeb9d8127b7a9fb7b": "f9c8a6b44eda44cd2b18008b92f64208",
".git/objects/4f/9096ce41f8254fddcf71e71f2ba12aee761bda": "63b6c564880ccfe771db7e9b1f0774f5",
".git/objects/50/86f92400254f85ab5d09d94a0d408a95a7327f": "368251642ed656b95c383f5e22e324bd",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/55/9a6b34b63b1f96f3f9b7acb8ed17b2ff6475a6": "852607b127fb9028b16e2e84c2279a00",
".git/objects/56/0cdeb69bdcc972f47147005015fe7149c56603": "a47bd034cb803831eba7897cc5052bf0",
".git/objects/56/874d0c20e71df07714fb51d39c0423dac1a815": "1cbdfeb8e60c835c325144793442c275",
".git/objects/57/a41e21ece7939febb11ee7dd630c823d32d36e": "e57e68220dba050d620ed311539b0c83",
".git/objects/57/ce6109acbe8fa1854adae876a68b006dc70e3c": "f2d3f93a7c7bc40f7348beb37c69b4f3",
".git/objects/5a/6f8d64a481ce63257c9a66f6053ee58b6bc87f": "318a6d06b5903682ee181a702ed868fd",
".git/objects/5b/b23b84335f596d70f6c84ab1aa66e771928c68": "a8e5e3e00a1de5c674b01fb09efc2bd1",
".git/objects/5b/c3ee84127dbaeac5b2ca843c40bb679c46b9b6": "b21a53a8dd455815f8c5c91d6bab8136",
".git/objects/5c/507d41fa07d8321d12d42cc8ea46e3a8de232e": "972419b1808cf36845f8cb90cba9d42a",
".git/objects/5d/af096abdd6b8f0a7eadb9751692d2ea7b00e26": "f5027262d1f68242d54c8da725b811ca",
".git/objects/5e/2760bfb426bd2f650ea115cb9a68c99fae90a9": "932009d11235a764e5f164c8ec82480a",
".git/objects/5e/d70767cbbff515341313e556cd19121c060c90": "7d2640c432e5609d70f67ddb2b7507db",
".git/objects/60/ebd5e3cc0a8608c2204ad6f9cce5165db97965": "bf2f8b404edb6b5048a6e9b4427a3eaf",
".git/objects/62/6b239c40c703807d2f8583ad6029f649e3fb18": "82542968e1828aa57c66a62e4e2bfd41",
".git/objects/67/20e32ccbb0f9201dfbec389b0d06f21d5f0715": "cf1dffbf993a27db9df31dfc2b4bb435",
".git/objects/6a/9594f744621d7d852f893bea7f675568a182aa": "251d2faa2ed10aedb8db5e430f378301",
".git/objects/6a/e10aeacb1498c66af7ba48dcc2014db40d9fc2": "05ffe50e3d350fb07364602d4aefd48e",
".git/objects/6a/e79477b89003a3263691cd4181793a981cc385": "f2a6d2d20a084dc83b87ff0688dd877f",
".git/objects/6c/95034f219775adce9d4f8ba6f3119735a70bac": "da6bb008675e1ceb0b83a27ef3d3696e",
".git/objects/6c/bb8cb642d18f027837ea4effca8c1fcf31b41a": "ee010316ff835551df178280b9a57bed",
".git/objects/6d/a192d0bcfa6acceb92e10115a2fca6cc1d6b85": "332462b8e0552b2a28c818c806cfd46e",
".git/objects/6d/c85a6308d39b1c1dcfe5dc6da222bd47292a5f": "697c3694da0f78c54cd79ae4bd1209a3",
".git/objects/70/2838528269351986931a6a6f89ef72a18b787d": "4a1454f519d1df1efafa67faf01f0fe2",
".git/objects/73/95a6d30797e93b678643df634b6c827e3e7662": "70df69da45229037889ab3db59ff2c49",
".git/objects/75/fd0e8036f38bfeb0e9a373551e21acea70fcb1": "b0c4400473bb1fffa71853f5516a9734",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/ddd64e3b4ef913db1a5e3a4b22982a2fbb4c15": "937d382d645f41272f83e2ac28418892",
".git/objects/79/82c69aa5ce8d9cf5d1303858ee099cb5e6c631": "2d37843ab9f2791edfbe18c467a31686",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/cb55f31eb2ea71654b3e35d252d6eb32c8cf12": "5b8f2b029c533dd54909b4fe62bad80f",
".git/objects/7b/f0a9b9c3eb8bf53b90703c6774b495da1104e3": "01c00878ec4c15eca0bdf72e646ed19f",
".git/objects/7d/8d3e96a1e6e51745620f12def2a19b57764c3e": "72ec20ceb0c61d6ca2b898048a14f0bb",
".git/objects/7e/0d4b5784d384f850f628e151a9d1f87b0f8ba4": "c8c7fac5462af4f0a9e1e1bb4180eb29",
".git/objects/7e/14ccb9dc9976d42d0edc1ce68e332f45d856eb": "f0cc81b0732768004aef2b5ee9085251",
".git/objects/7f/d139617c409e571c3c03c92dd5d1723cb74f78": "fd0647d6f6e82f72b30878d433c909de",
".git/objects/80/4ace40592d6c799a546a2abab2d3a9b9fa3a94": "12ae3b375cb5f1e20d581ee94647d4c4",
".git/objects/80/9adc3a7eb5b4bd12e2245d6ceb689c66393f4c": "27dd3cffbe1bc54afdb021e9fbe6978c",
".git/objects/81/4e23191d53c1002ade45f0c00102facededb06": "582830c5e124071bff5f410c9cd0083c",
".git/objects/84/1fcd315fcb2f926269fe8581215a6265f158b5": "895e22acd8e87f6c1fcf7fa7fb839133",
".git/objects/84/e9aab2867a59eb6fe9534477ee8b894b8a1d75": "8d0ee9f8a307f6824b87f525c34ef890",
".git/objects/85/657f4a65e9b83b09bf3a97a9427843f071dab9": "95bb9b8baf5b91bf64b3b8e912d147f0",
".git/objects/85/9730aa070c8255628f91cac0982af6d9e55cdf": "621b4e06d3010b88b39f55e8c9966561",
".git/objects/85/a8e7a54aaa40234f694f41a14b142241667727": "341f01c6590a20db785e9f65a77ed4e2",
".git/objects/86/dc13fc7268695eaf108b7bac69add67de38cd3": "27f8b8ca4f27eeb3253a96c3185b8670",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e4b81da91eb76bc61acb22de5c7fda62bf724e": "bfa192f184fa7ec4206fed8431be61e4",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/89/aa321409fd1da85d5f67a2fc44ecdd4a7dbc0d": "d84a07e598acfb6eae6c7e7c95923d57",
".git/objects/89/f9b58aa5be573bd560eb899bb4f94c41b478f0": "fada38c8a069c26a779a3db8b40312b2",
".git/objects/8a/8d36c3957e701c3cdc3ae0347f3bf02d71b799": "e97e0b74c34820a64d6086be6802d0a9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/93dc0938134f1f17060d91a22344449248d4bd": "2d1cba371c9737dd3e37eaed8626b62f",
".git/objects/8c/68da4ded4682dbc45d6fc7179033e3dee6b7f1": "35f6adcd35468a08a37d011ac7ee81eb",
".git/objects/8c/7eabf4ab59837d0e58c156a32e4000e1e3f799": "c72caee8e3fbf97fd64f49fd6807e4b4",
".git/objects/8d/9794b304e8c0b34634957fb708abb05880fc53": "22ee092938f089458db5b048e46c742c",
".git/objects/90/c2d0e5f35bacc36bebd6ef96a71cf4ac9c8c8a": "ef6b9a535aa3294e173593229330ae7e",
".git/objects/93/4a73f268560447ff27cc5c6ccf5a42248c447a": "bd64c9b1aaec70dbf2bfe97e000a8f4e",
".git/objects/93/820a30cd7b14b4aae5beef4b146a361b2c1af3": "20c45a34ee9d8a14d9af863cba33a8da",
".git/objects/93/d6906bebc1e493b607a54b71b2309e2e2dd6e7": "37249acb01f88973622f2bb881bc7ce4",
".git/objects/94/4395fb72b65ab6b906bd9001bc5ef95aa6d93e": "f1b857c550bc531a9e3e70bdc76aa97c",
".git/objects/94/511278171e8939a416f16b509e40ed2c758484": "d902c4a1ec55a020c3abdd60903e8546",
".git/objects/98/57977dcb6ed7c12bd36b86e17d6e59dbb73ded": "30367a73184f384a0258c1966209d653",
".git/objects/9c/25cc21e784d73d03d7f8d5437acb60e9e0d74f": "73093524b777e8bd29a2461d4228c4e5",
".git/objects/9c/c30a47cc2f31677c59ba627110f1d22c046038": "c3a6b1b506f14eb285ef733f620bda3a",
".git/objects/9d/acf171be6ab389708e77d600c8f44df5ddef9c": "8b68492f623285da5f0ca4f4e68c7571",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/ccbd121e56d4c23ada58a0373a03100f774c58": "07375c21577f39b5c35ec3429265a6b8",
".git/objects/a3/2dab9ad355e290a573279a40b2c731e0ba303b": "6cf08e9d605e0b5c3bf904df87c99bd4",
".git/objects/a6/221fb3480fb40fd3cba4031dda935988fb04df": "fe3e5e501e892e5105ba724302ab46c0",
".git/objects/a6/cfb7df467d505dd54dbe5a4b07e95219ac0204": "716824e2ea90fa45dd0202e1b2f514ae",
".git/objects/a8/f2e0e3804e3a67e42396af834024899d69ca92": "2bae434fa8c1dcd8e327a6103d919390",
".git/objects/a9/51c2553aef4959bf157593e9d1f48993fe2b25": "f911c973f1258e12f4d18a2402352326",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b0/bd7bbaeafc73604825082e2f42b22afbc2ee94": "ee20059192b70390e2e9097e32f4ee67",
".git/objects/b0/f05c4dfc878be3b2ab95627115145f982a5a4c": "dd32d00c099c87f448f5545a7fb8d246",
".git/objects/b1/499ccc677f9c8bbb3baacce6a40a048989df6c": "3618ae8260953891916d4357d76250d8",
".git/objects/b4/442df675bbcf36ea42f38b4405fdd2895b38b3": "359a1cee229055059bf6761764302b99",
".git/objects/b5/f237d77d1cde0b84fc04a902ef5752b1f26e38": "efb6a0e3df57a7c091bdf60bae71077f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/0c47313eaa4e292284d506de7258f508f03349": "a1183b367d42bddc29ac9b84f5633bc6",
".git/objects/b9/19ec9d80baf87bfc4eb3453db05b75e1a88f37": "8ada62a4da3fa65f76b8c6e2a2d9ad1f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/027f568e11b206c96e80c54db4ef897cbc3f7a": "d1d2e08822a0b5550a0ec9f61eb9c70d",
".git/objects/bb/0f3f113fca6f010ee73e6c96ff4d9bc19cbc37": "25a3495723fe36477aff806ef9dd5704",
".git/objects/bf/93ed7b6e3a661e9547e88f8abefe5c3814d131": "e69b288b264970eb38d80b23aea8e1d4",
".git/objects/c0/1c8e20ce307c0d44eb9a391641f04186f34b42": "b9a9e0012b8f000f7ba1ba7b65d18530",
".git/objects/c2/dabe94bdbc702598338ef19fac700fe267a3b9": "1abf66f578b0b05827a556b16becb7e6",
".git/objects/c3/0771faf2d78cfcd88b9d9e5d9c507815a6dc6c": "b8b7c5d9ac13c3f192de199013775b0b",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c3/a7c3ab7ae4686d2c36a0e9e8275c953b181d6a": "1b03c1baf0c58055ae5a46f1cb776f20",
".git/objects/c3/af0d876783b585ac57b46ad022121fc2e1fefe": "3a577f1dbb73e6a343ae857d8ed525af",
".git/objects/c4/326a4d37dd5edf9b26c716f8f459fc84df7edf": "874499dcd3070aaca4baf0af90d776d8",
".git/objects/c4/efdf126493c87f0d3cd54ea3861c97b5fe5750": "7b3bb7b7851fa14ace65fdaec6b2616a",
".git/objects/c4/fc8f07f0a7478ffd687cdc3aa71a90c017cd0e": "6c1439ba7bf931d6c7a91bfe6f2d0355",
".git/objects/c8/2924f8396e17551760a26dcf55a3b85ef0031d": "aabaf75252f1449dcdd9c7a83747e64b",
".git/objects/c8/4e76b2b6ecef071b3ae3abfa0b9e114f547373": "643d7aa53cac5d6bea4b5dd00caa9b26",
".git/objects/c9/d4429a803dab01aa3e6895459c717cecff9951": "aaedc97b6316ae2abb6e74245cd935cc",
".git/objects/ca/a04d01f911eda68fc64ab2833e48ff3368ed88": "e6e3ad0ce1e48c92a581b771a355ce9b",
".git/objects/cb/8ca1d59a7e2777a8a51f81faf4a956bb63cfa5": "aeae01513d2f28c5e0a2d03ec365754c",
".git/objects/cc/71df7e80dbd7ebb3b0496622b589fbd4cf684c": "04ad7f6059383569ff4a3a4dff5ca5eb",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/3db3a05385153b40ac9c38a4796830c0442d8d": "336205e5aee15c76af1fcb063fddeb1e",
".git/objects/ce/bc9daa8e148fd10b25a48a9df138b48d6a5006": "422a50558e47c7627b5fffe58040df4d",
".git/objects/cf/c50c4bce4c07b4de2dd00c5c19ad7f1e057036": "85aa8d165ea9035b657c0f3fe990092e",
".git/objects/cf/f897f8f6f6b4d62e6e816e52c58df17419ce42": "ad1fb7a5fc088c436b12ff1a1052ffeb",
".git/objects/d0/4c409955b2047f5f514cd167ce1c8c6d964c7b": "8385e9096f543d710727d42ad8862d43",
".git/objects/d0/74e14f3b9843466a0c1e55e0aa87a1b006dfef": "efba5ca8af487e143564b34bda737151",
".git/objects/d3/b265813c6504fb9a2fd53235d9c2a199b4f4af": "e6e5d67ce00e78fba01e8a988a2ec134",
".git/objects/d4/a85f2ffa22f24277249309c6738a9e465445ea": "cb6d2dfeba0d5ef556bad252b8d9a499",
".git/objects/d5/7352286de6db2c72f476e90265c08dc6277fcc": "da563c2e1c3ce6609f1c982d9af91a1d",
".git/objects/d5/75db0ba5bb14db003508415a4331afcab30c39": "c4865a3195b5e024a1106792d1936ec3",
".git/objects/d5/b38ab3b0fa434f564c030b499dc66138b7e1ca": "6a12b3d0be05b8657d609b10049f5423",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/d89f1e4e0fb1649a1ba4401b4684b063419c7c": "fc1cfdac209876a593c21da282633509",
".git/objects/db/7bb37add29772772f95a3e03bd96d237b241ea": "b27c09edf1bebedd369d8a22ee5ed247",
".git/objects/de/07dcb15568887b22bb54efc9c1733ac9f33692": "5412ba7af34e0421f379cc69535ad8af",
".git/objects/e0/7d39f9d56b53ab725d7926a2cef4bfb6205575": "13ec13381e9f842971b6ba47350050cd",
".git/objects/e0/9b1261e8105e12a3b079c6b1cd938ee63e7cce": "41bdfa727a79d57c09f1f4aa47cf8e76",
".git/objects/e1/090e1fbb5475d25de2c575d71792f58d425467": "b23069b6d8011dcf55f296a4bfb10283",
".git/objects/e1/ac4f14968e8addf45eec67c381e2002f2bf4ed": "5ea85290aae0e401692b57c439c09ba7",
".git/objects/e2/97943e4096b50944128fbdc12b0a2e1ec9345e": "e5c1f79d3dc1a848cfd573ef44946fcc",
".git/objects/e3/029fd3915928d63e351ab091a0fa15183e8dd3": "862057d8b313fe94fdd58ac6fca53854",
".git/objects/e4/0d45f27f578d022521fa612137b87d2592419a": "f1075d8885638e151a92ae13e748483e",
".git/objects/e4/c27890b2873ba4e8fd9a204ac6d212a110292e": "052f37642193ad8bbf017b9db8d2daf4",
".git/objects/e5/812b18cca0d385055f767a17800cd71bcfd3d9": "08f3ef63dcaa79af4d6be4e7d3b1ee64",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/e2cd4c8e065422b78c83e44ce8342a64a3dae1": "f89a5298c5356cf677781b9a30e30ef9",
".git/objects/e9/1008be5984220d88e94d7d430bd5c9869eef4b": "478c7ba50f553f73f83dc9aa912fd6fe",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ea/e417879ae7147fe5aea222d95e3355109bd1e6": "9099966456d4e7ebe74987170ab7cd22",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/1c2f7f769ff7857d9b21c44e1a3c8193a48540": "5132fdb41dd55e070b8ab9ee343b2f14",
".git/objects/ee/81ba82da47dc114afc620c8105ce77e3bc0c0f": "7261bf53471b177742a1819d98153911",
".git/objects/ef/332dff8a5b851d5b6bbba218257a8d657e5df5": "cf0a1be85c53cf83097c409466a6cd09",
".git/objects/f0/fe8236b9aa517aa63925753bfa3316f828f9c4": "83b964571e5387ee4d3b06ff8dfa0c19",
".git/objects/f1/5cdf47464ee6bbadfd8625646ef9711229abb9": "c64d8783399c24616c2345e1ea3db1a3",
".git/objects/f1/a480526f5849e33154297cf508d45e22817a92": "ee6731580dcadd7c324619b675bbf292",
".git/objects/f1/f30215925849ec493e0ac13f3943b33306097f": "e1921fbfb508f6e0a8c5eccd9e0c5cbc",
".git/objects/f2/d828464e45b8c68829a55c858c7beb60c10aeb": "0711c56bf96bd3bea5279b93ca6b683e",
".git/objects/f4/ef4c445b35b43571d916600ca5e92315b6aa40": "c7e5031a01f1ce4246258c3b7c454c7d",
".git/objects/f5/8509416b66478cc63cc4f0e3b2f363e960b6c8": "35793cec7cc7640214fda367314fa578",
".git/objects/f5/dc20a1f5107aac68352142bc6d842f0c1f7873": "a971381fcb18a3afb134991994fa5231",
".git/objects/f7/6267b6855f806f0d9dd6c88f0dba0ea152f577": "44f47eb6ddb77483404654c5d1b9e5bc",
".git/objects/f7/ecb42e4c24b66d49d68f7f6088303003617ef9": "0137f256e69a9e47866fd682cc0c7339",
".git/objects/f8/4da1fb1c2b591d30c6eb324a7634be85ed72a6": "9d57458304a0b4487982019e76bab7b0",
".git/objects/f9/af5649989d74a200c83f4276684e48e83df5c5": "733ca69caa1b5033e4060322c22f020b",
".git/objects/f9/bed5f34de96a4228e6f52c645509edcd40171c": "5ec342dacc2a0bf4f3677d07c57a4505",
".git/objects/fb/974b2656772a155f20a461b33f8f331980dfee": "4e3724c37f5d0bd406a5b4e10d129b79",
".git/objects/fc/38c9d9ce197f63d037ce55eae59b97ade075b5": "9432440e278178cfd9e02f5ccec111e0",
".git/objects/ff/3878fbf4ac71dc21778a4229d8e530b2e10545": "f7f4d6ffddf7b71e8c59fbfa9c0214a8",
".git/objects/ff/9314a8ce42b414a1471168c7c14bb913b4b3b2": "248cf3510cbb6605d77a6a61770366df",
".git/objects/ff/bb96c271da5e700b22595a4a39feccc3915cde": "cdee6fbc209b4ed43aefcc5b18a05dc1",
".git/ORIG_HEAD": "d3a676f2b493e43ab5a383b21ab6827a",
".git/refs/heads/master": "d3a676f2b493e43ab5a383b21ab6827a",
".git/refs/remotes/origin/master": "d3a676f2b493e43ab5a383b21ab6827a",
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
"assets/NOTICES": "a53714a4efacfdf6c23f551d0b9e05be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "994e52f904e8744cf0e5db03f47d503c",
"/": "994e52f904e8744cf0e5db03f47d503c",
"main.dart.js": "e16fd658f6c61f6c153b720c9ff6fa63",
"manifest.json": "d40a67c37513f5f52fe5155c61523fb4",
"splash/img/dark-1x.png": "faa9b6466509d4dc03d0b11cf8ff2144",
"splash/img/dark-2x.png": "b066d08995bfe508bffd9c37f5c4de2f",
"splash/img/dark-3x.png": "8bd787b44925913f43ca1fc446bcd804",
"splash/img/dark-4x.png": "70cd2bcbda70f2613186daed12452910",
"splash/img/light-1x.png": "faa9b6466509d4dc03d0b11cf8ff2144",
"splash/img/light-2x.png": "b066d08995bfe508bffd9c37f5c4de2f",
"splash/img/light-3x.png": "8bd787b44925913f43ca1fc446bcd804",
"splash/img/light-4x.png": "70cd2bcbda70f2613186daed12452910",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "17d9ad96351f37df3a54bbfcf7965d3d",
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
