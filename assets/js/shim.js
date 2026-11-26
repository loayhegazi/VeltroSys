/* Pages that show only part of the site: missing elements get harmless stand-ins so shared scripts do not stop. */
(function(){var g=document.getElementById.bind(document),c={};function stub(){var d=document.createElement('select');return d;}
document.getElementById=function(id){return g(id)||c[id]||(c[id]=stub());};})();
