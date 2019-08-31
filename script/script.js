// Merupakan value dari nomor dan text
var telephone = document.getElementById('phone-number');
var text = document.getElementById('text-message');

// Merupakan variable untuk menampung tombol clear, generate dan send
var generateBtn = document.getElementById('generate-link');
var sendBtn = document.getElementById('send');
var clearBtn = document.getElementById('clear-field');

// Merupakan varibale penampung untuk display nomor tertuju
var reseiverNumber = document.getElementById('receiver-number');

generateBtn.addEventListener('click', function(){
  // Mengenerate API dari WA
  if(telephone.value && text.value){
    sendBtn.setAttribute('href',`https://wa.me/${telephone.value}?text=${text.value}`);
    sendBtn.removeAttribute('style','display: none');
  }
  // Mengenerate nomor tertuju
  reseiverNumber.innerHTML = 'No Telephone = ' + telephone.value;
  console.log(sendBtn);
})

// Ketika tombol clear di click, maka akan otomatis menghapus field dari
// nomor telephone, text, dan receive number. Sekaligus juga menghapus atribut
// href dan tombol send
clearBtn.addEventListener('click', function(){
  telephone.value = '';
  text.value = '';
  reseiverNumber.innerHTML = 'No Telephone = ';
  sendBtn.removeAttribute('href');
  sendBtn.setAttribute('style','display: none');
})

