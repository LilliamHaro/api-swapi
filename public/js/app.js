window.addEventListener('load', function() {
  getNews();
});
$('#myModal').on('shown.bs.modal', function() {
  $('#myInput').focus();
});
function getNews() {
  // instanciando el objeto XMLHttpRequest para el funcionamiento de ajax
  const articleRequest = new XMLHttpRequest();

  articleRequest.open('GET', 'https://swapi.co/api/people/');
  // funciones
  articleRequest.onload = addNews;
  articleRequest.onerror = handleError;
  articleRequest.send();
}
// funcion para manejar los errores
function handleError() {
  console.log('se ha presentado un error');
}

function addNews() {
  const data = JSON.parse(this.responseText);
  const response = data.results;
  let centinel = 0;
  response.forEach(function(character) {
    let nameCharacter = character.name;
    let heightCharacter = character.height;
    let birthCharacter = character.birth_year;
    let genderCharacter = character.gender;
    let hairCharacter = character.hair_color;
    let massCharacter = character.mass;
    let div = $('<div>');
    let href = images[centinel];
    let img = $('<img data-toggle="modal" data-target=".fade" src="' + href + '" data-mass="' + massCharacter + '" data-hair="' + hairCharacter + '" data-name ="' + nameCharacter + '" data-heigth ="' + heightCharacter + '" data-birth="' + birthCharacter + '" data-gender="' + genderCharacter + '" alt="">');
    div.append(img);
    // div.textContent = nameCharacter;
    $('#response-container').append(div);
    centinel++;
    // console.log(character);
  });

  $('#response-container div img').on('click', function(event) {
    $('#body').empty();
    var dataName = 'Nombre: ' + $(this).data('name');
    let dataHeigth = 'Altura: ' + $(this).data('heigth');
    let databirth = 'Año de Nacimiento: ' + $(this).data('birth');
    let datagender = 'Género: ' + $(this).data('gender');
    let dataHair = 'Color de Cabello: ' + $(this).data('hair');
    let dataMass = 'Peso: ' + $(this).data('mass') + ' libras';
    let dataCharacter = '<div>' + dataName + '</div>' + '<div>' + dataHeigth + '</div>' + '<div>' + dataMass + '</div>' + '<div>' + databirth + '</div>' + '<div>' + datagender + '</div>' + dataHair;
    $('#body').html(dataCharacter);
    let image = $(this).clone();
    let divImg = $('<div>');
    divImg.append(image);
    $('#body').append(divImg);
  });
};
