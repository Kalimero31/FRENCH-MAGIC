const div = document.querySelector('div');
const btn1 = document.getElementById('1');
const btn2 = document.getElementById('2');
const transi = document.querySelector('.transition')
const cadre = document.querySelector('.cadreImage');
const acc = document.getElementById('imageAcc')

let nouvelleImage = document.getElementById('skin');



window.addEventListener('scroll',()=> {console.log('yes')})




const nav = document.querySelector('nav');

window.addEventListener('scroll',() => {
  if (window.scrollY>80) {
    nav.style.top = 0;
    if (window.scrollY>740) {
        nav.style.backgroundColor = "black";

  } else {
    nav.style.backgroundColor = "rgba(48, 47, 47, 0.651)";
  }
}
  else {
    nav.style.top = "-80px";
  }
  
})
let x = 1
let listePseudos = ["Toppen","Jimi","Kent38","Zhik","103SPX"]
const pseudo = document.getElementById('nomModele')
const collec = document.querySelector('.nomCollection')

btn1.addEventListener('click',()=>{
    x-=1;
    // cadre.innerHTML = 
    acc.innerHTML = '<img src="./images/a' +x+ '.png" id = "skin"></img>';
    pseudo.style.opacity="0%";
    pseudo.innerHTML= '<h3 >'+listePseudos[x]+'</h3>';
    
})

btn2.addEventListener('click',()=>{
    x+=1
    acc.innerHTML = '<img src="./images/a' +x+ '.png" id = "skin"></img>';
    
    pseudo.innerHTML= '<h3 >'+listePseudos[x]+'</h3>'
    
})
//----------------------------------------------------
// transitions
//----------------------------------------------------




window.addEventListener('scroll',()=> {
    if (window.scrollY > 480) {
        collec.style.left = '0px';
        collec.style.opacity = "100%";
        pseudo.style.left = '0px';
        pseudo.style.opacity = "100%";
        acc.style.left = '0px';
        acc.style.opacity = "100%";}
    else {
        collec.style.left = '60%'
        collec.style.opacity="0%";
        pseudo.style.left = '60%'
        pseudo.style.opacity="0%";
        acc.style.left = '8%';
        acc.style.opacity = "100%";}})
        