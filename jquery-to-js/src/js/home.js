// console.log('hola mundo!');
// const noCambia = "Leonidas";

// let cambia = "@LeonidasEsteban"

// function cambiarNombre(nuevoNombre) {
//   cambia = nuevoNombre
// }

// const getUserAll = new Promise(function(todoBien, todoMal) {
//   // llamar a un api
//   setTimeout(function() {
//     // luego de 3 segundos
//     todoBien('se acabó el tiempo');
//   }, 5000)
// })

// const getUser = new Promise(function(todoBien, todoMal) {
//   // llamar a un api
//   setTimeout(function() {
//     // luego de 3 segundos
//     todoBien('se acabó el tiempo 3');
//   }, 3000)
// })

// // getUser
// //   .then(function() {
// //     console.log('todo está bien en la vida')
// //   })
// //   .catch(function(message) {
// //     console.log(message)
// //   })

// Promise.race([
//   getUser,
//   getUserAll,
// ])
// .then(function(message) {
//   console.log(message);
// })
// .catch(function(message) {
//   console.log(message)
// })



// $.ajax('https://randomuser.me/api/sdfdsfdsfs', {
//   method: 'GET',
//   success: function(data) {
//     console.log(data)
//   },
//   error: function(error) {
//     console.log(error)
//   }
// })

// fetch('https://randomuser.me/api/dsfdsfsd')
//   .then(function (response) {
//     // console.log(response)
//     return response.json()
//   })
//   .then(function (user) {
//     console.log('user', user.results[0].name.first)
//   })
//   .catch(function() {
//     console.log('algo falló')
//   })





(async function load() {
  const BASE_API = "https://yts.mx/api/v2/"
  const $form = document.getElementById('form')
  const $home = document.getElementById('home')
  const $featuringContainer = document.getElementById('featuring')


  function setAttributes($element, attributes) {
    for(const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute])
    }
  }

  function featuringTemplate(peli) {
    return(
      `
      <div class="featuring">
      <div class="featuring-image">
        <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
      </div>
      <div class="featuring-content">
        <p class="featuring-title">Pelicula encontrada</p>
        <p class="featuring-album">${peli.title}</p>
      </div>
    </div>
    `
    )
  }
  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // 'search-active'
    $home.classList.add('search-active')
    const $loader = document.createElement('img')
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50
    })
    $featuringContainer.append($loader);
    const data = new FormData($form);
    try {
      const peli = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)
      console.log('Peliculas ', peli)
      const HTMLStringtemplate = featuringTemplate(peli.data.movies[0])
      $featuringContainer.innerHTML = HTMLStringtemplate;
    } catch(error) {
      alert(error.message);
      $home.classList.remove('search-active')
      $loader.remove()
    }
  });
  async function getData (ruta) {
    const response = await fetch(ruta);
    const data = await response.json()
    if (data.data.movie_count > 0) {
      return data;
    }
    throw new Error('No se encontro el resultado')
  }
  function videoItemTemplate(movie, category) {
    return (
      `
      <div class="primaryPlaylistItem" data-id="${movie.id}" data-category="${category}">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>
      `
    )
  }

  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }

  function addEvent($element) {
    $element.addEventListener('click', () => {
      showModal($element)
    });
  } 

  function generarListado($container, listado, category) {
    const animation = $container.querySelector('img')
    animation.remove()
    listado.forEach((item) => {
      const htmlString = videoItemTemplate(item, category);
      // const $html = document.implementation.createHTMLDocument()
      const movieElement = createTemplate(htmlString);
      $container.append(movieElement)
      const image = movieElement.querySelector('img')
      image.addEventListener('load', (event) => {
        event.target.classList.add('fadeIn')
      })
      addEvent(movieElement)
      // $container.innerHTML += htmlString;
    })
  }
  
  const $modal = document.getElementById('modal');
  const $actionContainer = document.querySelector('#action');
  const $dramaContainer = document.getElementById('drama');
  const $animationContainer = document.getElementById('animation');

  const { data: { movies: actionList } } = await getData('https://yts.mx/api/v2/list_movies.json?genre=action');
  generarListado($actionContainer, actionList, "action");
  localStorage.setItem('action', JSON.stringify(actionList));
  const { data: { movies: dramaList } }  = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama');
  generarListado($dramaContainer, dramaList, "drama");
  const { data: { movies: animationList } }  = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation');
  generarListado($animationContainer, animationList, "animation");

  

  

  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')

  const $modalTitle = $modal.querySelector('h1');
  const $modalDescription = $modal.querySelector('p');


  function findMovie(id, category) {
    let pelicula
    if (category === 'action') {
      pelicula = actionList.find((x) => x.id === Number(id))
    } else if(category == 'drama') {
      pelicula = dramaList.find((x) => x.id === Number(id))
    } else if(category === 'animation') {
      pelicula = animationList.find((x) => x.id === Number(id))
    }
    return pelicula
  }
  function showModal($element) {
    $overlay.classList.add('active')
    $modal.style.animation = "modalIn .8s forwards";
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    const data = findMovie(id, category);
  }
  function closeModal() {
    $overlay.classList.remove('active')
    $modal.style.animation = "modalOut .8s forwards";
  }

  $hideModal.addEventListener('click', closeModal);

  
})()


