function visibleElement(element){
  element.hidden = false;
}

function hiddenElement(element){
    element.hidden = true;
};

function changeSize(obj, size){
  if(size === 0) {
    hiddenElement(obj.nextElementSibling);
    if(obj === ownerInput) {
      hiddenElement(searchButton);
    };
  };
  if(size < 4) size = 4;
  obj.size = size;
};

// function processingOwnerInput(value){
//   visibleElement(repoInput);
//   changeSize(ownerInput, value.length);
//   console.log(value)
// }
//
// function processingRepoInput(value){
//   visibleElement(searchButton);
//   changeSize(repoInput, value.length);
//   console.log(value)
// }

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
    };
    this.lastCallTimer =  setTimeout(() => func(value), time);
  }
}

let debounceProcessInput = deb(processingInput, 500);
//let debounceProcessRepoInput = deb(processingRepoInput, 500);
