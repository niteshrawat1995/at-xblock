window.onload = onPageLoad();
function onPageLoad() {
  d=document;
  jf=d.createElement('script');
  jf.src='https://cdn.jsdelivr.net/gh/suprgyabhushan/js-files@master/vebar1.js';
  jf.type='text/javascript';
  jf.id='ToolBar';
  d.getElementsByTagName('head')[0].appendChild(jf);
  bc = d.createElement('div');
  bc.style.width = '100px';
  bc.style.height = '100px';
  bc.style.background = 'red';
  bc.style.color = 'white';
  bc.innerHTML = 'Hello';
  d.getElementByTagName('body')[0].appendChild(bc);
}
