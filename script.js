document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const text = `Hi Shashi & Co, I want tax service.%0AName: ${data.get('name')}%0APhone: ${data.get('phone')}%0AEmail: ${data.get('email') || '-'}%0AService: ${data.get('service')}%0AMessage: ${data.get('message') || '-'}`;
  window.open(`https://wa.me/919945574143?text=${text}`, '_blank');
});
