(function(){
  var cards=document.querySelectorAll(".vx-proj,.vx-show-card");
  if(!cards.length) return;
  document.documentElement.classList.add("vx-sc-on");
  cards.forEach(function(c){
    c.classList.add("vx-sc");
    c.querySelectorAll(".vx-iso [fill-opacity],.vx-iso [opacity]").forEach(function(e){e.classList.add("vx-pulse");});
    c.querySelectorAll(".vx-proj-cols li").forEach(function(li,i){li.style.setProperty("--d",(i%4)*90+"ms");});
  });
  var all=function(){cards.forEach(function(c){c.classList.add("vx-sc-in");});};
  if(!("IntersectionObserver" in window)){all();return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    e.target.classList.toggle("vx-sc-live",e.isIntersecting);
    if(e.isIntersecting){e.target.classList.add("vx-sc-in");}
  });},{threshold:0.2});
  cards.forEach(function(c){io.observe(c);});
  /* pointer tilt on visuals (fine pointers only) */
  if(window.matchMedia&&matchMedia("(hover:hover) and (prefers-reduced-motion:no-preference)").matches){
    document.querySelectorAll(".vx-proj-visual,.vx-show-visual-iso").forEach(function(v){
      var s=v.querySelector(".vx-iso"); if(!s) return;
      v.addEventListener("pointermove",function(e){var r=v.getBoundingClientRect();
        var x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
        s.style.transform="scale(1.06) translate("+(x*-14)+"px,"+(y*-10)+"px)";});
      v.addEventListener("pointerleave",function(){s.style.transform="";});
    });
  }
})();
