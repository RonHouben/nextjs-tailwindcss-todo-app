if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,i,c)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=c(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/K7ggZMTV5A1tkb7uxWVUS/_buildManifest.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/K7ggZMTV5A1tkb7uxWVUS/_ssgManifest.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/29107295.8f7b25e6de7f033ca9a1.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/2a125eac06e92ee75912b650da440911bb2cc61a.2d9bd096b27da2f534de.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/322a7e8b.54339471d0269b2f5128.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/6925d27dd80cc1a7f63fea18915fd39170ba2cd4.3a2526fd6f53688a1d46.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.ce364c6c74b7a04a723e.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/analytics.56a120b4706f7f12af0c.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/d91e9ae9.67daf752f81b27a546eb.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/database.6056a1959a0eaad632ed.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/ea181e9e5fe7c0233353e060d1b1ecfe82a8eb8a.373550d26835ce0fd271.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.0a64f8c994b4080812fd.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/fbcdd28c060e3230f29059b9a2cf9cd74a2d6242.e018465a398c3e0735fd.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/ff239f9d.60ff2b3d4b36fb9866da.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/framework.972e47ad649981044547.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/functions.3abd4e351a5513d37397.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/main-9194bc218e6c33e620ef.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/messaging.d8f4b0d17eb732e211e2.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/pages/_app-67d22ba474806f9d092f.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/pages/_error-fe9410a85b60e38f346e.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/pages/index-e74e738ab3816edaa6bc.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/pages/login-d380c91c60e9502f6def.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/pages/success-7236c0803e0780a5b10b.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/performance.ff2ff782c3a82f64897c.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/polyfills-697940986b762087fccd.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/remoteConfig.49c28c0c067f2e14f915.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/storage.8a480fbab8961cfb6694.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/chunks/webpack-c4355a3688a1aa1a5b5a.js",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/_next/static/css/068c67fa57389eb6b8fa.css",revision:"K7ggZMTV5A1tkb7uxWVUS"},{url:"/icons/GitHub-Mark-Light-120px-plus.png",revision:"472739dfb5857b1f659f4c4c6b4568d0"},{url:"/icons/android-chrome-192x192.png",revision:"983baedb62c553a3870a4b2719936150"},{url:"/icons/android-chrome-512x512.png",revision:"88aebf5d47d9c56e37d24911679d4cc6"},{url:"/icons/apple-touch-icon.png",revision:"c406dbba03494b604b04007b2da614cf"},{url:"/icons/favicon-16x16.png",revision:"90acebf02a494885f3c8425254a24f24"},{url:"/icons/favicon-32x32.png",revision:"cae6fd709fff91995cf63ffb913402be"},{url:"/icons/favicon.ico",revision:"d800ad90ef4896ec8919f8bb79b0a2dd"},{url:"/icons/icon-check.svg",revision:"5742160ca6ea943a508cc5763e8cd312"},{url:"/icons/icon-cross.svg",revision:"fe68d57f09f867dbbd1ff592c3b9a017"},{url:"/icons/icon-moon.svg",revision:"e66b8c621b1f209e44a7c955c0e5e809"},{url:"/icons/icon-sun.svg",revision:"b3182f3b0ccf1d65cae48b64861b83a9"},{url:"/icons/mstile-150x150.png",revision:"fb296382e2a3def17bde481e04f298b2"},{url:"/icons/unknown-user-icon.png",revision:"989ae912f4d6e110d81a7544891d0d45"},{url:"/images/bg-desktop-dark.jpg",revision:"02105f02a8dba33f6c8bafac6a9b0979"},{url:"/images/bg-desktop-light.jpg",revision:"988cb74c73a65433889e51b150c1a8f9"},{url:"/images/bg-mobile-dark.jpg",revision:"b0112ea5222ffd8c9d69349be56c620b"},{url:"/images/bg-mobile-light.jpg",revision:"266f20c7fd7778c0b72ac804fd769fe5"},{url:"/manifest.json",revision:"3e4104272acc50d844f6f8f03694783e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
