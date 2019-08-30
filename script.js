// Merupakan value dari nomor dan text
var telephone = document.getElementById('phone-number');
var text = document.getElementById('text-message');

// Merupakan variable untuk menampung tombol generate dan send
var generateBtn = document.getElementById('generate-link');
var sendBtn = document.getElementById('send');

// Merupakan varibale penampung untuk display nomor tertuju
var reseiverNumber = document.getElementById('receiver-number');

generateBtn.addEventListener('click', function(){
  // Mengenerate API dari WA
  document.getElementById('send').setAttribute('href',`https://wa.me/${telephone.value}?text=${text.value}`);

  // Mengenerate nomor tertuju
  reseiverNumber.innerHTML = 'No Telephone = ' + telephone.value;
  console.log(sendBtn);
})