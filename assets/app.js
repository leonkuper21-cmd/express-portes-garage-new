
document.querySelectorAll('[data-call]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    try{ localStorage.setItem('lastCallClick', String(Date.now())); }catch(e){}
  });
});
