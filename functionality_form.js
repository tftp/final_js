const ownerInput = document.querySelector('#owner');
const repoInput = document.querySelector('#repo');
const searchButton = document.querySelector('#search');

ownerInput.addEventListener('input', (event) => { debounceProcessInput(event.target) });
repoInput.addEventListener('input', (event) => { debounceProcessInput(event.target) });
searchButton.addEventListener('click', () => tryGetIssues(getUrl()));

function getUrl(){
  const owner = ownerInput.value;
  const repo = repoInput.value;
  return `https://api.github.com/repos/${owner}/${repo}/issues?assignee=*`
}

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
  if(size > 15) size = 15;
  obj.size = size;
}

function processingInput(obj){
  visibleElement(obj.nextElementSibling);
  changeSize(obj, obj.value.length);
}

function debounce(func, time){
  return function(value){
    let lastTime = this.currentTime;
    this.currentTime = new Date().getTime();
    if(lastTime && (this.currentTime - lastTime) < time){
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer =  setTimeout(() => func(value), time);
  }
}

let debounceProcessInput = debounce(processingInput, 500);
