self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{if(event.request.mode!=='navigate'||event.request.method!=='GET')return;
 event.respondWith(fetch(event.request).catch(()=>new Response('인터넷에 연결한 뒤 Folio를 다시 열어 주세요.',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'no-store'}})));
});