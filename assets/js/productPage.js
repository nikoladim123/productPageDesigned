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




window.addEventListener('scroll',()=>{
  fixedNavFun();
});
