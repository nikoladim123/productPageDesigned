// carousel three
var carouselThree = document.getElementById('carouselThree');
var carThreeLeftArrow = document.getElementById('carThreeLeftArrow');
var carThreeRightArrow = document.getElementById('carThreeRightArrow');
carThreeLeftArrow.addEventListener('click',function(){
  leftArrowThree();
  console.log('do i work?');
});
carThreeRightArrow.addEventListener('click',function(){
  rightArrowThree();
  console.log('do i work?');
});
var moduloThree = 1002;
function leftArrowThree(){
  moduloThree--;
  carMoveThree();
}
function rightArrowThree(){
  moduloThree++;
  carMoveThree();
}
function carMoveThree(){
  if(moduloThree%2 === 0){
    carouselThree.style.left = '0%'
  }
  if(moduloThree%2 === 1){
    carouselThree.style.left = '-50%'
  }
}

// fold
var threeImagesRight = document.getElementsByClassName('threeImagesRight');
var latestProducts = document.getElementsByClassName('latestProducts');
var body = document.getElementsByTagName('body');

function threeImagesRightFun() {
  threeImagesRight[0].style.right = '-3.27vw';
  latestProducts[0].style.top = '19vw';
  body[0].style.background = 'white';
}

// freeDeliveryAndReturnContainer header
var freeDeliveryAndReturnContainer = document.getElementsByClassName('freeDeliveryAndReturnContainer');
var thingsOnSale = document.getElementsByClassName('thingsOnSale');
var onClearance = document.getElementsByClassName('onClearance');
var newArivals = document.getElementsByClassName('newArivals');
var popThisWeek = document.getElementsByClassName('popThisWeek');
var newsEvents = document.getElementsByClassName('newsEvents');


// universal fun
function universalFun(eTarget) {
  if(eTarget[0].getClientRects()[0].top < window.innerHeight / 1.5){
    eTarget[0].style.top = '0';
    eTarget[0].style.opacity = '1';
  }else{
    eTarget[0].style.top = '3vw';
    eTarget[0].style.opacity = '0';
  }
}


// secThree reveal anim
var revealAnimContainer = document.getElementsByClassName('revealAnimContainer');
var rev = document.getElementsByClassName('rev');

function revealFireFun() {
  if(revealAnimContainer[0].getClientRects()[0].top < window.innerHeight / 3){
    rev[0].style.width = '0%';
    rev[1].style.width = '0%';
    rev[2].style.width = '0%';
  }else{
    rev[0].style.width = '100%';
    rev[1].style.width = '66.6%';
    rev[2].style.width = '33.3%';
  }
}



// window listeners
window.addEventListener('load',()=>{
  threeImagesRightFun();
});

window.addEventListener('scroll',()=>{
  // freeDeliveryAndReturnContainerFun();
  universalFun(freeDeliveryAndReturnContainer);
  universalFun(thingsOnSale);
  universalFun(onClearance);
  universalFun(newArivals);
  universalFun(popThisWeek);
  universalFun(newsEvents);
  revealFireFun();
});
