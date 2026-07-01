document.getElementById('lead-form').addEventListener('submit', function(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(this).entries());
  const msg = `Hi Shashi & Co, I want help with ${data.service}. Name: ${data.name}, Phone: ${data.phone}, Email: ${data.email || 'NA'}. ${data.message || ''}`;
  localStorage.setItem('latestLead', JSON.stringify({...data, createdAt:new Date().toISOString()}));
  document.getElementById('form-msg').textContent = 'Details saved. WhatsApp will open now.';
  window.open('https://wa.me/919945574143?text=' + encodeURIComponent(msg), '_blank');
});
