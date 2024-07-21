let i,o;const s=()=>{if(i)return;const e=document.createElement('div');e.id='s',e.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999',document.body.appendChild(e),i=setInterval(()=>{const t=document.getElementById('s');if(!t)return;const n=document.createElement('div');n.className='p',n.style.cssText=`position:absolute;width:10px;height:10px;border-radius:50%;opacity:0;animation:a .8s ease-in-out forwards;left:${Math.random()*innerWidth}px;top:${Math.random()*innerHeight}px;background:radial-gradient(circle,hsl(${360*Math.random()},100%,80%)20%,transparent)`,t.appendChild(n),setTimeout(()=>n.remove(),800)},50);o=document.createElement('style'),o.textContent='@keyframes a{0%{transform:scale(0) rotate(0deg);opacity:0}50%{transform:scale(1) rotate(180deg);opacity:1}100%{transform:scale(0) rotate(360deg);opacity:0}}',document.head.appendChild(o)},r=()=>{clearInterval(i),i=null;const e=document.getElementById('s');e&&e.remove(),o&&o.remove()},d=e=>{const t=e.target.value.toUpperCase();t.includes('START SPARKLE')?(s(),e.target.value=''):t.includes('STOP SPARKLE')&&(r(),e.target.value='')},a=()=>document.querySelectorAll('input,textarea').forEach(e=>{e.removeEventListener('input',d),e.addEventListener('input',d)});document.readyState==='loading'?document.addEventListener('DOMContentLoaded',a):a();new MutationObserver(a).observe(document.body,{childList:!0,subtree:!0});

(() => {
  const sc = document.body.appendChild(document.createElement('div'));
  sc.id = 'sparkle-container';
  sc.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:99999;';
  
  document.addEventListener('mousemove', e => {
    if (Math.random() < 0.25) {
      const s = sc.appendChild(document.createElement('div'));
      s.className = 'sparkle';
      const size = Math.random() * 8 + 4;
      s.style.cssText = `position:absolute;background:radial-gradient(circle,rgba(255,105,180,0.9) 0%,rgba(255,105,180,0.5) 70%);pointer-events:none;border-radius:50%;animation:sparkle-animation 1.5s ease-out;opacity:0;box-shadow:0 0 10px 2px rgba(255,182,193,0.4);z-index:99999;left:${e.pageX + Math.random() * 20 - 10}px;top:${e.pageY + Math.random() * 20 - 10}px;width:${size}px;height:${size}px;`;
      setTimeout(() => s.remove(), 1500);
    }
  });

  const style = document.head.appendChild(document.createElement('style'));
  style.textContent = '@keyframes sparkle-animation{0%{transform:scale(0.3);opacity:1;}100%{transform:scale(1.2);opacity:0;}}';
})();

(function() {
    function changePlaceholder() {
        const textarea = document.querySelector('textarea#prompt-textarea');
        if (textarea) {
            textarea.setAttribute('placeholder', 'Message Elissa');
            observer.disconnect();
        }
    }

    const observer = new MutationObserver(changePlaceholder);
    observer.observe(document, { childList: true, subtree: true });

    changePlaceholder();
})();

(function() {
    function changeTextContent() {
        document.querySelectorAll('div.grow.overflow-hidden.text-ellipsis.whitespace-nowrap.text-sm.text-token-text-primary')
            .forEach(element => {
                if (element.textContent.trim() === "ChatGPT") {
                    element.textContent = "Elissa";
                    observer.disconnect();
                }
            });
    }

    const observer = new MutationObserver(changeTextContent);
    observer.observe(document, { childList: true, subtree: true });

    changeTextContent();
})();
