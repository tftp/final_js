const textInfo = document.querySelector('#info');
const tableOfIssues = document.querySelector('.table-of-issues');
const template = document.querySelector('#template');

async function getIssure (url){
    const result = await fetch(url, {
      headers: {
        'Accept': 'application/vnd.github.machine-man-preview'
      }
    });

    if(result.ok){
      return await result.json();
    }
//    console.log(result);
    throw new Error(`Something wrong! Error ${result.status}: ${result.statusText}`);
}

const tryGetIssues = async (url) => {
  try {
    textInfo.innerText = 'Loading...';
    const result = await getIssure(url);
    textInfo.innerText = '';
    outputIssues(result);
  } catch (e){
    textInfo.innerText = `You have error: ${e}`;
  }
}

function outputIssues(issues){
    clearOldIssures();
    if(!issues.length)
      textInfo.innerText = 'There\'s nothing here';
    issues.forEach(renderIssues);
}

function renderIssues(issue){
  const copy = template.content.cloneNode(true);
  copy.querySelector(".title").innerText = issue.title;
  copy.querySelector(".number").innerText = `Number issue #${issue.number}. Data ${issue.created_at}`;
  copy.querySelector(".body").innerText = `${issue.body.substr(0,100)}...`;
  copy.querySelector(".comments").innerText = issue.comments;
  tableOfIssues.append(copy);
}

function clearOldIssures(){
  Array.from(tableOfIssues.children).forEach(issue => issue.remove());
}
