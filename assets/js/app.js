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

window.addEventListener('load',()=>{
  threeImagesRightFun()
})
