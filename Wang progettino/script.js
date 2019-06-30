<script>
let last = document.getElementById("last");
let next = document.getElementById("next");
let contatore = 1;

let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let pic3 = document.getElementById("pic3");
let pic4 = document.getElementById("pic4");
let pic5 = document.getElementById("pic5");
let pic_large = document.getElementById("pic_large");

function carica_pic1() {
  pic_large.setAttribute('src', "g1.jpg");
}

function carica_pic2() {
  pic_large.setAttribute('src', "g2.jpg");
}

function carica_pic3() {
  pic_large.setAttribute('src', "g3.jpg");
}

function carica_pic4() {
  pic_large.setAttribute('src', "g4.jpg");
}

function carica_pic5() {
  pic_large.setAttribute('src', "g5.jpg");
}

pic1.addEventListener('click', carica_pic1);
pic2.addEventListener('click', carica_pic2);
pic3.addEventListener('click', carica_pic3);
pic4.addEventListener('click', carica_pic4);
pic5.addEventListener('click', carica_pic5);

function carica_last() {
  contatore = contatore - 1;
  if (contatore < 1) {
    contatore = 5;
  }
  let immagine = "images/pic" + contatore + ".jpg";
  pic_large.setAttribute('src', immagine);
}

function carica_next() {
  contatore = contatore + 1;
  if (contatore > 5) {
    contatore = 1;
  }
  let immagine = "images/pic" + contatore + ".jpg";
  pic_large.setAttribute('src', immagine);
}
prev.addEventListener('click', carica_prev);
next.addEventListener('click', carica_next);

document.getElementById('collection')
.addEventListener("click",function(){
  alert.("LOVE ART");
})


</script>
