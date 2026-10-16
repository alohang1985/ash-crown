// 옛 주소 정리용 서비스 워커: 예전에 저장된 옛 게임 화면을 지우고, 열려 있는 창을 이사 안내 화면으로 새로 고침
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{try{const ks=await caches.keys();await Promise.all(ks.map(k=>caches.delete(k)))}catch(_){}
 await self.clients.claim();const cs=await self.clients.matchAll({type:'window'});for(const c of cs){try{c.navigate(c.url)}catch(_){}}
 await self.registration.unregister()})()));
self.addEventListener('fetch',e=>{e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>fetch(e.request)))});
