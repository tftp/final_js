
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

//someFunct(url);
