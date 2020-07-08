

const issureSearch = document.querySelector('.issue-search');
const ownerInput = document.querySelector('#owner');
const repoInput = document.querySelector('#repo');
const searchButton = document.querySelector('#search');

ownerInput.addEventListener('input', (event) => { debounceProcessInput(event.target) })
repoInput.addEventListener('input', (event) => { debounceProcessInput(event.target) })
// ownerInput.addEventListener('input', (event) => { debounceProcessOwnerInput(event.target.value) })
// repoInput.addEventListener('input', (event) => { debounceProcessRepoInput(event.target.value) })
