let installPrompt;
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;});
if('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(()=>{});
window.addEventListener('DOMContentLoaded',()=>{
 if(matchMedia('(display-mode: standalone)').matches||navigator.standalone)return;
 const button=document.createElement('button');button.type='button';button.textContent='앱 설치';
 const header=document.querySelector('.header-right');if(header){button.className='header-home';header.prepend(button);}else{button.style.cssText='display:block;margin:16px auto;background:none;color:#4771ef';document.querySelector('.panel')?.append(button);}
 button.onclick=async()=>{if(installPrompt){const prompt=installPrompt;installPrompt=null;await prompt.prompt();if((await prompt.userChoice).outcome==='accepted')button.remove();return;}
 alert('iPhone: Safari의 공유 메뉴 → 홈 화면에 추가\nAndroid: Chrome 메뉴 → 앱 설치 또는 홈 화면에 추가\n컴퓨터: 브라우저 주소창 또는 메뉴의 앱 설치');};
 window.addEventListener('appinstalled',()=>button.remove());
});