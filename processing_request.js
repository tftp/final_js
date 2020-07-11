
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
}

const tryGetResult = async (url) => {
  try {
    textInfo.innerText = 'Loading...';
    const result = await getIssure(url);
    textInfo.innerText = '';
    outputResult(result);
  } catch (e){
    textInfo.innerText = `You have error: ${e}`;
  }
}

function outputResult(result){
  console.log(result);
}
