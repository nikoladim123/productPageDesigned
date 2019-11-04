var shopMegaMenuContainer = document.getElementsByClassName('shopMegaMenuContainer');
var megaMenu = document.getElementsByClassName('megaMenu');
var fixedNav = document.getElementsByClassName('fixedNav');
var mmnavHoverButtons = document.getElementsByClassName('mmnavHoverButtons');
var mmBottomMovingContainer = document.getElementsByClassName('mmBottomMovingContainer');
var mmLeftHeading = document.getElementsByClassName('mmLeftHeading');
var mmBanerImage = document.getElementsByClassName('mmBanerImage');
var shopA = document.getElementsByClassName('shopA');



shopMegaMenuContainer[0].addEventListener('mouseenter',()=>{
  megaMenu[0].style.maxHeight = '70vw';
  fixedNav[0].style.background = 'black';
  fixedNav[0].style.boxShadow = '10px 10px 0px 200vw rgba(0,0,0,0.9)';
  shopA[0].style.color = '#991705';
});

shopMegaMenuContainer[0].addEventListener('mouseleave',()=>{
  megaMenu[0].style.maxHeight = '0vw';
  fixedNav[0].style.background = 'transparent';
  navColor();
  fixedNav[0].style.boxShadow = '10px 10px 0px 200vw rgba(0,0,0,0.0)';
  shopA[0].style.color = '#ef9e43';
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
function changeMMHeading(e,img) {
  mmLeftHeading[0].style.opacity = '0';
  mmBanerImage[0].style.opacity = '0';
  setTimeout(function () {
    mmLeftHeading[0].innerText = e;
    mmLeftHeading[0].style.opacity = '1';
    mmBanerImage[0].src = img;
    setTimeout(function () {
      mmBanerImage[0].style.opacity = '1';
    }, 100);
  }, 300);
}
mmnavHoverButtons[0].addEventListener('mouseenter',()=>{
  mmBottomMovingContainer[0].style.top = '0vw';
  changeMMHeading('ACCESSORIES','assets/images/megaMenu/prod1.png');
});
mmnavHoverButtons[1].addEventListener('mouseenter',()=>{
  mmBottomMovingContainer[0].style.top = '-14vw';
  changeMMHeading('CLOTHING','assets/images/megaMenu/prod2.png');
});
mmnavHoverButtons[2].addEventListener('mouseenter',()=>{
  mmBottomMovingContainer[0].style.top = '-28vw';
  changeMMHeading('BEST SELLERS','assets/images/megaMenu/prod3.png');
});



window.addEventListener('scroll',()=>{
  navColor();
  navhideShow();
});
