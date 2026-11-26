/* Multi-page support: remember language and theme between pages, mark the current menu item. */
(function(){
var root=document.querySelector('.vx-site');if(!root)return;
function get(k){try{return localStorage.getItem(k);}catch(e){return null;}}
function set(k,v){try{localStorage.setItem(k,v);}catch(e){}}
var lb=document.getElementById('vxLang'),tb=document.getElementById('vxTheme');
if(root.getAttribute('lang')==='ar'){lb.click();lb.click();}else if(get('vxLang')==='ar')lb.click();
if(get('vxTheme')==='dark'&&!root.classList.contains('vx-dark'))tb.click();
lb.addEventListener('click',function(){setTimeout(function(){set('vxLang',root.getAttribute('lang'));},0);});
tb.addEventListener('click',function(){setTimeout(function(){set('vxTheme',root.classList.contains('vx-dark')?'dark':'light');},0);});
var f=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('#vxNav a').forEach(function(a){if(a.getAttribute('href')===f)a.setAttribute('aria-current','page');});
})();
