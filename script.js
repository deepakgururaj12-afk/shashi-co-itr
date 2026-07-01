const phone = '919945574143';
const baseMessage = 'Hi Shashi & Co, I want to file my Income Tax Return. Please guide me.';
const wa = (msg=baseMessage) => `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
['waHero','waPrice','waContact','waFloat'].forEach(id=>{const el=document.getElementById(id); if(el) el.href=wa();});
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('menuBtn').addEventListener('click',()=>{const nav=document.getElementById('nav'); nav.style.display = nav.style.display==='flex' ? '' : 'flex';});
document.getElementById('leadForm').addEventListener('submit', e=>{
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const msg = `Hi Shashi & Co, I want service: ${data.service}\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || '-'}\nDetails: ${data.message || '-'}`;
  window.open(wa(msg),'_blank');
});
