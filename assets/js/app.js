const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//El nombre de las variables se cambió para mejorar la legibilidad
const nameParagraph = document.querySelector('.name'); //Al tratarse de una clase y de querySelector se requiere usar un "." antes del nombre de la clase
const blogParagraph = document.querySelector('.blog'); // se trata de una clase y no de un id, por lo que se requiere usar "."
const locationParagraph = document.querySelector('.location');

//Se transforma a arrow function ya que requiere de un async
const displayUser = async (username) =>{
    const url= `${usersEndpoint}/${username}`; // se agrega una nueva variable que contenga la url para mejorar legibilidad
    nameParagraph.textContent = 'cargando...';
    const response = await fetch(url);
    const data =await response.json();
    console.log(data);
    // se coloca acento invertido en lugar de una comilla para el correcto uso de template literals
    // se coloca innerHTML en lugar de text content para no pasar solo strings
    nameParagraph.innerHTML = `${data.name}`; 
    blogParagraph.innerHTML = `${data.blog}`;
    locationParagraph.innerHTML = `${data.location}`;
  } 
  
  const handleError = (err) =>{
  console.log('OH NO!');
  console.log(err);
  nameParagraph.innerHTML = `Algo salió mal: ${err}`; //se coloca inner html para que no el contenido no se pase como solo strings
  }


displayUser("stolinski").catch(handleError);