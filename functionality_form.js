//const issureSearch = document.querySelector('.issue-search');
const ownerInput = document.querySelector('#owner');
const repoInput = document.querySelector('#repo');
const searchButton = document.querySelector('#search');

ownerInput.addEventListener('input', (event) => { debounceProcessInput(event.target) })
repoInput.addEventListener('input', (event) => { debounceProcessInput(event.target) })


function visibleElement(element){
  element.hidden = false;
}

function hiddenElement(element){
    element.hidden = true;
}

function changeSize(obj, size){
  if(size === 0) {
    hiddenElement(obj.nextElementSibling);
    if(obj === ownerInput) {
      hiddenElement(searchButton);
    }
  }
  if(size < 4) size = 4;
  obj.size = size;
}

function processingInput(obj){
  visibleElement(obj.nextElementSibling);
  changeSize(obj, obj.value.length);
  console.log(obj.value)
}

function deb(func, time){
  return function(value){
    let lastTime = this.currentTime;
    this.currentTime = new Date().getTime();
    if(lastTime && (this.currentTime - lastTime) < time){
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer =  setTimeout(() => func(value), time);
  }
}

let debounceProcessInput = deb(processingInput, 500);
