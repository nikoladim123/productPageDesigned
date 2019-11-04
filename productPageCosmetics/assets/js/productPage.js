var filterContainer = document.getElementsByClassName('filterContainer');
var sectionThree = document.getElementsByClassName('sectionThree');

function filterFix() {
  if(sectionThree[0].getBoundingClientRect().y < (window.innerWidth / 100) * 3){
    filterContainer[0].style.top = '3vw';
    filterContainer[0].style.position = 'fixed';
  }else{
    filterContainer[0].style.top = '0vw';
    filterContainer[0].style.position = 'absolute';
  }
}

window.addEventListener('scroll',()=>{
  filterFix();
})
