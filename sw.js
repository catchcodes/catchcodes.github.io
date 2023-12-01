/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/Articles/1377691752.html","afd306135d5cf5c2cd0182b579383f20"],["/Articles/2372941552.html","591a12b4c74df4f274b9af989276f7e6"],["/Articles/2553868675.html","d3d6db84d7f5c224171e03794b27b72c"],["/Articles/2750935351.html","01f74a5a910f5b4e893da82dbf4316f7"],["/Articles/3213702972.html","b25e1ef18bd686032afde76bad5073b6"],["/Articles/3229213266.html","278670a844145b595232869f92ecc92b"],["/Articles/3233011741.html","072f5dae39f0134cae03e6ff4849717a"],["/Articles/3755838363.html","d4c7c319c13f8fc67fc0ebc2bb9f86a7"],["/Articles/403018703.html","452eef981d079f8d52a92c35e58083ab"],["/Articles/838095624.html","0d42f6706f7804bec1fd594fc697f73a"],["/about/index.html","0550d4d0373093b87601142fe6d17796"],["/archives/2023/04/index.html","fd98710e7d75f2da093221691d5d80d4"],["/archives/2023/index.html","016f03a77a22ae593b576bb551dd3276"],["/archives/index.html","84388dddcc089bd2b309152e742f4de9"],["/css/fonts/FZHTJW.ttf","b6eaac673e04d1ec0a0c1bb93e516945"],["/css/fonts/FZKTJW.ttf","439f3503db71d84f6ed37645cca025da"],["/css/fonts/HYFangSongJ.ttf","7e1ce9cdcc7600d65390fdb20435d409"],["/css/fonts/biaodian.ttf","c56ba44e60fa3840b46b63a30d6565e7"],["/css/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/css/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/css/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/css/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/css/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/css/fonts/lmmono10-italic.ttf","4d362a77d55d0d8683d2b315bd34f34b"],["/css/fonts/lmmono10-regular.ttf","15a2082c8e31f411875a86ea2d29a0ee"],["/css/fonts/lmroman10-bold.ttf","0af0b64d6d3df41bead3f9de314afbd4"],["/css/fonts/lmroman10-bolditalic.ttf","71070e299cf063366237473420b0fea8"],["/css/fonts/lmroman10-italic.ttf","4d461c73423fe2666dad2ff0dfc3ca68"],["/css/fonts/lmroman10-regular.ttf","ae9d1b331000d544f47e5223081b7b54"],["/css/style.css","77c6e6a100f5985e9a0241f52a6611b6"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancy_close.png","6e2879a324a76e9972ebc98201aae1d8"],["/fancybox/fancy_loading.png","b1d54c240cf06e7f41e372d56919b738"],["/fancybox/fancy_nav_left.png","3f3e406102152cd8236383568a40ba35"],["/fancybox/fancy_nav_right.png","216e4bde5bddeeaa60dc3d692890a68e"],["/fancybox/fancy_shadow_e.png","fd4f491080d29fade5080877f1ba4c8b"],["/fancybox/fancy_shadow_n.png","18cde16379b2ceadef714d9b346d09ec"],["/fancybox/fancy_shadow_ne.png","63adf788acf193d4e4f3642d7d793125"],["/fancybox/fancy_shadow_nw.png","c820c878aedb7a7f9ebd7135a58e7c65"],["/fancybox/fancy_shadow_s.png","9b9e5c888028aaef40fe5b6a363f1e29"],["/fancybox/fancy_shadow_se.png","a8afd5a008884380ee712d177105268f"],["/fancybox/fancy_shadow_sw.png","f81cc0fee5581d76ad3cebe47e7e791b"],["/fancybox/fancy_shadow_w.png","59b0e63eb059e58d932cfd53da4d87e6"],["/fancybox/fancy_title_left.png","1582ac2d3bef6a6445bf02ceca2741cd"],["/fancybox/fancy_title_main.png","38dad6c1ed4bdc81c0bec721b2deb8c2"],["/fancybox/fancy_title_over.png","b886fd165d4b7ac77d41fb52d87ffc60"],["/fancybox/fancy_title_right.png","6cbe0c935511e7f9a2555ccb6a7324c4"],["/fancybox/fancybox-x.png","168696d8a694214090ef90e029cdf393"],["/fancybox/fancybox-y.png","36a58859beb9a6b19322a37466b9f78e"],["/fancybox/fancybox.png","11e57e492ee0311540967cc7a1e6e3e2"],["/fancybox/jquery.easing-1.3.pack.js","def257dbb0ab805c4996fd8abb1a6b49"],["/fancybox/jquery.fancybox-1.3.4.css","851e31c9e02f0e14f1de87c54897b399"],["/fancybox/jquery.fancybox-1.3.4.js","143db754c51e2a08904860f1f3e597fc"],["/fancybox/jquery.fancybox-1.3.4.pack.js","8bc36a08c46719377528d962966ce37c"],["/fancybox/jquery.mousewheel-3.0.4.pack.js","3b0a821567b463e70bcc1e90ed2bc9b6"],["/favicon.png","054ccd87d0a7156bf228359a7e5f5977"],["/html/Gruntfile.js","2ad31a521133ff98aba0b23ab669f139"],["/html/bird.html","5cc7ecac89506eff902e5e8a9565c4c5"],["/html/build/clumsy-min.js","b70aa635d97923d76c2ea94002708e94"],["/html/cat.html","aaad65121d9c9b983bb91560a77c540e"],["/html/circle.html","ca47cfb663e1d06528304becb2e82ec8"],["/html/data/css/gamefont.eot","7eb1ccdc4ec6d56168ee93da5f9acfa5"],["/html/data/css/gamefont.svg","1d971c4264e49b4ac80be89759617358"],["/html/data/css/gamefont.ttf","004182fecc41f976198e77de06c7c520"],["/html/data/css/gamefont.woff","2149abb963de08da78c744f412d47a88"],["/html/data/img/bg.png","db5e73210dfcdd31ac711c35da31005d"],["/html/data/img/clumsy.png","6440b8a66bd91ff65048efd7bc93f138"],["/html/data/img/gameover.png","cac83a6ebcf3756fbd7c1b1a4bae60df"],["/html/data/img/gameoverbg.png","09f5ef9a767570476145278b2945d285"],["/html/data/img/getready.png","0c75177743bb002ed8f90b9236b736da"],["/html/data/img/ground.png","70a22b007122569c0900049807d2e223"],["/html/data/img/hit.png","f97f2c85c91dadecd6cfcdd6c9d4eead"],["/html/data/img/logo.png","3dd9b61571f52af61e41872a357a3870"],["/html/data/img/new.png","1227f2742a1ca6af24d443b07ad989d6"],["/html/data/img/pipe.png","b50ee420414ea2d8a1d6eca3a9eab29a"],["/html/data/img/share.png","f393be172b0edce1f51c427bf076d992"],["/html/data/img/touch-icon-iphone-retina.png","0ed28d324f653ebcefa68a9db3ea5a93"],["/html/data/img/touch-icon-iphone.png","25b47848fdb110a8358bf802067786da"],["/html/data/img/tweet.png","5f1303896f414798f38e74e82cf2b34c"],["/html/fish.html","e6284ae8ccead6f0088be550fa31e91f"],["/html/fish_images/bottom-bar.png","bff0527534d0cdd00ed2cb999e827d62"],["/html/fish_images/bottom.png","9102ca906c18ae58529ba0c17ae552ef"],["/html/fish_images/bullet.png","53fe22959698a77f5d6a916d16094813"],["/html/fish_images/bullet1.png","2296bffb26300a83dc4c8084eba57770"],["/html/fish_images/bullet2.png","49fa75557d3bacba2eac848819dc2de7"],["/html/fish_images/bullet3.png","464c0b79861d214d966ec51f1161fbb3"],["/html/fish_images/bullet4.png","5e0c24cc1697905b4b29b68deaff9f78"],["/html/fish_images/bullet5.png","f2fcb01e0991387e7b3e87cec7267253"],["/html/fish_images/bullet6.png","2ed0f0eb5ae5d37c49a22fbd21f7d51b"],["/html/fish_images/bullet7.png","f0d7e8612ad53085d9b7f4aab4388b42"],["/html/fish_images/bullet8.png","ba20d0b3c5a27066393b8cf3f4dfbb85"],["/html/fish_images/cannon1.png","20785e5eefea0459a287e1ea98e5ee91"],["/html/fish_images/cannon2.png","168f845b737314d1441a4964fa8dd79f"],["/html/fish_images/cannon3.png","0807e6f2167d9eac44c30015c9f6fa00"],["/html/fish_images/cannon4.png","4558fb61e6f61c7b0d7d95d852589c19"],["/html/fish_images/cannon5.png","f483114c435d302de98612d52b78400c"],["/html/fish_images/cannon6.png","ede716a6edc14a31834639f07f6ec3c2"],["/html/fish_images/cannon7.png","dc84676ebd6b4aac13cc977f12f75f96"],["/html/fish_images/cannon_minus.png","fa6e07938c1f52d14561b2f228e2d7ce"],["/html/fish_images/cannon_minus_down.png","989d7863496d3a661d5070ea43857979"],["/html/fish_images/cannon_plus.png","ae0b760d96bbd2d12042dea1bb2e5455"],["/html/fish_images/cannon_plus_down.png","94a75c9e21c4759ae7fba0b5c8691d93"],["/html/fish_images/coinAni1.png","cf429f1cd2b5ac764b4ef20b2e306d3a"],["/html/fish_images/coinAni2.png","aeeb2b2b008c57b46334d8c30ccb2639"],["/html/fish_images/coinText.png","02ccf9761e54704adefb6f76c96d93e4"],["/html/fish_images/energy-bar.png","a9b46384af6fa5c07a3d0a06be1df16c"],["/html/fish_images/fish-hd.png","f5b0659416d3ee2ab74e1b7e7cc6ec1f"],["/html/fish_images/fish1.png","646b642d800c4cf68ab14b6b848b7fd9"],["/html/fish_images/fish10.png","eb98ea6a62a4fcc7bce0e8545d4d92f3"],["/html/fish_images/fish2.png","a26e7beee3b6c67fff8ce82b7c360838"],["/html/fish_images/fish3.png","9fbd2ff9c108086be38e54cc28bd1e00"],["/html/fish_images/fish4.png","b1efc0b3ec16d9216dddfbe03ff96296"],["/html/fish_images/fish5.png","8432b7f92247bef90a867e234fe3bde9"],["/html/fish_images/fish6.png","3b5b0b89b021fdd7b71d1dea4db2214c"],["/html/fish_images/fish7.png","0a3616c722346f3e984be3fc4ea3fe01"],["/html/fish_images/fish8.png","55fdd0743d63cbefaa95d38f491b0876"],["/html/fish_images/fish9.png","170029cffe3562532c0d89ffbdd3dbf6"],["/html/fish_images/game_bg_2_hd.jpg","47cebdd1e5a05e5793e00385de4ee23f"],["/html/fish_images/level_back.png","c998f45ed8e052a2f903d47f4f9b3ae4"],["/html/fish_images/level_bar.png","fe6535b95310631b41b13dc9697dead4"],["/html/fish_images/level_bg.png","cb1fd3945c3a677c52f2f93b2345f3ae"],["/html/fish_images/level_shuxian.png","b0315168fef0fd8ab755dbad38917992"],["/html/fish_images/number_black.png","998f5c62e2899b7c8172f82eb84af6e7"],["/html/fish_images/shark-hd.png","d8f26a3547c5aee44db7cdbba9dca641"],["/html/fish_images/shark1.png","4fda99bf1f4d4257534685d4f3e09e58"],["/html/fish_images/shark2.png","3c4bf9f8fc003be94bbee03698c74ee8"],["/html/fish_images/startbg.jpg","1bb8c1b750e4762c0471988189240067"],["/html/fish_images/web.png","041874930320435cc4f1f21eec942820"],["/html/fish_images/web1.png","5853805fb9d690f1024551906f8ab204"],["/html/fish_images/web2.png","6e55c1aacfd546582ca5bb3e6cee28c8"],["/html/fish_images/web3.png","70ea7be6bc8f7b85bb279e94c061f89f"],["/html/fish_images/web4.png","6cc839154c66398135bb0961c002dce5"],["/html/fish_images/web5.png","21bb1dfadd0138835a79990e503995f8"],["/html/fish_images/web6.png","53ccfaaf8e55cce0b3fc5175ba45a7bc"],["/html/fish_images/web7.png","cd12af5bd42867e2c978c5483e379822"],["/html/fish_js/quark.base-1.0.0.alpha.min.js","0f5a639a9776ed9946ea379012f59769"],["/html/fly.html","6b34a678fe6e17d571859cf65e583f00"],["/html/fruit.html","b15ceb84c11833f7cdc6ccdec81ad40c"],["/html/images/background.jpg","4ab15ef3c422568ab9d2ba89fd1b5cdb"],["/html/images/blank.gif","fc94fb0c3ed8a8f909dbc7630a0987ff"],["/html/images/developing.png","bdcb59906f3aa2cd11f4c21ef33a8730"],["/html/images/dojo.png","a090a38fffbbd1cac01cd4f7e079ba4e"],["/html/images/flash.png","3b5102493ae7d6b7265e75f862ae230b"],["/html/images/fruit/apple-1.png","dfd3a20ab220d81b3b52c7391ed949b3"],["/html/images/fruit/apple-2.png","3715212e66f6985c4512bfbf7ed3a45f"],["/html/images/fruit/apple.png","b0dc5d318e14496d6ba0cd14dbbd4ce5"],["/html/images/fruit/banana-1.png","3ee597c80d7bfb52c6bd5e0b31c4f8b7"],["/html/images/fruit/banana-2.png","1dfeeb4d45839dd11f1b2b8a7a9ba104"],["/html/images/fruit/banana.png","c3a00dae8b8659b3a36f000aa9839fd5"],["/html/images/fruit/basaha-1.png","41ea917733f017250f7c59b13cefeaa3"],["/html/images/fruit/basaha-2.png","5b5a721aeb997257d3f7cc2816d7ca86"],["/html/images/fruit/basaha.png","5d7e6e802e16d8f3ec0620bdb1cf5054"],["/html/images/fruit/boom.png","8c4310692a67cbde3cd9dfb9a1f3df7e"],["/html/images/fruit/peach-1.png","9cecd191c207a79d23514aff107271d8"],["/html/images/fruit/peach-2.png","97d44b18359721dd94f5f558eddc1029"],["/html/images/fruit/peach.png","453e7fd5fe173914930ad3743eac7a97"],["/html/images/fruit/sandia-1.png","7e19885ad7902a067940399d146276e5"],["/html/images/fruit/sandia-2.png","afd7628d0d1f6ec9f2caf28c07b3a863"],["/html/images/fruit/sandia.png","b7a5bd1bf3be8581fc181b2f3f31388b"],["/html/images/game-over.png","891010a85052469de14151712cd4e6a2"],["/html/images/home-desc.png","31db6627a9b34bd5bf12431a753d855e"],["/html/images/home-mask.png","9b6aaf9718e798ca8a04fb3554c305b5"],["/html/images/index.css","f47084dc710a5ca39aaf21920492ba54"],["/html/images/logo.png","0ce6022c4c8bb643d1553da7d26bb626"],["/html/images/lose.png","b3eb096c91548fdc4b2587049bd10363"],["/html/images/new-game.png","83742d75ddbe9c2d8ddd36e8cb2f84fe"],["/html/images/new.png","93ba60106cfe59a4f1f00b4419e9f6ac"],["/html/images/ninja.png","755f5a02ed4f836738b42dae48bca6ac"],["/html/images/quit.png","8c1a1298c7c1acceeac3e2ee3cf46163"],["/html/images/score.png","e40c56e6e7562cf3e0a65f6bce2b96bf"],["/html/images/shadow.png","758116f46b696964c7f39c2a75716747"],["/html/images/smoke.png","ac8f812a4220b9dfa1d7d236e1846419"],["/html/images/x.png","1d69e30228f6548d555a90b693165be6"],["/html/images/xf.png","6cd2951b26e34dfc3a5a3ab8c228320a"],["/html/images/xx.png","97ec6a37fcac9efdf8acb70f082edd1a"],["/html/images/xxf.png","9eeb1292cfc43a5c8437a49cf3f1f580"],["/html/images/xxx.png","d7b053429c80f79083a0110430f2403b"],["/html/images/xxxf.png","5ff8edbf4ea7d2ac8c3b063cfbc43d1c"],["/html/index.css","6cd01f35b6ea629b41450f18f2201af6"],["/html/index.html","16b35fb8ebd993e00b5358122d2d5591"],["/html/js/entities/HUD.js","6ab8d268e50014270ea48c1e4d1a6364"],["/html/js/entities/entities.js","6bdb306bd02e34b26ec27a2e6b1040d6"],["/html/js/game.js","9a6a57e3b57e7b4afdc58df35f14f50e"],["/html/js/melonJS-min.js","fb5695a20a7b3157221fd0ffa2cbd4d7"],["/html/js/screens/gameover.js","6f4b9f2b29cdbf741f8491f2bc0b6285"],["/html/js/screens/play.js","1165be804f4a8d836390c6734f381466"],["/html/js/screens/title.js","4a8468376c6ae53e914097fb635bd3b2"],["/html/scripts/all.js","a31b33de15ccadad0d2dbcf950973621"],["/html/scripts/collide.js","0a456d44d90a4fdc5cb04f11cd19001b"],["/html/scripts/control.js","7eba2eaea2ef06c463207e712dfc577d"],["/html/scripts/factory/displacement.js","aa89b79c94e0b919c66ccb755b06e710"],["/html/scripts/factory/fruit.js","683af1f7d78f537d2219b1f689f4d2cf"],["/html/scripts/factory/juice.js","dca82f13bb40bb83d24501f9d28805f5"],["/html/scripts/factory/rotate.js","2eb57278d10e1a6f587057cf5645295c"],["/html/scripts/game.js","670571a3dc1e5fd547e4284b57572615"],["/html/scripts/layer.js","eeede0e73da4c432556124c850058082"],["/html/scripts/lib/buzz.js","a75de660ae9beee8e95f04b26d173e9f"],["/html/scripts/lib/raphael.js","55b9f6a49634b9b8bb578f02cdcd66e6"],["/html/scripts/lib/sound.js","c0ec525bee383afb46511e09ceb6f25d"],["/html/scripts/lib/tween.js","52b45eda9ede83fd5ad73234e957456f"],["/html/scripts/lib/ucren.js","8e63eef160dd5474bc7b04e8dd2a767e"],["/html/scripts/main.js","cdbc458a8e38a2113b7d26326f255d92"],["/html/scripts/message.js","2865b4456a366ca03b508e4ae5c88bab"],["/html/scripts/object/background.js","04f6ebb2ad5e8969b467a58a20a76071"],["/html/scripts/object/console.js","0980b03dd89589dc01fe5216c50253ab"],["/html/scripts/object/developing.js","a41bc3ce932d7f8014f68176fc020e68"],["/html/scripts/object/dojo.js","4c423fb0ffd6c301281c0b366f0e7c30"],["/html/scripts/object/flame.js","12c491c5e6ef2888299ae16ffc9f7ebe"],["/html/scripts/object/flash.js","dcc755fd431db24ecf900a01da0c4b30"],["/html/scripts/object/fps.js","b316846ffae02bd5a5fe7b41bee77364"],["/html/scripts/object/game-over.js","a0b07f8246fca150ef89f7ba1e2cab28"],["/html/scripts/object/home-desc.js","4ec16b0a1a0cd2b50304aed081dae3f1"],["/html/scripts/object/home-mask.js","fa4bf0f21c6b1665dad2351c408ffcdc"],["/html/scripts/object/knife.js","fbe652f249a17489acfce860af0308d7"],["/html/scripts/object/light.js","f0261bfae5977253b39c6a59fba9614c"],["/html/scripts/object/logo.js","df1a14d31630fbc9e4b5405b3581802a"],["/html/scripts/object/lose.js","eb2b8fb414438c6a2b9906f142d933dd"],["/html/scripts/object/new-game.js","b73a4947c500f0c2c4053be426bfef14"],["/html/scripts/object/new.js","4338fa03b0ced3ff7d2708737e4863b9"],["/html/scripts/object/ninja.js","ccda322e4e6b191c4d00ee2e82f0544c"],["/html/scripts/object/quit.js","256721ebb93393777e3bf97c5bc56377"],["/html/scripts/object/score.js","530ae24bf8ea467464bf401083bb2ff6"],["/html/scripts/sence.js","dbae496a57a4000f0a88367ffe043f64"],["/html/scripts/state.js","4a1c5b681f61eaf3515e7cf75dc73665"],["/html/scripts/timeline.js","3494e460058a60e568ffabd37a918854"],["/html/scripts/tools.js","59520a2419858275b391bf985029bd1b"],["/html/src/FishGroup.js","df545a083cbd99039b1b3643424b5532"],["/html/src/FishManager.js","d699b0f9e341f6fa62a953eccfa83c63"],["/html/src/R.js","30cc48a4dfe43c1545e0d3f43dee4614"],["/html/src/Utils.js","acb2c55cc5b30fffff22d42bc67dbf1d"],["/html/src/fishjoy.js","73a54aabc524416c2ad6c5de5ec396e3"],["/html/src/fishjoy2.js","449477c957131d4865e968190068ab93"],["/html/src/views/Bullet.js","ccdc0763855cdb8316b233cc4388afff"],["/html/src/views/Cannon.js","a6bffea2f752016669d86e47245dff79"],["/html/src/views/Fish.js","e320d9e87c3e70d9dc1e28ad9a7cce0b"],["/html/src/views/Num.js","316cb499b9d67aa5daa17178666d4920"],["/html/src/views/Player.js","224261cc53415276d865cc8637f2e197"],["/html/wechat/css/bootstrap.min.css","9f37f46255f454a75a57419b30cd4ca3"],["/html/wechat/css/common.css","c18aa7c9290278305303ddb80b5f92a6"],["/html/wechat/css/datetimepicker.css","d929aac891fd3fa627c1ac8d9ee35c10"],["/html/wechat/css/datetimepicker_blue.css","4a3f2bfe7fa9effd0c574cce4041fcdc"],["/html/wechat/css/dropdown.css","925ebaf1c11c50e96888264b32287681"],["/html/wechat/css/font-awesome.min.css","4fbd15cb6047af93373f4f895639c8bf"],["/html/wechat/css/m.css","479ec5ee2e017aee4757f5184a8732fb"],["/html/wechat/css/metismenu.min.css","57da7bd82bc766c0722db151cb3b9100"],["/html/wechat/css/sb-admin-2.css","a65dfb0d11cae68ffa82b3536a568eba"],["/html/wechat/css/wx2019.css","f79ac2ccfccbb2eec5e93b5a48c2a87b"],["/html/wechat/css/wxpay2019.css","dcb1fa0eed056f60ce24c5a64bd5c6cb"],["/html/wechat/css/wxwallet2019.css","470296665468a73ace0b1b9d631bb7d6"],["/html/wechat/default.html","0fd4037b009b7032eaec016cf14fb41b"],["/html/wechat/fonts/fontawesome-webfont.eot","132ff2691c4d5ecb451f7ad7cb101e0d"],["/html/wechat/fonts/fontawesome-webfont.svg","3265a36b38bea384c7e12e28c21e0fc8"],["/html/wechat/fonts/fontawesome-webfont.ttf","6017eaf4bc64f65427cf757c8187a202"],["/html/wechat/fonts/fontawesome-webfont.woff","d1d12fe01620ca54af54fefc51dbc4a7"],["/html/wechat/fonts/fontawesome-webfont.woff2","d5997db8d4382295f6b660516c3e2d61"],["/html/wechat/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/html/wechat/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/html/wechat/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/html/wechat/images/a-redpacket-icon.png","7c8c0b85ffbde4b2aa90334326c3b9d3"],["/html/wechat/images/add-pic-pic.png","20e9e7471811c981c94aa791f861fec5"],["/html/wechat/images/add-pic.png","d93505ca057ed813d9502205847d339e"],["/html/wechat/images/ali-balance-bg.png","a75efcfba8879952b04f45d78780b342"],["/html/wechat/images/ali-bg.png","2f171a22394143fe55a2973750448eb9"],["/html/wechat/images/ali-bg2.png","fc2986d375c06bbac9e1083615f445a6"],["/html/wechat/images/ali-face-mask.png","cf3c6532773e36a0b5f291f1597d4faa"],["/html/wechat/images/apps-close.png","773b51e9509cedcfdb7d684e4006d93b"],["/html/wechat/images/btn-face.png","bc7af2c2b69b4322685700f597671c53"],["/html/wechat/images/btn-menu-2.png","bd65192cd3337ab6329af0e90cd5d884"],["/html/wechat/images/chat_arraw_orange.png","4328e7ef3d467dc00202b441407644c2"],["/html/wechat/images/chrome.png","5de9598ccf191123fbedab2b8d2a5d0e"],["/html/wechat/images/cndx.png","0de8b0c37b1df41313f607bb5a8f57ec"],["/html/wechat/images/cnlt.png","1472edb2a3840f82b688c57e34b9f87d"],["/html/wechat/images/cnyd.png","5b347d58c4a5bf90e514f00e02115857"],["/html/wechat/images/face/add-pic.png","d93505ca057ed813d9502205847d339e"],["/html/wechat/images/face/face.png","cf3c6532773e36a0b5f291f1597d4faa"],["/html/wechat/images/glyphicons-halflings.png","2516339970d710819585f90773aebe0a"],["/html/wechat/images/i-bottom-alipay-process.png","0a7704262bc115fb5087b3ae6b0a0520"],["/html/wechat/images/i-bottom-alipay.png","90d86420a7fc558784152606bfab30d5"],["/html/wechat/images/i-bottom-wechat.png","6a386d47c93930d4a17d3e3c5700440d"],["/html/wechat/images/i-bottom-wechat2.png","59d0901c71bcbc5b389b474b4872ebd3"],["/html/wechat/images/i-carrier-dx.png","c577280a42b45239cdec8c0dd0ea9cd5"],["/html/wechat/images/i-carrier-lt.png","d6f6d0497a986b1b2896540317814224"],["/html/wechat/images/i-carrier-yd.png","56b2ac69498f6d34ebd0aba3142b7637"],["/html/wechat/images/i-n-era.png","ef5d5831b5cd7ff23434582d1d078dcf"],["/html/wechat/images/i-n-user-group.png","64f3abdad4a72d559954060154bd84b4"],["/html/wechat/images/i-n-user.png","105b0b02c65b459953ec8424d5c230d0"],["/html/wechat/images/i-nav-ali-balance.png","9c8621310ba1b9c9ab2d8996533ff3b5"],["/html/wechat/images/i-pay-icon-rec.png","bd692cdd4b77d50511253e64540477ef"],["/html/wechat/images/i-pay-icon-rec1.png","bd692cdd4b77d50511253e64540477ef"],["/html/wechat/images/i-pay-icon-rec2.png","d3b81445d4ab034b9dfcd149c98cb0a2"],["/html/wechat/images/i-pay-icon-send1 - 副本.png","d3b81445d4ab034b9dfcd149c98cb0a2"],["/html/wechat/images/i-pay-money.png","f4788e4400620e08e74ac6bc3b240d07"],["/html/wechat/images/i-pay-rec.png","a8a091a7a6325eb6b6fce1ffc3655a38"],["/html/wechat/images/i-pay-send.png","a8a091a7a6325eb6b6fce1ffc3655a38"],["/html/wechat/images/i-pay-send1.png","ec2bcdc0729527c3d53f65f7654c03d8"],["/html/wechat/images/i-redpacket-icon@3x.png","1015709eabb9d88b66998acef7755271"],["/html/wechat/images/i-top-3g.png","65cc1bdda8c27b3e70f593e2eb754ec0"],["/html/wechat/images/i-top-4g.png","206671a5b674a578e19114624e36147f"],["/html/wechat/images/i-top-5g.png","2209d56e421832ecb2719c41c04b2397"],["/html/wechat/images/i-top-berry1.png","f721a3548738913a29feeb1605b94dc0"],["/html/wechat/images/i-top-berry2.png","9ab124cb5258e77f0d918aab46aca5b2"],["/html/wechat/images/i-top-bg.png","160e8cdb5334ccd28392197e4d7473d7"],["/html/wechat/images/i-top-bg2.png","bb22bdcf16c45437930eb854c88bdf6c"],["/html/wechat/images/i-top-dir.png","40eaa2b3b321b150d51b862c141d8e6d"],["/html/wechat/images/i-top-e.png","698bab6dfb7ae032011cc0b7b6256a85"],["/html/wechat/images/i-top-g.png","d4d5400f1bdcdc51ef5ed8782623fb38"],["/html/wechat/images/i-top-nav-alipay.png","343e3aa9cefbe400f6b96036ab18abc2"],["/html/wechat/images/i-top-nav-pay-detail.png","388389666108424a3f1547265f7ef621"],["/html/wechat/images/i-top-nav-wallet.png","2e226adc8eaa86d520c83c17eabf8610"],["/html/wechat/images/i-top-nav.png","66fb7ff206ac1bfef68bfb36742f6901"],["/html/wechat/images/i-top-signa.png","2c4d2b32ec981f63d577ed4e844c1638"],["/html/wechat/images/i-top-signal1 .png","5bb7b5e2e943a5bf7f004a0db4d7eac6"],["/html/wechat/images/i-top-signal1.png","f2c5204b736d97b97e203108596cc3da"],["/html/wechat/images/i-top-signal11.png","43078303751a81d88dc20a4731cd03dd"],["/html/wechat/images/i-top-signal2.png","bc74c29374e730937e39d69339ad3b80"],["/html/wechat/images/i-top-signal3.png","20dcb397ca9693cadc5fc4424121c435"],["/html/wechat/images/i-top-signal4.png","34b10123347efb571c7f47eddf0268ee"],["/html/wechat/images/i-top-signal5.png","34b10123347efb571c7f47eddf0268ee"],["/html/wechat/images/i-top-wifi.png","b1751860ff2569d0c8da8d7fd4748a23"],["/html/wechat/images/i-voice-unread.png","ef59f73ad220ece2226ecb29450cbd04"],["/html/wechat/images/i-w-pay-more.png","939898a92ea6c86359a07813ab170a19"],["/html/wechat/images/i-w-pay-rec-time.png","c68cc31407d4a37457e915c5b1f749d9"],["/html/wechat/images/i-w-pay-rec.png","b6f60a32b52056477f26aab102b56dbd"],["/html/wechat/images/i-w-pay-sen-time.png","bc99446bfd397ff6c21f8d87d4e8bef3"],["/html/wechat/images/list-arrow.png","d7586ebabe021ca05e948c572b2ffe76"],["/html/wechat/images/loading.gif","50c5e3e79b276c92df6cc52caeb464f0"],["/html/wechat/images/msg-del.png","940099a9be9fa61d3ffc1af8ea2c522d"],["/html/wechat/images/nw-4g.png","7489165ed0169c12a91d9b326a1da599"],["/html/wechat/images/nw-5g.png","84444e116ccfc13b3355208514b12f76"],["/html/wechat/images/nw-wifi.png","58aacd9f0960ac0ab97c853b042dd1bc"],["/html/wechat/images/pop-close.png","c88440b5a2c706c6b9bd7c945ccd9f74"],["/html/wechat/images/qq_emoji/Expression_100@2x.png","5b957a415f68a403e4362d22cdec7877"],["/html/wechat/images/qq_emoji/Expression_102@2x.png","8cd69977fd83be0cbeb9bd9308df462a"],["/html/wechat/images/qq_emoji/Expression_103@2x.png","3d8333a8c88fecdc12803112ab59cabb"],["/html/wechat/images/qq_emoji/Expression_104@2x.png","298af5e37218c2935c460f3a9d3e021f"],["/html/wechat/images/qq_emoji/Expression_105@2x.png","ce0c2382c47b0c04bd420a95eafdc414"],["/html/wechat/images/qq_emoji/Expression_10@2x.png","ba3770981cacb8c9d114d53d607ee72e"],["/html/wechat/images/qq_emoji/Expression_11@2x.png","2910f5a1f079298837643065ca800976"],["/html/wechat/images/qq_emoji/Expression_12@2x.png","cdcc1db57b87263f1c66ef01a61a1785"],["/html/wechat/images/qq_emoji/Expression_13@2x.png","d3df5f30fcc2fb2d141bce5e002f533f"],["/html/wechat/images/qq_emoji/Expression_14@2x.png","d129c6de5a4a5eb703b80a3d0c91eebb"],["/html/wechat/images/qq_emoji/Expression_15@2x.png","8fab29e4ddfabcb72ce3ef7ac03e1aa0"],["/html/wechat/images/qq_emoji/Expression_16@2x.png","3bf0dcd1ce9d2cb7862560753055cad8"],["/html/wechat/images/qq_emoji/Expression_17@2x.png","ec52cdce9d64d3b06a2c5005d9b17fbf"],["/html/wechat/images/qq_emoji/Expression_18@2x.png","8d97a9bb5779e049f0a7b6f1131c92f5"],["/html/wechat/images/qq_emoji/Expression_19@2x.png","5583c71f65cee54b6e6c80794ee4658b"],["/html/wechat/images/qq_emoji/Expression_1@2x.png","a5df79e27ef81ae3a7873689c5477d31"],["/html/wechat/images/qq_emoji/Expression_20@2x.png","fdbdbb1d637c106e70001195ccd435be"],["/html/wechat/images/qq_emoji/Expression_21@2x.png","e90903677ea1da79d934f1e646df5b5b"],["/html/wechat/images/qq_emoji/Expression_22@2x.png","91b6d7e8b38b3453c603abc11e01acfd"],["/html/wechat/images/qq_emoji/Expression_23@2x.png","5fb30d3c5d5bfe1b20cf5fa0e5bc2372"],["/html/wechat/images/qq_emoji/Expression_24@2x.png","e6f92d0928d8dbb4847ab92b8af6f076"],["/html/wechat/images/qq_emoji/Expression_25@2x.png","1dedb750f2358046b858e519fc9928c5"],["/html/wechat/images/qq_emoji/Expression_26@2x.png","6206fc56b3ac279ac0c9c8eb09cbafa1"],["/html/wechat/images/qq_emoji/Expression_27@2x.png","7aeef53989dab9b44734ad48b0a0ae06"],["/html/wechat/images/qq_emoji/Expression_28@2x.png","462d3738494d44c0ea35f6dcfc552063"],["/html/wechat/images/qq_emoji/Expression_29@2x.png","697f4ac3b158ec78145836cd65d95098"],["/html/wechat/images/qq_emoji/Expression_2@2x.png","629d0f5158483a6b3ed8d1361f64e187"],["/html/wechat/images/qq_emoji/Expression_30@2x.png","c2f92dd5673888cc8b5d7191da94e100"],["/html/wechat/images/qq_emoji/Expression_31@2x.png","9827285169e8681fee9c3c33b675c1d1"],["/html/wechat/images/qq_emoji/Expression_32@2x.png","d17bf5dae095f42da9366924b3855046"],["/html/wechat/images/qq_emoji/Expression_33@2x.png","99665fd836c91c8be190dca47e1e877c"],["/html/wechat/images/qq_emoji/Expression_34@2x.png","2a7e108db5ac760ad9206364f5e11cde"],["/html/wechat/images/qq_emoji/Expression_35@2x.png","3032596fa5829fc4a7f79cc701197c94"],["/html/wechat/images/qq_emoji/Expression_36@2x.png","b95105f988942e34a220eff7ae385c6f"],["/html/wechat/images/qq_emoji/Expression_37@2x.png","c7371fbba76e41d56271579d5ba7c623"],["/html/wechat/images/qq_emoji/Expression_38@2x.png","8d6c408510f77dd02db31eb5126bf69f"],["/html/wechat/images/qq_emoji/Expression_39@2x.png","491ee62d5d9031ad144effce2c983f8c"],["/html/wechat/images/qq_emoji/Expression_3@2x.png","bc327829d7c11a067b07433aed28c959"],["/html/wechat/images/qq_emoji/Expression_40@2x.png","59ae4333ba282a735c44dc26ff85e697"],["/html/wechat/images/qq_emoji/Expression_41@2x.png","52332c142a19a663e725ae089031d4dc"],["/html/wechat/images/qq_emoji/Expression_42@2x.png","df07a82e8339f19cce1b36a79fa9896f"],["/html/wechat/images/qq_emoji/Expression_43@2x.png","db884abaec8519ec8b8d8814877448cb"],["/html/wechat/images/qq_emoji/Expression_44@2x.png","4b51b89deb227a1a4aefa7756b23b518"],["/html/wechat/images/qq_emoji/Expression_45@2x.png","4f40d945afc0ae06ecdc365dcd76fd70"],["/html/wechat/images/qq_emoji/Expression_46@2x.png","aacbd67ffe79ab0381f879714f1cf7af"],["/html/wechat/images/qq_emoji/Expression_47@2x.png","70e0b890c86bccb2a18f9a958f951727"],["/html/wechat/images/qq_emoji/Expression_48@2x.png","2cd8881ff73a4dfafa2765217fcceb1e"],["/html/wechat/images/qq_emoji/Expression_49@2x.png","3462ab07b0ee837bc6c147e88526b973"],["/html/wechat/images/qq_emoji/Expression_4@2x.png","8725f39e993f08a70211f77c50bd7ec5"],["/html/wechat/images/qq_emoji/Expression_50@2x.png","21dee18d0c3f3b5a5084cb72ba0171bc"],["/html/wechat/images/qq_emoji/Expression_51@2x.png","06538c5c30fa1125aa9e0fe3a459f9ce"],["/html/wechat/images/qq_emoji/Expression_52@2x.png","f3c4139806ad8cca838d6fb218b9cdae"],["/html/wechat/images/qq_emoji/Expression_53@2x.png","da4b4d722250af67211bdcba487ab61d"],["/html/wechat/images/qq_emoji/Expression_54@2x.png","d17945569a7ccc47cac4751541c51c95"],["/html/wechat/images/qq_emoji/Expression_55@2x.png","81cc190e4f69a646c5415ab1dff129b8"],["/html/wechat/images/qq_emoji/Expression_56@2x.png","91a1012cbaf439a0b407ae2f24871058"],["/html/wechat/images/qq_emoji/Expression_57@2x.png","3ee279698380d17dcb9e25636afc8f60"],["/html/wechat/images/qq_emoji/Expression_58@2x.png","e260eddc5a52bd92fff2609c839b79d4"],["/html/wechat/images/qq_emoji/Expression_59@2x.png","83d152d28596d93e8378395255167bbb"],["/html/wechat/images/qq_emoji/Expression_5@2x.png","73d7530407c368994cffbd04ea96536e"],["/html/wechat/images/qq_emoji/Expression_60@2x.png","a1be816ef5ac34c952a730b859e48996"],["/html/wechat/images/qq_emoji/Expression_61@2x.png","3da6004f9a4fb00e22fa492c43b75a91"],["/html/wechat/images/qq_emoji/Expression_62@2x.png","b34ace15a3fb94d267dfc72502e8f134"],["/html/wechat/images/qq_emoji/Expression_63@2x.png","c53611bce32f5635afdfb138d17a142f"],["/html/wechat/images/qq_emoji/Expression_64@2x.png","6b13738c833833d0a6b66d0396479ef0"],["/html/wechat/images/qq_emoji/Expression_65@2x.png","6ca5051e948151b7c8434379dcd103a6"],["/html/wechat/images/qq_emoji/Expression_66@2x.png","b5cfc81aea46a4489df43416a1261468"],["/html/wechat/images/qq_emoji/Expression_67@2x.png","20d0eff1f59f4d5f1f809e02aa09ccb1"],["/html/wechat/images/qq_emoji/Expression_68@2x.png","67e4cc4c3fedb38073d4b32b4bc36250"],["/html/wechat/images/qq_emoji/Expression_69@2x.png","653e9e5b306864ed178ef9c62736ed60"],["/html/wechat/images/qq_emoji/Expression_6@2x.png","ebdcbf084410d608e27df179d5b715d0"],["/html/wechat/images/qq_emoji/Expression_70@2x.png","9598d35bab6d47cca7f193c99fb83d60"],["/html/wechat/images/qq_emoji/Expression_71@2x.png","3a042301a75014744af5d0ec2188b193"],["/html/wechat/images/qq_emoji/Expression_72@2x.png","0c56ed2792b60b3cec789bf0bc253f85"],["/html/wechat/images/qq_emoji/Expression_73@2x.png","73a2b4c8b07c02aa5a39a2dfb34f8c52"],["/html/wechat/images/qq_emoji/Expression_74@2x.png","dd3db615938958c24b7a2a8a2de1436d"],["/html/wechat/images/qq_emoji/Expression_75@2x.png","608b82f3606985f5cb68e467f7206cca"],["/html/wechat/images/qq_emoji/Expression_76@2x.png","e873fae518b8641a544a5d93adde18ad"],["/html/wechat/images/qq_emoji/Expression_77@2x.png","6bab7d32249c9b05e40ea00cee7709ef"],["/html/wechat/images/qq_emoji/Expression_78@2x.png","fadce35e299742070dd624160fe2cba8"],["/html/wechat/images/qq_emoji/Expression_79@2x.png","21488635035a6eed68fb5dbe173db5c2"],["/html/wechat/images/qq_emoji/Expression_7@2x.png","2c35096aaeb1527bf42e091350abbc73"],["/html/wechat/images/qq_emoji/Expression_80@2x.png","12edc1dee24bea603178ee2a8ef83a34"],["/html/wechat/images/qq_emoji/Expression_81@2x.png","72718fa4994130835e9ee86def583790"],["/html/wechat/images/qq_emoji/Expression_82@2x.png","02f3cc60c7a5f28331de2af1deab4663"],["/html/wechat/images/qq_emoji/Expression_83@2x.png","9eb6eb408b3c4c01f188cbfc9877ebc7"],["/html/wechat/images/qq_emoji/Expression_84@2x (1).png","52fda226e49697d7bfc31e6f6aac4d6b"],["/html/wechat/images/qq_emoji/Expression_84@2x.png","52fda226e49697d7bfc31e6f6aac4d6b"],["/html/wechat/images/qq_emoji/Expression_85@2x.png","590033ade217affb6e01dd19b553bdf2"],["/html/wechat/images/qq_emoji/Expression_86@2x.png","6efe8b23c051c7678b9dde337771b62f"],["/html/wechat/images/qq_emoji/Expression_87@2x.png","23f84e6b4aa630be5afb018113920665"],["/html/wechat/images/qq_emoji/Expression_88@2x.png","2339afec77f5170f3877dedaa853093b"],["/html/wechat/images/qq_emoji/Expression_89@2x.png","7211ae39fb978787da55889ec503dda0"],["/html/wechat/images/qq_emoji/Expression_8@2x.png","a53f18b82f7b44bc391702589c29f563"],["/html/wechat/images/qq_emoji/Expression_90@2x.png","41e373e872f7a1de89750b7be27d13ef"],["/html/wechat/images/qq_emoji/Expression_91@2x.png","4a597078a041fb350ca111e51be72313"],["/html/wechat/images/qq_emoji/Expression_92@2x.png","7ae47e508d695c499d918814858c1eb3"],["/html/wechat/images/qq_emoji/Expression_93@2x.png","06053484d41654dcc2e6e9135e98d26b"],["/html/wechat/images/qq_emoji/Expression_94@2x (1).png","a499b10bf9c68f889b7b88d8f6bdd0a4"],["/html/wechat/images/qq_emoji/Expression_94@2x.png","a499b10bf9c68f889b7b88d8f6bdd0a4"],["/html/wechat/images/qq_emoji/Expression_95@2x.png","74855e8217db1d503b54ad31a1ccb4d2"],["/html/wechat/images/qq_emoji/Expression_96@2x.png","22e5e0414d833cf0b2d62e8d5f01429b"],["/html/wechat/images/qq_emoji/Expression_97@2x.png","dbea7762766a4c7ba90567e7605cb432"],["/html/wechat/images/qq_emoji/Expression_98@2x.png","90668ace5a389ef56e534333337b6b1e"],["/html/wechat/images/qq_emoji/Expression_99@2x.png","6f3309eac0f7908aca564a786de7ab7e"],["/html/wechat/images/qq_emoji/Expression_9@2x.png","8d2448467e64cffd7e4db9e7ee80a4d8"],["/html/wechat/images/qqsmilies17ced3.png","6cd41defa2af8aec8fb7e035f9f00138"],["/html/wechat/images/rec-record.png","9f990a6a4570e037dd7a8f3ec114a764"],["/html/wechat/images/rec-txt-bg.png","0617a36b640ae85b914eb8462c53475a"],["/html/wechat/images/sen-record.png","44688e643c5b6e28a43680522639bd75"],["/html/wechat/images/sen-txt-bg.png","930fa369c7467188ba9610d197594d28"],["/html/wechat/images/signal1.png","5bb7b5e2e943a5bf7f004a0db4d7eac6"],["/html/wechat/images/signal2.png","4af1dca283df0afb7da4cd817ea7b341"],["/html/wechat/images/signal3.png","6740da4b79c0876f18bb2f51f33e0d81"],["/html/wechat/images/signal4.png","1175579e2c1016224a3b930aed69c9dc"],["/html/wechat/images/signal5.png","1175579e2c1016224a3b930aed69c9dc"],["/html/wechat/images/w-pay-detail-$.jpg","e2209d6752ade6ca542ef748b04da39c"],["/html/wechat/images/w-pay-detail-gou.png","ff6552b14ff9ac05376851ff1f740ca5"],["/html/wechat/images/wallet-$.png","88aebba1d4d7dd8ab1944b8191f60ed0"],["/html/wechat/images/wallet-bottom.png","ff573d26605ab5778fce4f2f5a00ef34"],["/html/wechat/images/wallet-btns.png","e556ee874606385985ea6d08e7189823"],["/html/wechat/images/wallet-logo.png","b009ea2c922636825dc3bf40e7bd5c83"],["/html/wechat/images/water.png","1b5c0c8d8d3fadf21e158d45ab657e61"],["/html/wechat/images/wx_money_bgy.png","24ad8a4841b7647a608a5aa63fb52c4c"],["/html/wechat/images/wxdh-bottom.png","a4d95445d059e707bcbd2a64d1afc47b"],["/html/wechat/images/wxdh-top.png","bd600bc9092f4c5692d295a4c49ef7a9"],["/html/wechat/images/wxpay_bgvs.png","6a5708f84809ba888779c8a56ebb06a3"],["/html/wechat/js/bootbox.min.js","8055e87f2396a627e93c85890189e625"],["/html/wechat/js/bootstrap-datetimepicker.min.js","235aedf5f8a7d9b042c645deecad83e3"],["/html/wechat/js/bootstrap-datetimepicker.zh-cn.js","b230aa2bed63e0c8d96418085515d620"],["/html/wechat/js/bootstrap.min.js","4becdc9104623e891fbb9d38bba01be4"],["/html/wechat/js/common.js","094c30ef14d2ddfa737b6ae6e93785ee"],["/html/wechat/js/emoji.js","c05ad303934b54370c6d8bc62d060b83"],["/html/wechat/js/functions.js","5c8859f67bf51aae762f7ea93063649a"],["/html/wechat/js/hm.js","f4a8bd80221b0611cc76f0dddb92445a"],["/html/wechat/js/html2canvas.min.js","5330312b84e884012c526a60437ba7f3"],["/html/wechat/js/html5shiv.js","0ce8f355891c26c28f057e195e97dcd5"],["/html/wechat/js/jquery-1.10.2.min.js","628072e7212db1e8cdacb22b21752cda"],["/html/wechat/js/jquery.sglide.js","931de44ee6b408fc26c8595bc39fd9bc"],["/html/wechat/js/metismenu.min.js","9d596cdad6a6e250ced46785d04adf4e"],["/html/wechat/js/sb-admin-2.js","0dff85631bade1ed749fbc10a54de2b3"],["/html/wechat/wxpay.html","e73242ca37677531207b289fae700849"],["/html/wechat/wxwallet.html","e2231022f053b228581080605db5cc8a"],["/index.html","eea53a65462448b82bcb4ea4b836c210"],["/js/clipboard.min.js","274d5f6334c31fdb1b0464a912fa7f15"],["/js/jquery-1.4.3.min.js","4a6a65801d514b0cdfe063e0b691e04b"],["/js/script.js","b42e583dda59ad9b226c59e467975903"],["/js/valine.js","caf762941379bec79d656fb5f7e6784c"],["/js/waline.js","f38cec659f60efc5474884e75dc05ec8"],["/logo.svg","5b67c84a70fddaa9ca78f6bfde8c8faf"],["/mathjax/output/chtml.js","d8ed9cd91e5fdf7236920f38e3d8f8df"],["/mathjax/output/chtml/fonts/tex.js","2d17b60a4b2cf3d5e633e4d417f71ee1"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_AMS-Regular.woff","07173fb77d2ee655811499d40c8388e7"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Bold.woff","c2704fb5d3a6f94fa839d7cd46935a58"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Calligraphic-Regular.woff","c8f163c30c75aa2818c77d80a99ede24"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Fraktur-Bold.woff","bc42125861bd5bfc8686deeb612dcbb3"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Fraktur-Regular.woff","b80e08d5a79acbd1fafb1ca6f3515664"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Main-Bold.woff","c9423d5dc9d82a38ca215f74e9cdd9f2"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Main-Italic.woff","7e83626ba8bf2d20dc41565f1e6d0afc"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Main-Regular.woff","9995de4787f908d8237dba7007f6c3fe"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Math-BoldItalic.woff","77dbcee3c3d9a82a0c04a4ae7992b895"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Math-Italic.woff","5589d1a8fc62be6613020ef2fa13e410"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Math-Regular.woff","ede66e09bbe848ef0b2f36ef048995ea"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_SansSerif-Bold.woff","07281897a98a61c3733e1670f82a9fd5"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_SansSerif-Italic.woff","3d580bd561716bfb1f0b4fdd7063a802"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_SansSerif-Regular.woff","bc3af04f9a671fcabd6498042c57478f"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Script-Regular.woff","4c74e33b0feb1fdbda49403a5e7ed604"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Size1-Regular.woff","7ee67b5348ee634dd16b968d281cb882"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Size2-Regular.woff","23a68923a42edaa3b7e6bc8a3917d388"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Size3-Regular.woff","a7860eaf63c39f2603165893ce61a878"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Size4-Regular.woff","3b232dcedebc60224f28318bceb3ad42"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Typewriter-Regular.woff","72815766b08ca24d4d29ad1f5d4ecb45"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Vector-Bold.woff","77dd7f101fe6e19aeb5845f9592f7ee2"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Vector-Regular.woff","06568d8d53fb00816d101164854d8c6f"],["/mathjax/output/chtml/fonts/woff-v2/MathJax_Zero.woff","b26f96047d1cb466c83e9b27bf353c1f"],["/mathjax/tex-chtml.js","1d75f965e398e9708620ed9fb1661a1a"],["/privacy.html","61420d031af275529cd317f04cdd374f"],["/reward/index.html","bf37b5bbb3d3bd261a0e67d282e6b43e"],["/sw-register.js","6b3202b9a17f85ac4743af4fdd9e8dba"],["/tags/Deep-Learing/index.html","d9958ad7368bb09b30c8541c7bce5d2a"],["/tags/OpenCV/index.html","8bcf7e3cc5939c24f66d3a5891829cd0"],["/tags/Python/index.html","34148025af5291f18ed28c0514d8055f"],["/tags/markdown/index.html","6d1c3ba4edec4fba260b674e77f54df9"],["/tags/marktext/index.html","67c86fc37dbea9e6d40fe3d2b92ab94d"],["/tags/工具/index.html","f90bbf9d7b6a7e3de0551780b4956a08"],["/tags/损失函数/index.html","405bb3ace349111b6b0ec675ca3fa247"],["/tags/教程/index.html","a192e80e9e770e6dfaacfb44b14ac429"],["/tags/数字图像处理/index.html","afa12342a372191d08940451fd347a4a"],["/tags/数据处理/index.html","dedb6744a78fbad9ff508791cdd7dbe7"],["/tags/杂谈/index.html","c24afff65b392b72b988fda58f19449a"],["/tags/模型压缩/index.html","5bdc1effc9de925cd8cb04e64a164999"],["/tags/深度学习/index.html","52c7dbb2d1c43042c76f4593ab6f934c"],["/tags/激活函数/index.html","9bab4df77ac9413e489e4b080c0afadb"],["/tags/神经网络/index.html","0879cb77534e9c89756849023ef49ab9"],["/tags/随笔/index.html","56e5f1701f4041e127b78242df7273d7"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
