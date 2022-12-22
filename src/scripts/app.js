let button = document.getElementById('searchBtn');
let input = document.getElementById('input');

button.addEventListener('click', fetchAnimeAPI)

async function fetchAnimeAPI(e) {
  e.preventDefault();
  try {
    let value = input.value;
    let response = await axios.get(`https://animechan.vercel.app/api/quotes/anime?title=${value}`);
    response.then(console.log(response));
    
  } catch (error) {
    alert(`Anime doesn't exist ${error}`);
  }
 

  
  
      
    

    
  
}


