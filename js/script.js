const flagBr = document.querySelector('#br');
const flagUsa = document.querySelector('#usa');

let currentPage = window.location.pathname;

if(document.URL.includes("index_br.html")){
  flagBr.classList.add('activeClass');
} else {
  flagUsa.classList.add('activeClass');
}