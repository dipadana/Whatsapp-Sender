// Merupakan value dari nomor dan text
var telephone = document.getElementById('phone-number');
var text = document.getElementById('text-message');

// Merupakan variable untuk menampung tombol clear, generate dan send
var generateBtn = document.getElementById('generate-link');
var clearBtn = document.getElementById('clear-field');

// Merupakan varibale penampung untuk display nomor tertuju
var reseiverNumber = document.getElementById('receiver-number');

generateBtn.addEventListener('click', function(){
  // Mengenerate API dari WA dan langsung kirim
  if(telephone.value && text.value){
    window.open(`https://wa.me/62${telephone.value}?text=${encodeURI(text.value)}`, "_blank");
  }
  // Mengenerate nomor tertuju
  reseiverNumber.innerHTML = '62' + telephone.value;
  console.log(generateBtn);

  var tempTelephone = telephone.value;
  var tempText = text.value;
  console.log(tempTelephone, tempText);
})

// Ketika ada perubahan pada HTMLInputElementObject,
// maka akan otomatis merubah nomor tujuan
telephone.addEventListener('input', function(){
  reseiverNumber.innerHTML = '62' + telephone.value;
})

// Ketika tombol clear di click, maka akan otomatis menghapus field dari
// nomor telephone, text, dan receive number. 
clearBtn.addEventListener('click', function(){
  telephone.value = '';
  text.value = '';
  reseiverNumber.innerHTML = '';
})

// Untuk mengubah ukuran satuan root 'vh'
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);