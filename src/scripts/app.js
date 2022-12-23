let button = document.getElementById('searchBtn');
let input = document.getElementById('input');
let carousel = document.getElementById("carouselExampleCaptions");
let carousel2=document.querySelector(".carousel-inner");

button.addEventListener('click', fetchAnimeAPI)

async function fetchAnimeAPI(event) {
  event.preventDefault();
  let value = input.value;
   
  axios.get(`https://animechan.vercel.app/api/quotes/anime?title=${value}`)
    .then( response => {
      console.log(response); 
      let data = response.data;
      for (let Anime of data) {
        let main_div = document.createElement('div');
        main_div.setAttribute("class", "carousel-item active");
        let sub_div=document.createElement('div');
        sub_div.setAttribute("class","carousel-caption d-none d-md-block")
        // let img = document.createElement('img');
        let h3=document.createElement('h3');
        let p=document.createElement('p');
        
        
        h3.textContent = `${ Anime.anime }`;
        p.textContent = `${Anime.quote}`;
        
        sub_div.appendChild(h3);
        sub_div.appendChild(p);
        main_div.appendChild(sub_div);
        
        carousel2.appendChild(main_div);
      }
      console.log(carousel);
      //After rendering all data to the user browser , scroll down to the carousel
      carousel.scrollIntoView();
    })
    .catch (error => {
        alert(`Anime doesn't exist ${error}`);
  })
  
  
 

  
  
      
    

    
  
}


