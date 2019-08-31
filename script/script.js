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
    sendBtn.setAttribute('href',`https://wa.me/62${telephone.value}?text=${encodeURI(text.value)}`);
    sendBtn.removeAttribute('style','display: none');
  }
  // Mengenerate nomor tertuju
  reseiverNumber.innerHTML = '62' + telephone.value;
  console.log(sendBtn);

  var tempTelephone = telephone.value;
  var tempText = text.value;
  console.log(tempTelephone, tempText);
})

// Ketika ada perubahan pada HTMLInputElementObject,
// maka akan otomatis menghaus tombol send
telephone.addEventListener('input', function(){
  sendBtn.removeAttribute('href');
  sendBtn.setAttribute('style','display: none');
  reseiverNumber.innerHTML = '';
})
text.addEventListener('input', function(){
  sendBtn.removeAttribute('href');
  sendBtn.setAttribute('style','display: none');
})

// Ketika tombol clear di click, maka akan otomatis menghapus field dari
// nomor telephone, text, dan receive number. Sekaligus juga menghapus atribut
// href dan tombol send
clearBtn.addEventListener('click', function(){
  telephone.value = '';
  text.value = '';
  reseiverNumber.innerHTML = '';
  sendBtn.removeAttribute('href');
  sendBtn.setAttribute('style','display: none');
})

// Untuk menga
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);