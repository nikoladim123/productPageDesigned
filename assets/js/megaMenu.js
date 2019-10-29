var shopMegaMenuContainer = document.getElementsByClassName('shopMegaMenuContainer');
var megaMenu = document.getElementsByClassName('megaMenu');
var fixedNav = document.getElementsByClassName('fixedNav');

shopMegaMenuContainer[0].addEventListener('mouseenter',()=>{
  megaMenu[0].style.maxHeight = '70vw';
  fixedNav[0].style.background = 'black';
  fixedNav[0].style.boxShadow = '10px 10px 0px 200vw rgba(0,0,0,0.9)';
});

shopMegaMenuContainer[0].addEventListener('mouseleave',()=>{
  megaMenu[0].style.maxHeight = '0vw';
  // fixedNav[0].style.background = 'transparent';
  navColor();
  fixedNav[0].style.boxShadow = '10px 10px 0px 200vw rgba(0,0,0,0.0)';
});

// hide nav
function navhideShow() {
  if(this.oldScroll < this.scrollY){
    fixedNav[0].style.top = '-4.4vw';
    console.log(6);
  }else{
    fixedNav[0].style.top = '0vw';
    console.log(123);
  }
  this.oldScroll = this.scrollY;
}

// nav color fun
function navColor() {
  if(window.scrollY > 5){
    fixedNav[0].style.background = 'black';
  }else{
    fixedNav[0].style.background = 'transparent';
  }
}



window.addEventListener('scroll',()=>{
  navColor();
  navhideShow();
});
