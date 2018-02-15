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
    let a = 0
    response.forEach(function(character) {
      let nameCharacter = character.name;
      let heightCharacter = character.height;
      let birthCharacter = character.birth_year;
      let genderCharacter = character.gender;
      let hairCharacter = character.hair_color;
      let massCharacter = character.mass;
      let div = $('<div>');
      let href = images[a];
      let img = $('<img src="'+href+'" data-mass="'+ massCharacter+'" data-hair="'+ hairCharacter+'" data-name ="' + nameCharacter +'" data-heigth ="'+ heightCharacter+'" data-birth="'+birthCharacter+'" data-gender="'+genderCharacter+'" alt="">')
      div.append(img);
      // div.textContent = nameCharacter;
      $('#response-container').append(div);
      a++;
      console.log(character);
    });

    $('#response-container div img').on('click', function(event) {
      var dataName = 'Nombre: '+ $(this).data('name');
      let dataHeigth = 'Altura: '+ $(this).data('heigth');
      let databirth = 'Año de Nacimiento: '+ $(this).data('birth');
      let datagender = 'Género: ' + $(this).data('gender');
      let dataHair = 'Color de Cabello: '+ $(this).data('hair');
      let dataMass = 'Peso: '+ $(this).data('mass') + ' libras';
      alert(dataName + '\n' + dataHeigth + '\n'+ dataMass + '\n'+ databirth +'\n'+ datagender +'\n'+ dataHair);
    });
    };
