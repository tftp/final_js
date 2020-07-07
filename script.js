
const url = 'https://api.github.com/repos/facebook/react/issues'
//const url = 'https://api.github.com/repos/facebook/react/issues?assignee=*'

async function getIssure (url){
    const result = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.machine-man-preview'
      }
    });

    if(result.ok){
      return await result.json();
    }
    throw new Error('Something wrong!')
};

const someFunct = async (url) => {
  try {
    const result = await getIssure(url)
    console.log(result)
  } catch (e){
    console.error(e);
  }
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

//someFunct(url);
function createRepoInput(){
    const repo = document.createElement('input');
    repo.id = 'repo';
    repo.value = '';
    issureSearch.appendChild(repo);
    repoInput = repo;
};

function changeSize(obj, size){
  if(size < 4) size = 4;
  obj.size = size;
};

function processingOwnerInput(value){
  if(!repoInput) createRepoInput();
  changeSize(ownerInput, value.length);
  console.log(value)
}

let debounceProcessOwnerInput = deb(processingOwnerInput, 500);


const issureSearch = document.querySelector('.issue-search');
const ownerInput = document.querySelector('#owner');
let repoInput; //= document.querySelector('#repo');
ownerInput.addEventListener('input', (event) => { debounceProcessOwnerInput(event.target.value) })

console.log(ownerInput)
