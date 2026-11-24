(function(){
  var stage=document.getElementById('stage'),
      seal=document.getElementById('seal'),
      toggle=document.getElementById('toggle'),
      hint=document.getElementById('hint');

  function setOpen(open){
    stage.classList.toggle('open',open);
    toggle.textContent=open?'بستن پاکت':'باز کردن پاکت';
    seal.setAttribute('aria-label',open?'پاکت باز است':'باز کردن پاکت');
    hint.textContent=open?'پیام شما آماده است':'برای باز کردن پاکت روی مهر بزنید';
    if(open) confetti();
  }
  function isOpen(){return stage.classList.contains('open')}

  seal.addEventListener('click',function(){setOpen(true)});
  toggle.addEventListener('click',function(){setOpen(!isOpen())});

  [['iTitle','cTitle'],['iTo','cTo'],['iMsg','cMsg'],['iFrom','cFrom']].forEach(function(p){
    var i=document.getElementById(p[0]),o=document.getElementById(p[1]);
    i.addEventListener('input',function(){o.textContent=i.value});
  });

  function confetti(){
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var colors=['#d4a63f','#c8102e','#8a1429','#f6e9da','#f3d9a4'];
    for(var n=0;n<36;n++){
      var b=document.createElement('i');
      b.className='bit';
      b.style.left=(Math.random()*100)+'vw';
      b.style.background=colors[n%colors.length];
      b.style.setProperty('--dx',(Math.random()*160-80)+'px');
      b.style.setProperty('--r',(Math.random()*720-360)+'deg');
      b.style.animationDuration=(2.2+Math.random()*1.8)+'s';
      b.style.animationDelay=(0.6+Math.random()*0.5)+'s';
      document.body.appendChild(b);
      setTimeout((function(el){return function(){el.remove()}})(b),5000);
    }
  }
})();
