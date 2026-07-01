function sendWhatsApp(event){
  event.preventDefault();
  const name=document.getElementById('name').value;
  const mobile=document.getElementById('mobile').value;
  const email=document.getElementById('email').value;
  const income=document.getElementById('income').value;
  const message=document.getElementById('message').value;
  const text=`Hi Shashi & Co, I want to file my ITR.\n\nName: ${name}\nMobile: ${mobile}\nEmail: ${email}\nIncome Type: ${income}\nMessage: ${message}`;
  window.open(`https://wa.me/919945574143?text=${encodeURIComponent(text)}`,'_blank');
}
