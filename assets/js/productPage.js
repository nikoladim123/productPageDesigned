var nav = document.getElementsByClassName('nav');
var fixedNav = document.getElementsByClassName('fixedNav');

function fixedNavFun() {
  if(nav[0].getBoundingClientRect().bottom < 0){
    fixedNav[0].style.top = '0';
    fixedNav[0].style.position = 'fixed';
    // fixedNav[0].style.height = '3.5vw';
  }else{
    fixedNav[0].style.top = '2vw';
    fixedNav[0].style.position = 'absolute';
    // fixedNav[0].style.height = '5vw';
  }
}

// cosmetic mm
var navItem = document.getElementsByClassName('navItem');
var cosmeticsMM = document.getElementsByClassName('cosmeticsMM');

navItem[0].addEventListener('mouseenter',()=>{
  cosmeticsMM[0].style.maxHeight = '70vh';
});

navItem[0].addEventListener('mouseleave',()=>{
  cosmeticsMM[0].style.maxHeight = '0vh';
});

// eyesMM
var eyesMM = document.getElementsByClassName('eyesMM');

navItem[1].addEventListener('mouseenter',()=>{
  eyesMM[0].style.maxHeight = '70vh';
});

navItem[1].addEventListener('mouseleave',()=>{
  eyesMM[0].style.maxHeight = '0vh';
});


// hair mm
var hairMM = document.getElementsByClassName('hairMM');
var hairMMImage = document.getElementsByClassName('hairMMImage');
var hairMMitem = document.getElementsByClassName('hairMMitem');

navItem[2].addEventListener('mouseenter',()=>{
  hairMM[0].style.maxHeight = '70vh';
});

navItem[2].addEventListener('mouseleave',()=>{
  hairMM[0].style.maxHeight = '0vh';
});


hairMMitem[0].addEventListener('mouseover',()=>{
  hairMMImage[0].src = 'assets/images/productPage/images/cosmetics/secTwo/3.png';
});

hairMMitem[1].addEventListener('mouseover',()=>{
  hairMMImage[0].src = 'assets/images/productPage/images/cosmetics/secTwo/1.png';
});

hairMMitem[2].addEventListener('mouseover',()=>{
  hairMMImage[0].src = 'assets/images/productPage/images/cosmetics/secTwo/2.png';
});

hairMMitem[3].addEventListener('mouseover',()=>{
  hairMMImage[0].src = 'assets/images/productPage/images/cosmetics/secTwo/3.png';
});

hairMMitem[4].addEventListener('mouseover',()=>{
  hairMMImage[0].src = 'assets/images/productPage/images/cosmetics/secTwo/1.png';
});

hairMMitem[5].addEventListener('mouseover',()=>{
  hairMMImage[0].src = 'assets/images/productPage/images/cosmetics/secTwo/2.png';
});



window.addEventListener('scroll',()=>{
  fixedNavFun();
});
