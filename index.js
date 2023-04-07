window.onload=inicio ;

function inicio(){
  document.getElementById('boton').onclick= action;
  document.getElementById('boton1').onclick= action1;
  document.getElementById('boton2').onclick= action2;
  document.getElementById('clearAll').onclick=action3
  
  
}

function action(){
  document.querySelectorAll('.imajen')[0].insertAdjacentHTML('beforeend',`<img src="/imajen/book_coffee.jpg"  alt="coffe book">`)
}

function action1(){
  document.querySelectorAll('.imajen')[1].insertAdjacentHTML('beforeend',`<img src="/imajen/read_a_book.jpg">`)
}

function action2(){
  document.querySelectorAll('.imajen')[2].insertAdjacentHTML('beforeend',`<img src="/imajen/imajen_tassa_coffee_logo.jpg"  alt=" book">`)
}

function action3(){
  document.querySelectorAll('.imajen')[0].innerHTML="";
  document.querySelectorAll('.imajen')[1].innerHTML="";
  document.querySelectorAll('.imajen')[2].innerHTML="";
}



