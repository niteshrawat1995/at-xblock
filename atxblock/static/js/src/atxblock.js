window.onload = onPageLoad();
function onPageLoad() {
  d=document;
  jf=d.createElement('script');
  jf.src='https://cdn.jsdelivr.net/gh/suprgyabhushan/js-files@master/vebar1.js';
  jf.type='text/javascript';
  jf.id='ToolBar';
  d.getElementsByTagName('head')[0].appendChild(jf);
  d.getElementById("bcsession").style.backgroundColor = window.localStorage.getItem("bColour");  
}
