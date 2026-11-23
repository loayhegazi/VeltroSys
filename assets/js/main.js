/* ============================================================
   VeltroSys website template: interactions
   - language toggle (English in markup, Arabic from content.js)
   - mobile menu
   - scroll reveal
   - honest template form behavior
   ============================================================ */

(function () {
  "use strict";

  var rootEl = document.querySelector(".vx-site") || document.documentElement;
  rootEl.classList.add("vx-js");

  /* ---------- language toggle ---------- */
  var langBtn = document.getElementById("vxLang");
  var current = "en";
  var originals = null;

  function cacheOriginals() {
    if (originals) return;
    originals = { html: {}, ph: {} };
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      originals.html[el.getAttribute("data-i18n")] = el.innerHTML;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      originals.ph[el.getAttribute("data-i18n-ph")] = el.getAttribute("placeholder");
    });
  }

  function applyLang(lang) {
    cacheOriginals();
    var dict = (window.VX_I18N && window.VX_I18N[lang]) || null;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = lang === "en" ? originals.html[key] : (dict && dict[key]) || originals.html[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      el.setAttribute("placeholder", lang === "en" ? originals.ph[key] : (dict && dict[key]) || originals.ph[key]);
    });
    rootEl.setAttribute("lang", lang);
    rootEl.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    if (langBtn) langBtn.textContent = lang === "ar" ? "EN" : "عربي";
    current = lang;
  }

  if (langBtn) {
    langBtn.addEventListener("click", function () {
      applyLang(current === "ar" ? "en" : "ar");
    });
  }
  if (window.location && window.location.hash === "#ar") applyLang("ar");

  /* ---------- mobile menu ---------- */
  var burger = document.getElementById("vxBurger");
  var nav = document.getElementById("vxNav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("vx-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("vx-open");
        burger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- smooth anchor scrolling ---------- */
  document.querySelectorAll('.vx-site a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  /* ---------- scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".vx-reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("vx-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
    setTimeout(function () {
      revealEls.forEach(function (el) { el.classList.add("vx-in"); });
    }, 1500);
  } else {
    revealEls.forEach(function (el) { el.classList.add("vx-in"); });
  }

  /* ---------- honest template form ----------
     This form intentionally has no action. It does not send anywhere
     until you connect it (see README.md). The note says so. */
  var FORM_NOTE = {
    en: "Template form: this form is not connected yet, so nothing was sent. See README.md to connect it to your email or a form service.",
    ar: (window.VX_I18N && window.VX_I18N.ar && window.VX_I18N.ar["form.note"]) || ""
  };
  var form = document.getElementById("vxForm");
  var note = document.getElementById("vxFormNote");
  if (form && note) {
    var showNote = function () {
      note.textContent = FORM_NOTE[current] || FORM_NOTE.en;
      note.hidden = false;
    };
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      showNote();
    });
    var sendBtn = form.querySelector('button[type="submit"]');
    if (sendBtn) {
      sendBtn.addEventListener("click", function (e) {
        e.preventDefault();
        showNote();
      });
    }
  }
})();
/* VeltroSys original portfolio controls. No backend or tracking. */
(function(){
'use strict';
var root=document.querySelector('.vx-site');
var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var paused=reduced;
var currentSlide=0;
var currentNeed=0;
var lang=function(){return root.getAttribute('lang')==='ar'?'ar':'en';};
var data={
en:[
{title:'Managed IT',tag:'01 / Flagship',desc:'The foundation of your technology setup.',chips:['AMC','Managed services'],need:'Explore AMC and managed services for your business IT.'},
{title:'Hosting',tag:'02 / Cloud',desc:'A place for your workloads, tools and data.',chips:['VPS','Microsoft 365 / Google Workspace','Cloud backup & DR'],need:'Explore VPS, Microsoft 365 / Google Workspace, cloud backup & DR.'},
{title:'Infrastructure',tag:'03 / Connect',desc:'The connected systems behind your workplace.',chips:['Networks','Cybersecurity','Hardware','CCTV','VoIP'],need:'Explore networks, cybersecurity, hardware, CCTV and VoIP.'},
{title:'Development & Consulting',tag:'04 / Build',desc:'From the next question to a custom application.',chips:['Consulting','ERP','Custom apps'],need:'Explore consulting, ERP and custom apps for your next project.'}
],
ar:[
{title:'إدارة تقنية المعلومات',tag:'01 / الخدمة الأساسية',desc:'الأساس لإدارة بيئتك التقنية.',chips:['AMC','خدمات مُدارة'],need:'اكتشف عقود الصيانة السنوية والخدمات المُدارة لتقنية أعمالك.'},
{title:'الاستضافة',tag:'02 / السحابة',desc:'مكان لأحمال العمل والأدوات والبيانات.',chips:['VPS','Microsoft 365 / Google Workspace','نسخ احتياطي وتعافٍ من الكوارث'],need:'اكتشف VPS وMicrosoft 365 / Google Workspace والنسخ الاحتياطي السحابي والتعافي من الكوارث.'},
{title:'البنية التحتية',tag:'03 / الاتصال',desc:'الأنظمة المتصلة خلف بيئة العمل.',chips:['شبكات','أمن سيبراني','أجهزة','CCTV','VoIP'],need:'اكتشف الشبكات والأمن السيبراني والأجهزة وCCTV وVoIP.'},
{title:'التطوير والاستشارات',tag:'04 / البناء',desc:'من السؤال التالي إلى تطبيق مخصص.',chips:['استشارات','ERP','تطبيقات مخصصة'],need:'اكتشف الاستشارات وأنظمة ERP والتطبيقات المخصصة لمشروعك القادم.'}
]};
function renderSlide(){
var s=data[lang()][currentSlide];
document.getElementById('vxSlideTag').textContent=s.tag;
document.getElementById('vxSlideTitle').textContent=s.title;
document.getElementById('vxSlideDesc').textContent=s.desc;
var chips=document.getElementById('vxSlideChips');chips.replaceChildren();
s.chips.forEach(function(t){var el=document.createElement('span');el.textContent=t;chips.appendChild(el);});
document.querySelectorAll('[data-slide]').forEach(function(el){var yes=+el.dataset.slide===currentSlide;el.classList.toggle('vx-active',yes);el.setAttribute('aria-pressed',yes);});
root.setAttribute('data-service',currentSlide);
}
function renderNeed(){var n=data[lang()][currentNeed];document.getElementById('vxFindTitle').textContent=n.title;document.getElementById('vxFindDesc').textContent=n.need;document.querySelectorAll('[data-need]').forEach(function(b){var yes=+b.dataset.need===currentNeed;b.classList.toggle('vx-selected',yes);b.setAttribute('aria-pressed',yes);});}
function setMotion(){root.classList.toggle('vx-motion-paused',paused);['vxMotion','vxMotionFooter'].forEach(function(id){var b=document.getElementById(id);b.setAttribute('aria-pressed',paused);b.textContent=lang()==='ar'?(paused?'تشغيل الحركة':'إيقاف الحركة'):(paused?'Resume motion':'Pause motion');});}
['vxMotion','vxMotionFooter'].forEach(function(id){document.getElementById(id).addEventListener('click',function(){paused=!paused;setMotion();});});
function go(step){currentSlide=(currentSlide+step+data.en.length)%data.en.length;renderSlide();}
document.getElementById('vxNext').addEventListener('click',function(){go(1);});
document.getElementById('vxPrev').addEventListener('click',function(){go(-1);});
document.querySelectorAll('[data-slide]').forEach(function(b){b.addEventListener('click',function(){currentSlide=+b.dataset.slide;renderSlide();});});
var spotlight=document.querySelector('.vx-spotlight');
spotlight.addEventListener('keydown',function(e){if(e.key==='ArrowRight'){e.preventDefault();go(1);}if(e.key==='ArrowLeft'){e.preventDefault();go(-1);}});
var startX=null,startY=null;
spotlight.addEventListener('touchstart',function(e){startX=e.changedTouches[0].clientX;startY=e.changedTouches[0].clientY;},{passive:true});
spotlight.addEventListener('touchend',function(e){if(startX===null)return;var dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(Math.abs(dx)>45 && Math.abs(dx)>Math.abs(dy)*1.3)go(dx<0?1:-1);startX=null;},{passive:true});
document.querySelectorAll('[data-need]').forEach(function(b){b.addEventListener('click',function(){currentNeed=+b.dataset.need;renderNeed();});});
// Slider is deliberately manual. Decorative motion is independent of content.
new MutationObserver(function(ms){if(ms.some(function(m){return m.attributeName==='lang';})){renderSlide();renderNeed();setMotion();}}).observe(root,{attributes:true,attributeFilter:['lang']});
renderSlide();renderNeed();setMotion();
})();

/* Pure CSS 3D scene: no external runtime or continuous JavaScript loop. */
(function(){
  var objects=[['73%','25%',112,44,.35],['91%','66%',66,36,.4],['43%','79%',52,32,.26],['11%','19%',38,40,.2],['57%','8%',28,30,.3]];
  document.querySelectorAll('.vx-hero,.vx-store-hero').forEach(function(hero){
    var scene=document.createElement('div');scene.className='vx-space';scene.setAttribute('aria-hidden','true');
    var grid=document.createElement('div');grid.className='vx-space-grid';scene.appendChild(grid);
    objects.forEach(function(o){var cube=document.createElement('div');cube.className='vx-depth-object';cube.style.cssText='--x:'+o[0]+';--y:'+o[1]+';--size:'+o[2]+'px;--half:'+(o[2]/2)+'px;--speed:'+o[3]+'s;--alpha:'+o[4];for(var i=0;i<6;i++){var face=document.createElement('span');face.className='vx-depth-face';cube.appendChild(face);}scene.appendChild(cube);});
    for(var j=0;j<15;j++){var star=document.createElement('span');star.className='vx-space-star';star.style.cssText='--x:'+((j*37+9)%97)+'%;--y:'+((j*23+13)%91)+'%;--delay:-'+(j%8)+'s';scene.appendChild(star);}
    hero.prepend(scene);
  });
})();
