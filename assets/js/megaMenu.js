var shopMegaMenuContainer = document.getElementsByClassName('shopMegaMenuContainer');
var megaMenu = document.getElementsByClassName('megaMenu');
var fixedNav = document.getElementsByClassName('fixedNav');
var mmnavHoverButtons = document.getElementsByClassName('mmnavHoverButtons');
var mmBottomMovingContainer = document.getElementsByClassName('mmBottomMovingContainer');


shopMegaMenuContainer[0].addEventListener('mouseenter',()=>{
  megaMenu[0].style.maxHeight = '70vw';
  fixedNav[0].style.background = 'black';
  fixedNav[0].style.boxShadow = '10px 10px 0px 200vw rgba(0,0,0,0.9)';
});

shopMegaMenuContainer[0].addEventListener('mouseleave',()=>{
  megaMenu[0].style.maxHeight = '0vw';
  fixedNav[0].style.background = 'transparent';
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
    fixedNav[0].style.background = 'rgb(7,7,0)';
  }else{
    fixedNav[0].style.background = 'transparent';
  }
}

// mmnavHoverButtons hover change bottom
mmnavHoverButtons[0].addEventListener('mouseenter',()=>{
  mmBottomMovingContainer[0].style.top = '0vw';
});
mmnavHoverButtons[1].addEventListener('mouseenter',()=>{
  mmBottomMovingContainer[0].style.top = '-14vw';
});
mmnavHoverButtons[2].addEventListener('mouseenter',()=>{
  mmBottomMovingContainer[0].style.top = '-28vw';
});



window.addEventListener('scroll',()=>{
  navColor();
  navhideShow();
});
