

//

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
      let i = 0;
      for (i; i < data.length; i++) {
        if (i === 0) {
          let main_div = document.createElement('div');
          main_div.setAttribute("class", "carousel-item active");

          let sub_div = document.createElement('div');
          sub_div.setAttribute("class", "carousel-caption d-none d-md-block")
              
          let img = document.createElement('img');
          img.setAttribute('class', "d-block w-100");
          img.setAttribute('src', `./${i}.jpg`);

          let h3 = document.createElement('h3');
          let p = document.createElement('p');
          h3.textContent = `${data[i].anime}`;
          p.textContent = `${data[i].quote}`;
              
          sub_div.appendChild(h3);
          sub_div.appendChild(p);
          main_div.appendChild(img);
          main_div.appendChild(sub_div);

          carousel2.appendChild(main_div);
        }
        else {
          let main_div = document.createElement('div');
          main_div.setAttribute("class", "carousel-item ");

          let sub_div = document.createElement('div');
          sub_div.setAttribute("class", "carousel-caption d-none d-md-block")
              
          let img = document.createElement('img');
          img.setAttribute('class', "d-block w-100");
          img.setAttribute('src', `./${i}.jpg`);

          let h3 = document.createElement('h3');
          let p = document.createElement('p');
          h3.textContent = `${data[i].anime}`;
          p.textContent = `${data[i].quote}`;
              
          sub_div.appendChild(h3);
          sub_div.appendChild(p);
          main_div.appendChild(img);
          main_div.appendChild(sub_div);

          carousel2.appendChild(main_div);
          
        }
        
      }
      
      //After rendering all data to the user browser , scroll down to the carousel
      carousel.scrollIntoView();
    })
    .catch (error => {
        alert(`Anime doesn't exist ${error}`);
  })
  
  
 

  
  
      
    

    
  
}


