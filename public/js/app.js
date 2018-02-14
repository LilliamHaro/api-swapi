window.addEventListener('load', function() {
    getNews();
  });

  function getNews() {
    // instanciando el objeto XMLHttpRequest para el funcionamiento de ajax
    const articleRequest = new XMLHttpRequest();

      articleRequest.open('GET', `https://swapi.co/api/people/`);
      // funciones
      articleRequest.onload = addNews;
      articleRequest.onerror = handleError;
      articleRequest.send();

  }
  //funcion para manejar los errores
  function handleError() {
    console.log('se ha presentado un error');
  }

  function addNews() {
    const data = JSON.parse(this.responseText);
    const response = data.results;
    response.forEach(function(character) {
      console.log(character);;
    });
    };
